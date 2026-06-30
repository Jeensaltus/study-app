/** Normalize question text for duplicate detection (LaTeX + Thai + whitespace). */
export function normalizeQuestionText(text = "") {
  return String(text)
    .normalize("NFKC")
    .replace(/\$\$([\s\S]*?)\$\$/g, "$1")
    .replace(/\$([^$\n]+)\$/g, "$1")
    .replace(/\\text\{([^}]*)\}/g, "$1")
    .replace(/\\(mathrm|mathbf|mathit|displaystyle)\{([^}]*)\}/g, "$2")
    .replace(/\\/g, "")
    .replace(/\s+/g, " ")
    .replace(/[？?。．,，、·•:：]/g, "")
    .trim()
    .toLowerCase();
}

/** Stable fingerprint — full normalized text up to 180 chars. */
export function questionFingerprint(text = "") {
  const normalized = normalizeQuestionText(text);
  if (!normalized) return "";
  return normalized.length > 180 ? normalized.slice(0, 180) : normalized;
}

export function getQuestionText(item) {
  if (typeof item === "string") return item;
  return item?.question ?? "";
}

export function getQuestionId(item) {
  if (typeof item === "string") return null;
  return item?.id ?? item?.bankId ?? null;
}

export class QuestionDedupeTracker {
  constructor(initialItems = []) {
    this.ids = new Set();
    this.fingerprints = new Set();
    for (const item of initialItems) this.add(item);
  }

  has(item) {
    const fp = questionFingerprint(getQuestionText(item));
    if (fp && this.fingerprints.has(fp)) return true;

    const id = getQuestionId(item);
    if (id && this.ids.has(id)) return true;

    return false;
  }

  add(item) {
    const fp = questionFingerprint(getQuestionText(item));
    if (fp) this.fingerprints.add(fp);

    const id = getQuestionId(item);
    if (id) this.ids.add(id);
  }

  excludeIds() {
    return this.ids;
  }

  excludeQuestionTexts(limit = 12) {
    return [...this.fingerprints].slice(0, limit).map((fp) => fp.slice(0, 120));
  }
}

/** Keep first occurrence of each unique question. */
export function dedupeQuestions(questions = []) {
  const tracker = new QuestionDedupeTracker();
  const unique = [];

  for (const question of questions) {
    if (tracker.has(question)) continue;
    unique.push(question);
    tracker.add(question);
  }

  return { unique, tracker };
}
