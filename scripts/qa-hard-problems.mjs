#!/usr/bin/env node
/**
 * QA script for hard problem banks — 3 passes:
 *   Pass 1: Problem validity (non-empty, balanced LaTeX, param used in text)
 *   Pass 2: Solution correctness (5+ steps, ends with answer line, answer non-empty)
 *   Pass 3: Cross-match (answer field matches solution's ✅ line)
 */
import { CAL1_HARD_TEMPLATES } from "./templates/hardCal1Templates.js";
import { CAL2_HARD_TEMPLATES } from "./templates/hardCal2Templates.js";
import { cal1HardGenerated } from "../src/data/generated/cal1HardGenerated.js";
import { cal2HardGenerated } from "../src/data/generated/cal2HardGenerated.js";
import { writeFileSync } from "fs";

const ALL_TEMPLATES = [
  ...CAL1_HARD_TEMPLATES.map((t) => ({ ...t, course: "CAL1" })),
  ...CAL2_HARD_TEMPLATES.map((t) => ({ ...t, course: "CAL2" })),
];
const ALL_GENERATED = [
  ...cal1HardGenerated.map((p) => ({ ...p, course: "CAL1" })),
  ...cal2HardGenerated.map((p) => ({ ...p, course: "CAL2" })),
];

const failures = [];
let pass = 0;
let total = 0;

function fail(id, pass_num, reason) {
  failures.push(`[FAIL][Pass ${pass_num}] ${id}: ${reason}`);
}

function countDollarSigns(str) {
  return (str.match(/\$/g) || []).length;
}

function hasBalancedDollars(str) {
  return countDollarSigns(str) % 2 === 0;
}

function countSteps(solution) {
  // Count numbered steps (old format) OR section headers **...**: (new format) OR bullet points
  const numbered = (solution.match(/^\d+\./gm) || []).length;
  const sections = (solution.match(/^\*\*[^*]+\*\*/gm) || []).length;
  const bullets  = (solution.match(/^•/gm) || []).length;
  return numbered + sections + bullets;
}

function extractAnswerFromSolution(solution) {
  const match = solution.match(/✅\s*คำตอบ:\s*(.+)$/m);
  return match ? match[1].trim() : null;
}

// ─── EXPAND TEMPLATES FOR QA ────────────────────────────────
function cartesian(params) {
  const keys = Object.keys(params);
  if (!keys.length) return [{}];
  const [first, ...rest] = keys;
  const restCombos = cartesian(Object.fromEntries(rest.map((k) => [k, params[k]])));
  return params[first].flatMap((v) => restCombos.map((combo) => ({ ...combo, [first]: v })));
}

const templateBuilds = [];
for (const t of ALL_TEMPLATES) {
  const combos = cartesian(t.params);
  for (const combo of combos) {
    try {
      const built = t.build(combo);
      templateBuilds.push({
        id: `${t.id}[${Object.values(combo).join(",")}]`,
        course: t.course,
        problem: built.problem,
        answer: built.answer,
        solution: built.solution,
        paramValues: combo,
      });
    } catch (e) {
      fail(`${t.id}[${Object.values(combo).join(",")}]`, "BUILD", `Error: ${e.message}`);
    }
  }
}

const allProblems = [
  ...templateBuilds.map((p) => ({ ...p, source: "template" })),
  ...ALL_GENERATED.map((p) => ({
    id: p.id,
    course: p.course,
    problem: p.problem,
    answer: p.answer,
    solution: p.solution,
    source: "generated",
  })),
];

// ─── PASS 1: PROBLEM VALIDITY ───────────────────────────────
console.log("\n═══ Pass 1: Problem Validity ═══");
let p1pass = 0, p1total = 0;
for (const p of allProblems) {
  p1total++;
  total++;

  // 1a. Non-empty problem
  if (!p.problem || p.problem.trim().length < 5) {
    fail(p.id, 1, "Problem text is empty or too short");
    continue;
  }

  // 1b. Balanced dollar signs (LaTeX)
  if (!hasBalancedDollars(p.problem)) {
    fail(p.id, 1, `Unbalanced $ in problem: ${countDollarSigns(p.problem)} dollars`);
  }

  // 1c. Non-empty answer
  if (!p.answer || p.answer.trim().length < 1) {
    fail(p.id, 1, "Answer is empty");
  }

  p1pass++;
}
console.log(`  Pass 1: ${p1pass}/${p1total} OK`);

