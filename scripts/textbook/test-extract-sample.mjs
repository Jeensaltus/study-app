#!/usr/bin/env node
/**
 * Small smoke test: extract end-of-chapter exercises + answer appendix from 3 textbooks.
 * Does NOT write to quiz bank — outputs to scripts/textbook/test-output/
 */
import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync, existsSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "test-output");
mkdirSync(OUT, { recursive: true });

const BOOKS = [
  {
    id: "stewart",
    label: "Stewart Calculus 9e",
    path: join(
      __dirname,
      "../../../subject/Math/Calculus Early Transcendentals 9th Edition Metric Edition by James Stewart, Daniel Clegg, Saleem Watson.pdf"
    ),
    samples: [
      { name: "ch2-section-exercises", pages: [158, 159], note: "Section 2.5 Exercises" },
      { name: "ch2-review", pages: [202, 203, 204], note: "Chapter 2 Review" },
      { name: "ch2-answers-odd", pages: [1317, 1318], note: "Appendix H — Ch2 odd answers" },
    ],
  },
  {
    id: "serway",
    label: "Serway Physics 9e",
    path: join(
      __dirname,
      "../../../subject/Physics/Serway_Physics_for_Scientists_Engineers_Modern Physics_9th Ed_Serway_Jewett.pdf"
    ),
    samples: [
      { name: "ch2-objective-questions", pages: [85, 86], note: "Ch2 Objective Questions" },
      { name: "ch2-problems", pages: [87, 88], note: "Ch2 Problems start" },
      { name: "ch2-answers-odd", pages: [1550, 1551], note: "Odd-numbered answers (incl. Ch2 area)" },
    ],
  },
  {
    id: "central-science",
    label: "Central Science 12e",
    path: join(
      __dirname,
      "../../../subject/Chemistry/scienceChemistryTheCentralScience12th.pdf"
    ),
    samples: [
      { name: "ch3-exercises", pages: [148, 149, 150], note: "Ch3 Exercises" },
      { name: "ch3-additional", pages: [154, 155], note: "Additional / Integrative Exercises" },
      { name: "ch3-answers-selected", pages: [1110, 1111], note: "Answers to Selected Exercises (Ch3)" },
    ],
  },
];

function scoreText(text) {
  const len = text.length;
  const words = text.split(/\s+/).filter(Boolean).length;
  const weird = (text.match(/[^\x09\x0a\x0d\x20-\x7e\u0e00-\u0e7f]/g) ?? []).length;
  const broken = (text.match(/\b[a-z]\s[a-z]\s[a-z]\b/gi) ?? []).length;
  const numbers = (text.match(/\d+\.\d+|\d+\)/g) ?? []).length;
  return { len, words, weirdChars: weird, fragmentedTriples: broken, numberedItems: numbers };
}

async function extractPages(pdfPath, pages) {
  const { getDocument } = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const data = readFileSync(pdfPath);
  const doc = await getDocument({ data: new Uint8Array(data), useSystemFonts: true }).promise;
  const chunks = [];
  for (const p of pages) {
    if (p > doc.numPages) {
      chunks.push(`--- Page ${p} ---\n[OUT OF RANGE — PDF has ${doc.numPages} pages]\n`);
      continue;
    }
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    const text = content.items.map((item) => item.str).join(" ");
    chunks.push(`--- Page ${p} ---\n${text}\n`);
  }
  return { text: chunks.join("\n"), numPages: doc.numPages };
}

const report = [];

for (const book of BOOKS) {
  console.log(`\n▶ ${book.label}`);
  if (!existsSync(book.path)) {
    console.log(`  ✗ PDF not found: ${book.path}`);
    report.push({ book: book.id, status: "missing", path: book.path });
    continue;
  }

  for (const sample of book.samples) {
    try {
      const { text, numPages } = await extractPages(book.path, sample.pages);
      const scores = scoreText(text);
      const outFile = join(OUT, `${book.id}-${sample.name}.txt`);
      writeFileSync(
        outFile,
        `# ${book.label}\n# ${sample.note}\n# Pages: ${sample.pages.join(", ")} (PDF total: ${numPages})\n\n${text}`,
        "utf8"
      );

      const preview = text.replace(/\s+/g, " ").trim().slice(0, 220);
      console.log(`  ✓ ${sample.name} — ${scores.words} words, ${scores.numberedItems} numbered items`);
      console.log(`    preview: ${preview}…`);
      report.push({
        book: book.id,
        sample: sample.name,
        status: "ok",
        pages: sample.pages,
        pdfPages: numPages,
        scores,
        outFile,
      });
    } catch (err) {
      console.log(`  ✗ ${sample.name}: ${err.message}`);
      report.push({ book: book.id, sample: sample.name, status: "error", error: err.message });
    }
  }
}

writeFileSync(join(OUT, "report.json"), JSON.stringify(report, null, 2), "utf8");
console.log(`\nWrote samples to ${OUT}`);
