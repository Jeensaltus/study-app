import { enrichSubject } from "./contentEnhancements.js";
import { enrichSubjectSupplements } from "./textbookLegacy.js";
import { enrichExamples } from "./enrichExamples.js";
import { getTextbookEnhancement } from "./textbook/index.js";
import { mergeChaptersPreferIncoming } from "./mergeUtils.js";
import { applyCalTrackToSubject } from "./calTrack.js";
import { readProgress } from "../utils/storage.js";
import { subjectMetaMap } from "./subjectsMeta.js";

const SUBJECT_IMPORTS = {
  calculus1: () => import("./calculus1.js").then((m) => m.calculus1),
  calculus2: () => import("./calculus2.js").then((m) => m.calculus2),
  physics1: () => import("./physics1.js").then((m) => m.physics1),
  physics2: () => import("./physics2.js").then((m) => m.physics2),
  chemistry: () => import("./chemistry.js").then((m) => m.chemistry),
  programming: () => import("./programming.js").then((m) => m.programming),
  english: () => import("./english.js").then((m) => m.english),
  materials: () => import("./materials.js").then((m) => m.materials),
};

const TEXTBOOK_SUBJECTS = new Set(["calculus1", "calculus2", "physics1", "physics2", "chemistry"]);

const cache = new Map();

export function clearSubjectCache() {
  cache.clear();
}

function applyTextbookSyllabus(subject) {
  const extra = getTextbookEnhancement(subject.id);
  if (!extra?.chapters?.length) return subject;
  return {
    ...subject,
    chapters: mergeChaptersPreferIncoming(subject.chapters ?? [], extra.chapters),
  };
}

function enrichPipeline(subject) {
  const enriched = TEXTBOOK_SUBJECTS.has(subject.id)
    ? applyTextbookSyllabus(subject)
    : enrichSubject(subject);

  return Promise.resolve(enriched)
    .then((s) => enrichSubjectSupplements(s))
    .then((s) => enrichExamples(s))
    .then((s) => applyCalTrackToSubject(s, readProgress().settings));
}

export async function loadSubject(subjectId) {
  const id = subjectMetaMap[subjectId] ? subjectId : "calculus1";
  if (cache.has(id)) return cache.get(id);

  const loader = SUBJECT_IMPORTS[id];
  if (!loader) {
    throw new Error(`Unknown subject: ${subjectId}`);
  }

  const pending = loader().then(enrichPipeline);
  cache.set(id, pending);
  return pending;
}

export function preloadSubject(subjectId) {
  if (subjectMetaMap[subjectId]) {
    void loadSubject(subjectId);
  }
}
