#!/usr/bin/env node
/**
 * QA: verify syllabus coverage and parsed section quality.
 */
import { readFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";
import { iterSections, loadSyllabus } from "./lib/syllabus.mjs";
import { PARSED_DIR, OUT_DIR } from "./lib/paths.mjs";

function countDollarPairs(s) {
  return (s.match(/\$/g) ?? []).length;
}

function validateSection(section, path) {
  const issues = [];
  if (!section.concept || section.concept.length < 40) issues.push("concept too short");
  if (!section.formula) issues.push("missing formula");
  if (!section.examples || section.examples.length < 2) issues.push("need >= 2 examples");
  if (!section.practice) issues.push("missing practice");
  if (!section.source) issues.push("missing source");
  const blob = JSON.stringify(section);
  if (countDollarPairs(blob) % 2 !== 0) issues.push("unbalanced $ in LaTeX");
  return issues.map((i) => `${path}: ${i}`);
}

function loadBuiltSections(subjectId) {
  const path = join(OUT_DIR, `${subjectId}.js`);
  if (!existsSync(path)) return new Set();
  const text = readFileSync(path, "utf8");
  const ids = [...text.matchAll(/"id"\s*:\s*"([^"]+)"/g)].map((m) => m[1]);
  return new Set(ids);
}

function main() {
  const syllabus = loadSyllabus();
  const allIssues = [];
  const coverage = {};

  for (const subjectId of Object.keys(syllabus)) {
    if (subjectId.startsWith("_")) continue;
    const parsedDir = join(PARSED_DIR, subjectId);
    const parsedIds = existsSync(parsedDir) ? readdirSync(parsedDir).filter((f) => f.endsWith(".json")).map((f) => f.replace(".json", "")) : [];
    const builtIds = loadBuiltSections(subjectId);

    let total = 0;
    let hasParsed = 0;
    let hasBuilt = 0;

    for (const { subjectId: sid, section } of iterSections(subjectId)) {
      total++;
      const parsedPath = join(parsedDir, `${section.id}.json`);
      if (existsSync(parsedPath)) {
        hasParsed++;
        const data = JSON.parse(readFileSync(parsedPath, "utf8"));
        allIssues.push(...validateSection(data, `${sid}/${section.id}`));
      }
      if (builtIds.has(section.id)) hasBuilt++;
    }

    coverage[subjectId] = { total, parsed: hasParsed, built: hasBuilt };
  }

  console.log("\n=== Syllabus Coverage ===");
  for (const [sid, c] of Object.entries(coverage)) {
    console.log(`${sid}: ${c.built}/${c.total} in built JS, ${c.parsed} parsed JSON`);
  }

  if (allIssues.length) {
    console.log("\n=== Issues ===");
    allIssues.forEach((i) => console.log(" -", i));
    process.exit(1);
  }
  console.log("\nQA passed.");
}

main();
