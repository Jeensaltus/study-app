#!/usr/bin/env node
/**
 * Download CEFR-J + Octanove CSVs, build flashcard shards with Thai translations.
 * Usage:
 *   node scripts/vocab/build-cefr-vocab.mjs
 *   node scripts/vocab/build-cefr-vocab.mjs --no-mt
 *   node scripts/vocab/build-cefr-vocab.mjs --with-definitions
 */
import { writeFileSync, readFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import {
  ensureLexitronDictionary,
  buildLexitronIndex,
  lookupThaiTranslations,
  formatCardBack,
} from "./lexitron.mjs";
import { lookupFallbackTranslations, loadMtCache, saveMtCache, MANUAL_OVERRIDES, cleanMtText } from "./translation-fallback.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../../src/data/vocab");
const CACHE_DIR = join(__dirname, "cache");
const DEF_CACHE = join(CACHE_DIR, "definitions.json");

const SOURCES = [
  {
    url: "https://raw.githubusercontent.com/openlanguageprofiles/olp-en-cefrj/master/cefrj-vocabulary-profile-1.5.csv",
    levels: ["A1", "A2", "B1", "B2"],
  },
  {
    url: "https://raw.githubusercontent.com/openlanguageprofiles/olp-en-cefrj/master/octanove-vocabulary-profile-c1c2-1.0.csv",
    levels: ["C1", "C2"],
  },
];

const VALID_LEVELS = new Set(["A1", "A2", "B1", "B2", "C1", "C2"]);
const EXPECTED = { A1: 1164, A2: 1411, B1: 2446, B2: 2778, C1: 1111, C2: 1025 };

function slugify(text) {
  return (
    text
      .toLowerCase()
      .replace(/[/\\.*+?^${}()|[\]\\]/g, " ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "word"
  );
}

function parseRow(line) {
  if (!line.trim() || line.startsWith("headword,")) return null;
  const parts = line.split(",");
  if (parts.length < 3) return null;
  const headword = parts[0].trim();
  const pos = parts[1].trim();
  const level = parts[2].trim();
  if (!headword || !pos || !VALID_LEVELS.has(level)) return null;
  return { headword, pos, level };
}

function loadDefinitionCache() {
  if (!existsSync(DEF_CACHE)) return {};
  try {
    return JSON.parse(readFileSync(DEF_CACHE, "utf8"));
  } catch {
    return {};
  }
}

async function fetchDefinition(word, cache) {
  const key = word.toLowerCase();
  if (cache[key] !== undefined) return cache[key];

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      cache[key] = null;
      return null;
    }
    const data = await res.json();
    const meaning = data[0]?.meanings?.[0]?.definitions?.[0]?.definition;
    cache[key] = meaning ?? null;
    return cache[key];
  } catch {
    cache[key] = null;
    return null;
  }
}

async function enrichEnglishDefinitions(entries, cache) {
  const unique = [...new Set(entries.map((e) => e.headword.toLowerCase()))];
  let fetched = 0;

  for (const word of unique) {
    if (cache[word] !== undefined) continue;
    await fetchDefinition(word, cache);
    fetched += 1;
    if (fetched % 50 === 0) {
      writeFileSync(DEF_CACHE, JSON.stringify(cache), "utf8");
      console.log(`  EN definitions cached: ${Object.keys(cache).length} headwords...`);
    }
    await new Promise((r) => setTimeout(r, 80));
  }

  writeFileSync(DEF_CACHE, JSON.stringify(cache), "utf8");
  return cache;
}

function cacheKey(headword, pos) {
  return `${headword.toLowerCase()}|${pos}`;
}

function formatEntryBack(entry, translations, defCache) {
  let englishDef = null;
  if (defCache) {
    const def = defCache[entry.headword.toLowerCase()];
    if (def) {
      englishDef = def.length > 160 ? `${def.slice(0, 157)}…` : def;
    }
  }

  if (!translations.length && !englishDef) {
    return {
      back: `(${entry.pos} · ${entry.level})`,
      translations: [],
    };
  }

  return {
    back: formatCardBack({
      translations,
      pos: entry.pos,
      level: entry.level,
      englishDef,
    }),
    translations,
  };
}

async function applyMtFallback(entries) {
  const mtCache = loadMtCache();
  let fetched = 0;
  let filled = 0;
  const missing = entries.filter((e) => !e.translations.length);

  console.log(`Machine translation fallback for ${missing.length} missing words...`);

  for (const entry of missing) {
    const key = cacheKey(entry.headword, entry.pos);
    let translations = [];

    if (MANUAL_OVERRIDES[entry.headword.toLowerCase()]) {
      translations = MANUAL_OVERRIDES[entry.headword.toLowerCase()].slice(0, 3);
    } else if (mtCache[key]) {
      translations = mtCache[key].map(cleanMtText).filter(Boolean);
    } else if (mtCache[key] === null) {
      translations = [];
    } else {
      translations = await lookupFallbackTranslations(entry.headword, entry.pos);
      fetched += 1;
      if (fetched % 25 === 0) {
        console.log(`  MT requests: ${fetched}/${missing.length}...`);
      }
    }

    if (translations.length) {
      entry.translations = translations;
      entry.mtFallback = true;
      filled += 1;
    }
  }

  saveMtCache(loadMtCache());
  console.log(`  MT filled ${filled}/${missing.length} previously missing words (${fetched} new API calls)`);
  return entries;
}

