/**
 * Lexitron eng2thai.json lookup (NECTEC / thaidict-json)
 */
import { readFileSync, existsSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = join(__dirname, "cache");
const LEXITRON_PATH = join(CACHE_DIR, "eng2thai.json");
const LEXITRON_URL = "https://raw.githubusercontent.com/johnnyduo/thaidict-json/master/eng2thai.json";

const MAX_TRANSLATIONS = 8;

const CEFR_TO_LEXITRON = {
  adjective: ["ADJ"],
  adverb: ["ADV"],
  "be-verb": ["V", "AUX", "VI", "VT"],
  conjunction: ["CONJ"],
  determiner: ["DET"],
  "do-verb": ["V", "AUX", "VI", "VT"],
  "have-verb": ["V", "AUX", "VI", "VT"],
  "infinitive-to": ["V", "VI", "VT"],
  interjection: ["INT"],
  "modal auxiliary": ["AUX", "V"],
  noun: ["N"],
  number: ["N"],
  preposition: ["PREP"],
  pronoun: ["PRON"],
  verb: ["V", "VI", "VT", "PHRV"],
};

export async function ensureLexitronDictionary() {
  mkdirSync(CACHE_DIR, { recursive: true });
  if (existsSync(LEXITRON_PATH)) return LEXITRON_PATH;

  console.log("Downloading Lexitron eng2thai.json (~18MB)...");
  const res = await fetch(LEXITRON_URL);
  if (!res.ok) throw new Error(`Failed to download Lexitron: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(LEXITRON_PATH, buf);
  return LEXITRON_PATH;
}

export function buildLexitronIndex(jsonPath = LEXITRON_PATH) {
  const rows = JSON.parse(readFileSync(jsonPath, "utf8"));
  /** @type {Map<string, Array<{type: string, result: string, relate?: string[]}>>} */
  const byWord = new Map();

  for (const row of rows) {
    const search = row?.search?.trim();
    const result = row?.result?.trim();
    const type = row?.type?.trim();
    if (!search || !result || !type) continue;

    const key = normalizeKey(search);
    const list = byWord.get(key) ?? [];
    list.push({
      type,
      result,
      relate: Array.isArray(row.relate) ? row.relate.filter(Boolean) : undefined,
    });
    byWord.set(key, list);
  }

  return byWord;
}

function normalizeKey(word) {
  return word.trim().toLowerCase();
}

const NEGATION_PREFIXES = ["un", "in", "im", "ir", "il", "dis", "mis", "non"];

function hasNegationPrefix(word) {
  const lower = word.toLowerCase().replace(/^['']/, "");
  return NEGATION_PREFIXES.some((pre) => lower.startsWith(pre) && lower.length > pre.length + 2);
}

function headwordVariantsExact(headword) {
  const variants = new Set([headword.trim()]);
  for (const part of headword.split("/")) {
    const p = part.trim();
    if (p) variants.add(p);
  }
  return [...variants];
}

function headwordVariants(headword) {
  const variants = new Set(headwordVariantsExact(headword));

  const expanded = [...variants];
  for (const raw of expanded) {
    const lower = raw.toLowerCase();

    if (lower.includes(" ")) {
      for (const part of lower.split(/\s+/)) {
        if (part.length > 1) variants.add(part);
      }
    }

    if (lower.includes("-")) {
      for (const part of lower.split("-")) {
        if (part.length > 1) variants.add(part);
      }
    }

    const suffixes = ["ingly", "ing", "edly", "ed", "ly", "ness", "ment", "tion", "sion", "able", "ible", "ful", "less", "er", "est", "s", "es"];
    for (const suf of suffixes) {
      if (lower.endsWith(suf) && lower.length > suf.length + 2) {
        variants.add(lower.slice(0, -suf.length));
      }
    }

    if (!hasNegationPrefix(lower)) {
      const prefixes = ["re", "over", "under", "pre", "post", "anti", "de"];
      for (const pre of prefixes) {
        if (lower.startsWith(pre) && lower.length > pre.length + 2) {
          variants.add(lower.slice(pre.length));
        }
      }
    }
  }

  return [...variants];
}

function shortenThai(text) {
  if (text.length <= 120) return text;
  return `${text.slice(0, 117)}…`;
}

function collectFromEntries(entries, pos) {
  if (!entries?.length) return [];

  const types = CEFR_TO_LEXITRON[pos] ?? [];
  let pool = types.length ? entries.filter((e) => types.includes(e.type)) : entries;

  if (!pool.length) {
    pool = entries;
  }

  const seen = new Set();
  const out = [];

  function add(text) {
    const trimmed = text?.trim();
    if (!trimmed) return;
    const key = trimmed.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    out.push(shortenThai(trimmed));
  }

  for (const entry of pool) {
    add(entry.result);
    for (const related of entry.relate ?? []) {
      add(related);
    }
    if (out.length >= MAX_TRANSLATIONS) break;
  }

  return out.slice(0, MAX_TRANSLATIONS);
}

/** @returns {string[]} */
export function lookupThaiTranslations(index, headword, pos) {
  const merged = [];
  const seen = new Set();

  function mergeFromVariants(variants) {
    for (const variant of variants) {
      const entries = index.get(normalizeKey(variant));
      if (!entries) continue;

      for (const th of collectFromEntries(entries, pos)) {
        const key = th.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        merged.push(th);
        if (merged.length >= MAX_TRANSLATIONS) return true;
      }
    }
    return false;
  }

  if (mergeFromVariants(headwordVariantsExact(headword))) {
    return merged;
  }

  if (hasNegationPrefix(headword)) {
    return merged;
  }

  const exactSet = new Set(headwordVariantsExact(headword).map((v) => normalizeKey(v)));
  const stemVariants = headwordVariants(headword).filter((v) => !exactSet.has(normalizeKey(v)));

  mergeFromVariants(stemVariants);
  return merged;
}

/** @deprecated use lookupThaiTranslations */
export function lookupThaiTranslation(index, headword, pos) {
  const list = lookupThaiTranslations(index, headword, pos);
  return list[0] ?? null;
}

export function formatCardBack({ translations, pos, level, englishDef, footer }) {
  const lines = [];
  const thaiList = translations?.length ? translations : [];

  if (thaiList.length) {
    for (const th of thaiList) {
      lines.push(`• ${th}`);
    }
  }

  if (englishDef) {
    lines.push(englishDef);
  }

  lines.push(footer ?? `(${pos} · ${level})`);
  return lines.join("\n");
}
