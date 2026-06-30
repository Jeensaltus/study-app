#!/usr/bin/env node
/**
 * Write parsed JSON slide content for syllabus sections (no API required).
 * Usage: node scripts/textbook/seed-parsed.mjs [--subject calculus1]
 */
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import { iterSections, formatSource } from "./lib/syllabus.mjs";
import { PARSED_DIR } from "./lib/paths.mjs";
import { SEED_SECTIONS } from "./seed/sections.mjs";

const TEXTBOOK_LABELS = SEED_SECTIONS._textbooks ?? {};

function parseArgs(argv) {
  return { subject: argv.includes("--subject") ? argv[argv.indexOf("--subject") + 1] : null };
}

function main() {
  const { subject: filterSubject } = parseArgs(process.argv.slice(2));
  let count = 0;

  for (const { subjectId, chapter, section } of iterSections(filterSubject)) {
    const seed = SEED_SECTIONS[`${subjectId}/${section.id}`];
    if (!seed) continue;

    const payload = {
      id: section.id,
      title: section.title,
      source: formatSource({ textbook: TEXTBOOK_LABELS[subjectId] ?? "" }, section),
      chapterId: chapter.id,
      ...seed,
    };

    const dir = join(PARSED_DIR, subjectId);
    mkdirSync(dir, { recursive: true });
    const outPath = join(dir, `${section.id}.json`);
    if (!existsSync(outPath) || process.argv.includes("--force")) {
      writeFileSync(outPath, JSON.stringify(payload, null, 2), "utf8");
      count++;
    }
  }

  console.log(`Seeded ${count} parsed section(s) to ${PARSED_DIR}`);
}

main();
