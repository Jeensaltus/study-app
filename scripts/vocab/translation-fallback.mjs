/**
 * Machine translation fallback (MyMemory) + cache for words missing from Lexitron.
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = join(__dirname, "cache");
const MT_CACHE = join(CACHE_DIR, "thai-mt.json");

const MANUAL_OVERRIDES = {
  you: ["คุณ", "เธอ", "พวกคุณ"],
  "'re": ["เป็น", "คือ"],
  "'m": ["เป็น", "ครับ/ค่ะ (ย่อจาก am)"],
  "'s": ["เป็น", "ของ", "has/is"],
  "'ve": ["ได้", "มี"],
  "'ll": ["จะ"],
  "'d": ["would/had"],
};

function loadMtCache() {
  if (!existsSync(MT_CACHE)) return {};
  try {
    return JSON.parse(readFileSync(MT_CACHE, "utf8"));
  } catch {
    return {};
  }
}

function saveMtCache(cache) {
  writeFileSync(MT_CACHE, JSON.stringify(cache), "utf8");
}

function cacheKey(headword, pos) {
  return `${headword.toLowerCase()}|${pos}`;
}

function cleanMtText(text) {
  return text
    .replace(/\s*\(คำ(?:คุณ)?ศัพท์[^)]*\)\s*$/iu, "")
    .replace(/\s*\((?:noun|verb|adjective|adverb|pronoun|preposition)[^)]*\)\s*$/iu, "")
    .trim();
}

async function fetchMyMemory(headword) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(headword)}&langpair=en|th`;

  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const text = cleanMtText(data?.responseData?.translatedText?.trim() ?? "");
    if (!text || text === headword) return null;
    if (/^QUERY LENGTH LIMIT/i.test(text)) return null;
    if (/^MYMEMORY WARNING/i.test(text)) return null;
    return text;
  } catch {
    return null;
  }
}

/** @returns {Promise<string[]>} */
export async function lookupFallbackTranslations(headword, pos, { delayMs = 120 } = {}) {
  const lower = headword.toLowerCase();
  if (MANUAL_OVERRIDES[lower]) {
    return MANUAL_OVERRIDES[lower].slice(0, 3);
  }

  const cache = loadMtCache();
  const key = cacheKey(headword, pos);
  if (cache[key] !== undefined) {
    return cache[key] ?? [];
  }

  const translated = await fetchMyMemory(headword);
  await new Promise((r) => setTimeout(r, delayMs));

  const results = translated ? [translated] : [];
  cache[key] = results.length ? results : null;
  saveMtCache(cache);
  return results;
}

export async function enrichMissingWithMt(entries, isMissing, { onProgress } = {}) {
  const cache = loadMtCache();
  let fetched = 0;
  let filled = 0;

  const result = [];

  for (const entry of entries) {
    if (!isMissing(entry)) {
      result.push(entry);
      continue;
    }

    const key = cacheKey(entry.headword, entry.pos);
    let translations = [];

    if (MANUAL_OVERRIDES[entry.headword.toLowerCase()]) {
      translations = MANUAL_OVERRIDES[entry.headword.toLowerCase()].slice(0, 3);
    } else if (cache[key]) {
      translations = cache[key];
    } else if (cache[key] === null) {
      translations = [];
    } else {
      const translated = await fetchMyMemory(entry.headword, entry.pos);
      await new Promise((r) => setTimeout(r, 120));
      translations = translated ? [translated] : [];
      cache[key] = translations.length ? translations : null;
      fetched += 1;
      if (fetched % 25 === 0) {
        saveMtCache(cache);
        onProgress?.(fetched, filled);
      }
    }

    if (translations.length) filled += 1;
    result.push({ ...entry, translations });
  }

  saveMtCache(cache);
  return { entries: result, mtFetched: fetched, mtFilled: filled };
}

export { loadMtCache, saveMtCache, MANUAL_OVERRIDES, cleanMtText };
