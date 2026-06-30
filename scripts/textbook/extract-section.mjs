#!/usr/bin/env node
/**
 * Extract raw text from a textbook PDF section (page range from syllabusMap).
 * Usage: node scripts/textbook/extract-section.mjs --subject calculus1 --section limit-laws
 */
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { findSection, formatSource } from "./lib/syllabus.mjs";
import { PDF_PATHS, RAW_DIR } from "./lib/paths.mjs";

function parseArgs(argv) {
  const args = { subject: null, section: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--subject") args.subject = argv[++i];
    if (argv[i] === "--section") args.section = argv[++i];
  }
  return args;
}

async function extractPages(pdfPath, startPage, endPage) {
  const { getDocument } = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const data = await import("fs").then((fs) => fs.readFileSync(pdfPath));
  const doc = await getDocument({ data: new Uint8Array(data), useSystemFonts: true }).promise;
  const lines = [];
  for (let p = startPage; p <= endPage && p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    const text = content.items.map((item) => item.str).join(" ");
    lines.push(`--- Page ${p} ---\n${text}\n`);
  }
  return lines.join("\n");
}

async function main() {
  const { subject: subjectId, section: sectionRef } = parseArgs(process.argv.slice(2));
  if (!subjectId || !sectionRef) {
    console.error("Usage: extract-section.mjs --subject <id> --section <sectionId>");
    process.exit(1);
  }

  const found = findSection(subjectId, sectionRef);
  if (!found) {
    console.error(`Section not found: ${subjectId}/${sectionRef}`);
    process.exit(1);
  }

  const { subject, chapter, section } = found;
  const pdfPath = PDF_PATHS[subject.pdfKey ?? subjectId];
  const pages = section.textbookRef?.pages ?? [1, 5];

  if (!existsSync(pdfPath)) {
    console.warn(`PDF not found: ${pdfPath}`);
    console.warn("Writing placeholder raw file — fill pages in syllabusMap when PDF is available.");
  }

  mkdirSync(join(RAW_DIR, subjectId), { recursive: true });
  const outPath = join(RAW_DIR, subjectId, `${section.id}.txt`);

  let text = `# ${section.title}\n# Source: ${formatSource(subject, section)}\n# Pages: ${pages[0]}-${pages[1]}\n\n`;
  if (existsSync(pdfPath)) {
    try {
      text += await extractPages(pdfPath, pages[0], pages[1]);
    } catch (err) {
      console.warn("PDF extract failed:", err.message);
      text += `[Extract failed — use structure-slides with manual notes or seed content]\n`;
    }
  } else {
    text += `[PDF missing — use seed-parsed.mjs or structure-slides with outline]\n`;
  }

  writeFileSync(outPath, text, "utf8");
  console.log(`Wrote ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
