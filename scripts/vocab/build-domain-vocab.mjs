#!/usr/bin/env node
/**
 * Build domain-specific English vocabulary flashcards (science, engineering, political, judicial).
 */
import { writeFileSync, readFileSync, readdirSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { ensureLexitronDictionary, buildLexitronIndex } from "./lexitron.mjs";
import { resolveTranslations, slugify } from "./enrich-translations.mjs";
import { formatCardBack } from "./lexitron.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOMAINS_DIR = join(__dirname, "domains");
const OUT_DIR = join(__dirname, "../../src/data/vocab");

const DOMAIN_META = {
  science: { label: "Science", labelTh: "วิทยาศาสตร์" },
  engineering: { label: "Engineering", labelTh: "วิศวกรรม" },
  political: { label: "Political", labelTh: "การเมือง" },
  judicial: { label: "Judicial", labelTh: "กฎหมาย/ยุติธรรม" },
};

async function buildDomainCards(domainId, words, lexitronIndex) {
  const meta = DOMAIN_META[domainId];
  const cards = [];
  let hits = 0;

  for (const item of words) {
    const headword = item.word.trim();
    const pos = item.pos?.trim() || "noun";
    const translations = await resolveTranslations(headword, pos, lexitronIndex, { useMt: true });
    if (translations.length) hits += 1;

    const slug = slugify(headword);
    const posSlug = slugify(pos);
    const footer = `(${meta.label} · ${pos})`;
    const back = translations.length
      ? formatCardBack({ translations, pos, level: meta.label, footer })
      : footer;

    cards.push({
      id: `english-domain-${domainId}-${slug}-${posSlug}`,
      front: headword,
      back,
      translations,
      domain: domainId,
      domainLabel: meta.label,
      pos,
    });
  }

  return { cards, hits, meta };
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const lexPath = await ensureLexitronDictionary();
  const lexitronIndex = buildLexitronIndex(lexPath);

  const files = readdirSync(DOMAINS_DIR).filter((f) => f.endsWith(".json"));
  const manifest = { domains: {}, generatedAt: new Date().toISOString() };

  for (const file of files) {
    const domainId = file.replace(/\.json$/, "");
    if (!DOMAIN_META[domainId]) {
      console.warn("Skip unknown domain file:", file);
      continue;
    }

    const words = JSON.parse(readFileSync(join(DOMAINS_DIR, file), "utf8"));
    console.log(`Building ${domainId} (${words.length} words)...`);
    const { cards, hits, meta } = await buildDomainCards(domainId, words, lexitronIndex);

    const outPath = join(OUT_DIR, `domain-${domainId}.json`);
    writeFileSync(outPath, JSON.stringify(cards, null, 0), "utf8");
    console.log(`  ${hits}/${words.length} with Thai → ${outPath}`);

    manifest.domains[domainId] = {
      label: meta.label,
      labelTh: meta.labelTh,
      count: cards.length,
      withThai: hits,
    };
  }

  writeFileSync(join(OUT_DIR, "domains-manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
