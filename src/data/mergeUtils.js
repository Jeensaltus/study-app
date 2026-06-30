import { deriveExampleTitle, normalizeExampleList } from "../utils/exampleTitle.js";

function normalizeExamples(section) {
  if (section.examples?.length) return normalizeExampleList(section.examples);
  if (section.example) {
    return normalizeExampleList([
      { level: "Basic", ...section.example, title: deriveExampleTitle(section.example.problem, section.example.title) },
    ]);
  }
  return [];
}

function combineExamples(existing, incoming) {
  const merged = [...normalizeExamples(existing)];
  const seen = new Set(merged.map((ex) => ex.problem?.slice(0, 80)));

  for (const ex of normalizeExamples(incoming)) {
    const key = ex.problem?.slice(0, 80);
    if (key && seen.has(key)) continue;
    if (key) seen.add(key);
    merged.push(ex);
  }

  return merged;
}

export function mergeChaptersPreferIncoming(baseChapters, extraChapters = []) {
  const byId = new Map(
    baseChapters.map((chapter) => [chapter.id, { ...chapter, sections: [...(chapter.sections ?? [])] }])
  );

  extraChapters.forEach((chapter) => {
    const existing = byId.get(chapter.id);
    if (existing) {
      existing.sections = mergeSectionsPreferIncoming(existing.sections ?? [], chapter.sections ?? []);
      if (chapter.title) existing.title = chapter.title;
      if (chapter.description) existing.description = chapter.description;
    } else {
      byId.set(chapter.id, { ...chapter, sections: [...(chapter.sections ?? [])] });
    }
  });

  return Array.from(byId.values());
}

export function mergeSectionsPreferIncoming(baseSections, extraSections = []) {
  const byId = new Map(baseSections.map((section) => [section.id, { ...section }]));

  extraSections.forEach((incoming) => {
    if (!byId.has(incoming.id)) {
      byId.set(incoming.id, incoming);
      return;
    }

    const existing = byId.get(incoming.id);
    const merged = { ...existing, ...incoming };
    const combined = combineExamples(existing, incoming);
    if (combined.length) {
      merged.examples = combined;
      delete merged.example;
    }
    byId.set(incoming.id, merged);
  });

  return Array.from(byId.values());
}

export function mergeSections(baseSections, extraSections = []) {
  const byId = new Map(baseSections.map((section) => [section.id, { ...section }]));

  extraSections.forEach((incoming) => {
    if (!byId.has(incoming.id)) {
      byId.set(incoming.id, incoming);
      return;
    }

    const existing = byId.get(incoming.id);
    const merged = { ...existing, ...incoming };
    const combined = combineExamples(existing, incoming);

    if (combined.length) {
      merged.examples = combined;
      delete merged.example;
    }

    for (const key of ["source", "practice", "formula", "concept", "title", "description"]) {
      const existingVal = existing[key];
      const incomingVal = incoming[key];
      if (typeof existingVal === "string" && existingVal.length >= (incomingVal?.length ?? 0)) {
        merged[key] = existingVal;
      }
    }

    byId.set(incoming.id, merged);
  });

  return Array.from(byId.values());
}

export function mergeChapters(baseChapters, extraChapters = []) {
  const byId = new Map(
    baseChapters.map((chapter) => [chapter.id, { ...chapter, sections: [...(chapter.sections ?? [])] }])
  );

  extraChapters.forEach((chapter) => {
    const existing = byId.get(chapter.id);
    if (existing) {
      existing.sections = mergeSections(existing.sections ?? [], chapter.sections ?? []);
      if (chapter.title) existing.title = chapter.title;
      if (chapter.description) existing.description = chapter.description;
    } else {
      byId.set(chapter.id, { ...chapter, sections: [...(chapter.sections ?? [])] });
    }
  });

  return Array.from(byId.values());
}
