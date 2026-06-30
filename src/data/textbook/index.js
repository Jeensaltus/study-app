import { textbookCalculus1 } from "./calculus1.js";
import { textbookCalculus2 } from "./calculus2.js";
import { textbookPhysics1 } from "./physics1.js";
import { textbookPhysics2 } from "./physics2.js";
import { textbookChemistry } from "./chemistry.js";

const TEXTBOOK_MAP = {
  calculus1: textbookCalculus1,
  calculus2: textbookCalculus2,
  physics1: textbookPhysics1,
  physics2: textbookPhysics2,
  chemistry: textbookChemistry
};

export function getTextbookEnhancement(subjectId) {
  return TEXTBOOK_MAP[subjectId] ?? null;
}