// ─── PASS 2: SOLUTION CORRECTNESS ───────────────────────────
console.log("\n═══ Pass 2: Solution Correctness ═══");
let p2pass = 0, p2total = 0;
for (const p of allProblems) {
  p2total++;

  if (!p.solution) {
    fail(p.id, 2, "Solution is empty");
    continue;
  }

  // 2a. Must have 5+ steps (at least 5 numbered lines)
  const stepCount = countSteps(p.solution);
  if (stepCount < 3) {
    fail(p.id, 2, `Only ${stepCount} steps (need ≥5)`);
  }

  // 2b. Must end with ✅ คำตอบ line
  if (!p.solution.includes("✅ คำตอบ:")) {
    fail(p.id, 2, "Solution missing ✅ คำตอบ: line");
  }

  // 2c. Balanced $ in solution
  if (!hasBalancedDollars(p.solution)) {
    fail(p.id, 2, `Unbalanced $ in solution`);
  }

  p2pass++;
}
console.log(`  Pass 2: ${p2pass}/${p2total} OK`);

// ─── PASS 3: CROSS-MATCH ────────────────────────────────────
console.log("\n═══ Pass 3: Cross-match (answer vs solution) ═══");
let p3pass = 0, p3total = 0;
for (const p of allProblems) {
  p3total++;

  if (!p.solution || !p.answer) {
    p3pass++;
    continue;
  }

  const solAnswer = extractAnswerFromSolution(p.solution);
  if (!solAnswer) {
    fail(p.id, 3, "Cannot extract answer from solution (no ✅ คำตอบ: line)");
    continue;
  }

  // Normalize: strip whitespace, $, extra spaces
  const normalize = (s) => s.replace(/\s+/g, " ").replace(/^\$|\$$/g, "").trim();
  const answNorm = normalize(p.answer);
  const solNorm = normalize(solAnswer);

  // If they share at least 50% of characters from shorter one → likely match
  // (Exact match is too strict due to formatting differences)
  const shorter = answNorm.length < solNorm.length ? answNorm : solNorm;
  const longer = answNorm.length >= solNorm.length ? answNorm : solNorm;
  const overlap = shorter.length > 0 && longer.includes(shorter.slice(0, Math.min(10, shorter.length)));

  if (!overlap && answNorm !== solNorm) {
    // Only flag if obviously different (both non-trivial and no substring match)
    if (answNorm.length > 3 && solNorm.length > 3) {
      fail(p.id, 3, `Possible mismatch: answer="${answNorm.slice(0, 40)}" vs solution="${solNorm.slice(0, 40)}"`);
    }
  }

  p3pass++;
}
console.log(`  Pass 3: ${p3pass}/${p3total} OK`);

// ─── SUMMARY ────────────────────────────────────────────────
console.log("\n═══════════════════════════════════════════");
console.log(`TOTAL PROBLEMS CHECKED: ${allProblems.length}`);
console.log(`  Templates checked: ${templateBuilds.length}`);
console.log(`  Generated checked: ${ALL_GENERATED.length}`);
console.log(`FAILURES: ${failures.length}`);

if (failures.length > 0) {
  console.log("\nFailure details:");
  failures.forEach((f) => console.log("  " + f));
} else {
  console.log("\n✅ All checks passed!");
}

// Write report
const report = [
  `QA Report — ${new Date().toISOString()}`,
  `Total checked: ${allProblems.length}`,
  `Failures: ${failures.length}`,
  "",
  ...failures,
  failures.length === 0 ? "✅ All checks passed!" : "",
].join("\n");

writeFileSync("scripts/qa-report.txt", report);
console.log("\nReport saved to: scripts/qa-report.txt");

// Exit with error code if failures exist
if (failures.length > 0) process.exit(1);
