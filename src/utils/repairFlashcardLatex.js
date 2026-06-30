/**
 * Repair LaTeX in flashcard strings corrupted by JavaScript escape sequences
 * (e.g. "\to" → tab+"o", "\frac" → form-feed+"rac", "\lim" → "lim").
 */
const TAB = "\t";
const FF = "\f";
const NL = "\n";
const CR = "\r";
const VT = "\v";
const BS = "\b";

const CONTROL_CHAR_FIXES = [
  [VT + "arepsilon", "\\varepsilon"],
  [FF + "rac", "\\frac"],
  [TAB + "heta", "\\theta"],
  [TAB + "imes", "\\times"],
  [TAB + "an", "\\tan"],
  [TAB + "au", "\\tau"],
  [TAB + "o", "\\to"],
  [CR + "ight", "\\right"],
  [NL + "eq", "\\neq"],
  [VT + "ec", "\\vec"],
  [BS + "eta", "\\beta"],
  [BS + "ar", "\\bar"],
];

const STRIPPED_COMMANDS = [
  "lim",
  "sin",
  "cos",
  "tan",
  "sec",
  "int",
  "infty",
  "ln",
  "log",
  "left",
  "right",
  "sum",
  "prod",
  "Delta",
  "alpha",
  "beta",
  "gamma",
  "theta",
  "pm",
  "pi",
  "in",
  "oint",
  "mathcal",
  "sqrt",
  "partial",
  "cdot",
  "approx",
  "asin",
  "acos",
  "atan",
  "asec",
  "acot",
  "sinh",
  "cosh",
  "tanh",
];

function addMissingBackslashes(text) {
  let out = text.replace(/\$cin\(/g, "$c\\in(");
  for (const cmd of STRIPPED_COMMANDS) {
    const re = new RegExp(`(?<!\\\\)(?<![A-Za-z])${cmd}(?=[_{^\\s\\\\]|$)`, "g");
    out = out.replace(re, `\\${cmd}`);
  }
  return out;
}

export function repairFlashcardLatex(text) {
  if (!text || typeof text !== "string") return text;

  let out = text;
  for (const [pattern, replacement] of CONTROL_CHAR_FIXES) {
    out = out.replaceAll(pattern, replacement);
  }
  out = addMissingBackslashes(out);
  return out;
}

export function repairFlashcard(card) {
  return {
    ...card,
    front: repairFlashcardLatex(card.front),
    back: repairFlashcardLatex(card.back),
  };
}
