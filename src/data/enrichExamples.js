import { exampleSupplements } from "./exampleSupplements.js";
import { ensureExampleTitle, normalizeExampleList } from "../utils/exampleTitle.js";

function normalizeExamples(section) {
  if (section.examples?.length) return normalizeExampleList(section.examples);
  if (section.example) return normalizeExampleList([{ level: "Basic", ...section.example }]);
  return [];
}

function applySupplementsToSection(section, supplements = {}) {
  const extra = supplements[section.id];
  if (!extra) return section;

  const examples = normalizeExamples(section);
  const alreadyHas = examples.some((ex) => ex.problem?.slice(0, 60) === extra.problem?.slice(0, 60));
  if (alreadyHas) return section;

  return {
    ...section,
    examples: [...examples, extra],
    example: undefined,
  };
}

export function enrichExamples(subject) {
  const supplements = exampleSupplements[subject.id];

  return {
    ...subject,
    chapters: subject.chapters.map((chapter) => ({
      ...chapter,
      sections: (chapter.sections ?? []).map((section) => {
        let next = section;
        if (supplements) next = applySupplementsToSection(section, supplements);
        const examples = normalizeExamples(next);
        if (!examples.length) return next;
        return { ...next, examples, example: undefined };
      }),
    })),
  };
}
