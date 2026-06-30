const LOADERS = {
  calculus1: () => import("./flashcards/calculus1.json"),
  calculus2: () => import("./flashcards/calculus2.json"),
  physics1: () => import("./flashcards/physics1.json"),
  physics2: () => import("./flashcards/physics2.json"),
  chemistry: () => import("./flashcards/chemistry.json"),
  programming: () => import("./flashcards/programming.json"),
  english: () => import("./flashcards/english.json"),
};

export async function loadFlashcardsBySubject(subjectId) {
  const loader = LOADERS[subjectId];
  if (!loader) return [];
  const mod = await loader();
  return mod.default ?? mod;
}
