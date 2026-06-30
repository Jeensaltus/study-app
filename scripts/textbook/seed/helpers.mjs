/** Shared helpers for seed slide sections */
export function ex(title, level, tip, problem, steps, answer) {
  return { title, level, tip, problem, steps, answer };
}

export function sec(concept, formula, { warning = "", graph = null, examples = [], practice = "", derivation = "" } = {}) {
  const out = { concept, formula, warning, examples, practice };
  if (graph) out.graph = graph;
  if (derivation) out.derivation = derivation;
  return out;
}

export const TEXTBOOKS = {
  calculus1: "Stewart Calculus Early Transcendentals 9th ed.",
  calculus2: "Stewart Calculus Early Transcendentals 9th ed.",
  physics1: "Serway Physics for Scientists and Engineers",
  physics2: "Serway Physics for Scientists and Engineers",
  chemistry: "Chemistry: The Central Science 12th ed.",
};
