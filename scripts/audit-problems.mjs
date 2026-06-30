import { cal1Problems, cal2Problems } from '../src/data/mathExamProblems.js';
import { cal1Generated } from '../src/data/generated/cal1Generated.js';
import { cal2Generated } from '../src/data/generated/cal2Generated.js';
import { inferExamType, TOPIC_TO_CHAPTER_TITLE } from '../src/data/examWeights.js';

const examAll = [...cal1Problems, ...cal2Problems];
const genAll = [...cal1Generated, ...cal2Generated];
const all = [...examAll, ...genAll];

function norm(s) {
  return (s || '')
    .replace(/\s+/g, ' ')
    .replace(/\\/g, '')
    .replace(/\$/g, '')
    .trim()
    .toLowerCase()
    .slice(0, 150);
}

function countBy(arr, fn) {
  return arr.reduce((acc, item) => {
    const k = fn(item);
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});
}

// Duplicate IDs
const ids = all.map((p) => p.id);
const dupIds = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];

// Near-duplicate problems (exam only)
const byNorm = {};
for (const p of examAll) {
  const k = norm(p.problem);
  if (!byNorm[k]) byNorm[k] = [];
  byNorm[k].push(p);
}
const dupProblems = Object.entries(byNorm).filter(([, arr]) => arr.length > 1);

// Vague / suspicious answers
const vaguePatterns = [
  /คำนวณ/,
  /ต้อง/,
  /ตรวจสอบ/,
  /แบ่งเป็น/,
  /ใช้จุดอื่น/,
  /\?\.\.\./,
  /minimize \$C\$/,
  /คำนวณผ่าน/,
  /ตรวจ \$M/,
  /หรือจัดรูป/,
  /\(หรือ/,
  /ไม่มีบริเวณ/,
];
const suspicious = examAll.filter((p) =>
  vaguePatterns.some((re) => re.test(p.answer) || re.test(p.problem))
);

// Wrong placement
const wrongCal1 = cal2Problems.filter((p) => p.id.startsWith('c1-'));
const wrongCal2 = cal1Problems.filter((p) => p.id.startsWith('c2-'));

const examTypeCounts = countBy(examAll, (p) => inferExamType(p.source));
const genTopicCounts = countBy(genAll, (p) => TOPIC_TO_CHAPTER_TITLE[p.topic] ?? p.topic);
const genExamTypeCounts = countBy(genAll, (p) => p.examType ?? 'all');

console.log(JSON.stringify({
  totals: {
    examCal1: cal1Problems.length,
    examCal2: cal2Problems.length,
    genCal1: cal1Generated.length,
    genCal2: cal2Generated.length,
    examTotal: examAll.length,
    generatedTotal: genAll.length,
    grandTotal: all.length,
  },
  examTypeCounts,
  generatedByTopic: genTopicCounts,
  generatedByExamType: genExamTypeCounts,
  dupIds,
  dupProblemGroups: dupProblems.length,
  wrongPlacement: { c1InCal2: wrongCal1.map((p) => p.id), c2InCal1: wrongCal2.map((p) => p.id) },
  suspiciousCount: suspicious.length,
  suspicious: suspicious.slice(0, 15).map((p) => ({
    id: p.id,
    source: p.source,
    answer: p.answer?.slice(0, 120),
  })),
}, null, 2));
