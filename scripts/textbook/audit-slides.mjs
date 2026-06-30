#!/usr/bin/env node
/**
 * Audit merged slide content: duplicates, QA fields, suspicious patterns.
 * Run: node scripts/textbook/audit-slides.mjs
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { iterSections } from "./lib/syllabus.mjs";
import { mergeChaptersPreferIncoming } from "../../src/data/mergeUtils.js";

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, "../..");

const SUBJECT_LOAD = {
  calculus1: ["calculus1.js", "textbook/calculus1.js", "textbookCalculus1"],
  calculus2: ["calculus2.js", "textbook/calculus2.js", "textbookCalculus2"],
  physics1: ["physics1.js", "textbook/physics1.js", "textbookPhysics1"],
  physics2: ["physics2.js", "textbook/physics2.js", "textbookPhysics2"],
  chemistry: ["chemistry.js", "textbook/chemistry.js", "textbookChemistry"],
  programming: ["programming.js", null, null],
};

const MORE = {
  physics1: ["morePhysics.js", "morePhysics1"],
  physics2: ["morePhysics.js", "morePhysics2"],
  chemistry: ["moreChemistry.js", "moreChemistry"],
};

async function loadMerged(subjectId) {
  const [baseFile, tbFile, tbExport] = SUBJECT_LOAD[subjectId];
  const baseMod = await import(`../../src/data/${baseFile}`);
  let subject = baseMod[subjectId];
  if (tbFile) {
    const tbMod = await import(`../../src/data/${tbFile}`);
    const tb = tbMod[tbExport];
    subject = {
      ...subject,
      chapters: mergeChaptersPreferIncoming(subject.chapters ?? [], tb?.chapters ?? []),
    };
  }
  const moreCfg = MORE[subjectId];
  if (moreCfg) {
    const moreMod = await import(`../../src/data/${moreCfg[0]}`);
    const extra = moreMod[moreCfg[1]];
    if (extra?.chapters?.length) {
      subject = {
        ...subject,
        chapters: mergeChaptersPreferIncoming(subject.chapters ?? [], extra.chapters),
      };
    }
  }
  return subject;
}

function countDollars(s) {
  return (s.match(/\$/g) ?? []).length;
}

function auditSection(section, path) {
  const issues = [];
  if (!section.concept || section.concept.length < 40) issues.push("concept too short");
  if (!section.formula) issues.push("missing formula");
  const exCount = section.examples?.length ?? (section.example ? 1 : 0);
  if (exCount < 2) issues.push(`only ${exCount} example(s)`);
  if (!section.practice) issues.push("missing practice");
  if (!section.source) issues.push("missing source");
  const blob = JSON.stringify(section);
  if (countDollars(blob) % 2 !== 0) issues.push("unbalanced $");
  if (/ดูวิธีทำในขั้นตอน|ขึ้นกับโจทย์ — ใช้สูตรใน section นี้/.test(blob)) {
    issues.push("placeholder second example");
  }
  if (/จำแนak|วัตถu|วัสดu|แปr/.test(section.concept + section.warning)) {
    issues.push("typo/garbled text");
  }
  return issues.map((i) => `${path}: ${i}`);
}

async function main() {
  let exitCode = 0;
  console.log("\n=== Slide Content Audit ===\n");

  for (const subjectId of Object.keys(SUBJECT_LOAD)) {
    const subject = await loadMerged(subjectId);
    const idMap = new Map();
    const titleMap = new Map();
    const allIssues = [];
    let sections = 0;
    let rich = 0;

    for (const ch of subject.chapters ?? []) {
      for (const sec of ch.sections ?? []) {
        sections++;
        const path = `${subjectId}/${ch.id}/${sec.id}`;
        if (idMap.has(sec.id)) {
          allIssues.push(`${path}: DUPLICATE section id "${sec.id}" (also in ${idMap.get(sec.id)})`);
        } else idMap.set(sec.id, path);

        const tKey = sec.title?.toLowerCase().trim();
        if (tKey && titleMap.has(tKey)) {
          allIssues.push(`${path}: DUPLICATE title "${sec.title}" (also ${titleMap.get(tKey)})`);
        } else if (tKey) titleMap.set(tKey, path);

        const issues = auditSection(sec, path);
        allIssues.push(...issues);
        const ex = sec.examples?.length ?? (sec.example ? 1 : 0);
        if (ex >= 2 && sec.concept?.length >= 80 && sec.formula) rich++;
      }
    }

    // Syllabus coverage (textbook subjects only)
    let syllabusMissing = [];
    try {
      for (const { chapter, section } of iterSections(subjectId)) {
        const ch = subject.chapters?.find((c) => c.id === chapter.id);
        if (!ch?.sections?.find((s) => s.id === section.id)) {
          syllabusMissing.push(`${chapter.id}/${section.id}`);
        }
      }
    } catch {
      /* programming not in syllabus */
    }

    const dupIds = allIssues.filter((i) => i.includes("DUPLICATE section id"));
    const dupTitles = allIssues.filter((i) => i.includes("DUPLICATE title"));
    const placeholders = allIssues.filter((i) => i.includes("placeholder"));
    const typos = allIssues.filter((i) => i.includes("typo"));

    console.log(`## ${subjectId.toUpperCase()}`);
    console.log(`   Sections: ${sections} | Rich (2+ ex): ${rich}/${sections}`);
    if (syllabusMissing.length) console.log(`   Missing syllabus: ${syllabusMissing.join(", ")}`);
    if (dupIds.length) {
      console.log(`   ⚠ Duplicate IDs (${dupIds.length}):`);
      dupIds.forEach((d) => console.log(`      - ${d}`));
      exitCode = 1;
    }
    if (dupTitles.length) {
      console.log(`   ⚠ Duplicate titles (${dupTitles.length}):`);
      dupTitles.slice(0, 8).forEach((d) => console.log(`      - ${d}`));
    }
    if (placeholders.length) console.log(`   ⚠ Placeholder examples: ${placeholders.length}`);
    if (typos.length) {
      console.log(`   ⚠ Typos: ${typos.length}`);
      typos.forEach((t) => console.log(`      - ${t}`));
    }
    const fieldIssues = allIssues.filter(
      (i) => !i.includes("DUPLICATE") && !i.includes("placeholder") && !i.includes("typo")
    );
    if (fieldIssues.length) console.log(`   Field issues: ${fieldIssues.length}`);
    console.log("");
  }

  process.exit(exitCode);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