function toFlashcard(entry) {
  const slug = slugify(entry.headword);
  const posSlug = slugify(entry.pos);
  return {
    id: `english-${entry.level.toLowerCase()}-${slug}-${posSlug}`,
    front: entry.headword,
    back: entry.back,
    translations: entry.translations ?? [],
    level: entry.level,
    pos: entry.pos,
  };
}

async function main() {
  const withDefinitions = process.argv.includes("--with-definitions");
  const skipMt = process.argv.includes("--no-mt");

  mkdirSync(OUT_DIR, { recursive: true });
  mkdirSync(CACHE_DIR, { recursive: true });

  const lexPath = await ensureLexitronDictionary();
  console.log("Loading Lexitron index...");
  const lexitronIndex = buildLexitronIndex(lexPath);
  console.log(`  ${lexitronIndex.size} English headwords indexed`);

  const allEntries = [];
  const seen = new Set();

  for (const source of SOURCES) {
    console.log("Fetching", source.url);
    const res = await fetch(source.url);
    if (!res.ok) throw new Error(`Failed to fetch ${source.url}: ${res.status}`);
    const text = await res.text();
    const lines = text.split(/\r?\n/);

    for (const line of lines) {
      const row = parseRow(line);
      if (!row) continue;
      const key = `${row.headword}|${row.pos}|${row.level}`;
      if (seen.has(key)) continue;
      seen.add(key);
      allEntries.push(row);
    }
  }

  console.log(`Parsed ${allEntries.length} unique CEFR entries`);

  let defCache = null;
  if (withDefinitions) {
    console.log("Enriching English definitions (slow)...");
    defCache = loadDefinitionCache();
    defCache = await enrichEnglishDefinitions(allEntries, defCache);
  }

  let cardsSource = allEntries.map((entry) => {
    const translations = lookupThaiTranslations(lexitronIndex, entry.headword, entry.pos);
    return { ...entry, translations };
  });

  const lexHits = cardsSource.filter((e) => e.translations.length).length;
  console.log(`Lexitron: ${lexHits}/${allEntries.length} (${((lexHits / allEntries.length) * 100).toFixed(1)}%)`);

  if (!skipMt) {
    cardsSource = await applyMtFallback(cardsSource);
  }

  cardsSource = cardsSource.map((entry) => {
    const { back, translations } = formatEntryBack(entry, entry.translations, defCache);
    return { ...entry, back, translations };
  });

  const thaiHits = cardsSource.filter((e) => e.translations.length).length;
  const multiCount = cardsSource.filter((e) => e.translations.length > 1).length;
  const stillMissing = cardsSource.filter((e) => !e.translations.length);

  console.log(`Total with Thai: ${thaiHits}/${allEntries.length} (${((thaiHits / allEntries.length) * 100).toFixed(1)}%)`);
  console.log(`Multiple meanings: ${multiCount} cards`);
  if (stillMissing.length) {
    console.log(`Still missing: ${stillMissing.length} — e.g. ${stillMissing.slice(0, 5).map((e) => e.headword).join(", ")}`);
  }

  const byLevel = Object.fromEntries([...VALID_LEVELS].map((l) => [l, []]));
  for (const entry of cardsSource) {
    byLevel[entry.level].push(toFlashcard(entry));
  }

  let total = 0;
  for (const level of VALID_LEVELS) {
    const cards = byLevel[level];
    const path = join(OUT_DIR, `cefr-${level.toLowerCase()}.json`);
    writeFileSync(path, JSON.stringify(cards, null, 0), "utf8");
    const expected = EXPECTED[level];
    const pct = expected ? ((cards.length / expected) * 100).toFixed(1) : "—";
    console.log(`  ${level}: ${cards.length} cards (expected ~${expected}, ${pct}%)`);
    total += cards.length;
  }

  console.log(`Total: ${total} flashcards`);
  writeFileSync(
    join(OUT_DIR, "manifest.json"),
    JSON.stringify(
      {
        total,
        thaiCoverage: thaiHits,
        lexitronCoverage: lexHits,
        stillMissing: stillMissing.length,
        byLevel: Object.fromEntries([...VALID_LEVELS].map((l) => [l, byLevel[l].length])),
        generatedAt: new Date().toISOString(),
      },
      null,
      2,
    ),
    "utf8",
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
