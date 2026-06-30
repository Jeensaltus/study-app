import { getDeviceId, migrateLegacyStorage, scopedStorageKey } from "./deviceId.js";

export const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export const DOMAIN_CATEGORIES = [
  { id: "science", label: "Science", labelTh: "วิทย์" },
  { id: "engineering", label: "Engineering", labelTh: "วิศวฯ" },
  { id: "political", label: "Political", labelTh: "การเมือง" },
  { id: "judicial", label: "Judicial", labelTh: "กฎหมาย" },
];

export const LEVEL_COLORS = {
  A1: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300",
  A2: "bg-teal-100 text-teal-800 dark:bg-teal-950/50 dark:text-teal-300",
  B1: "bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300",
  B2: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300",
  C1: "bg-violet-100 text-violet-800 dark:bg-violet-950/50 dark:text-violet-300",
  C2: "bg-purple-100 text-purple-800 dark:bg-purple-950/50 dark:text-purple-300",
};

export const DOMAIN_COLORS = {
  science: "bg-cyan-100 text-cyan-900 dark:bg-cyan-950/50 dark:text-cyan-300",
  engineering: "bg-orange-100 text-orange-900 dark:bg-orange-950/50 dark:text-orange-300",
  political: "bg-rose-100 text-rose-900 dark:bg-rose-950/50 dark:text-rose-300",
  judicial: "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-300",
};

export function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function createDeck(cards) {
  let queue = shuffleArray(cards);
  let index = 0;
  let round = 1;
  let sessionCount = 0;
  let lastId = null;

  function reshuffle() {
    queue = shuffleArray(cards);
    index = 0;
    round += 1;
  }

  function pickNext() {
    if (cards.length === 0) return null;

    if (index >= queue.length) {
      reshuffle();
    }

    let card = queue[index];
    index += 1;

    if (card.id === lastId && cards.length > 1) {
      const alt = queue.slice(index).find((c) => c.id !== lastId) ?? queue.find((c) => c.id !== lastId);
      if (alt) card = alt;
    }

    lastId = card.id;
    sessionCount += 1;

    return {
      card,
      round,
      sessionCount,
      remainingInRound: Math.max(queue.length - index, 0),
    };
  }

  return {
    next: pickNext,
    reshuffle: () => {
      round = 1;
      sessionCount = 0;
      lastId = null;
      queue = shuffleArray(cards);
      index = 0;
    },
    get size() {
      return cards.length;
    },
  };
}

export function filterEnglishCards(cards, filter) {
  if (!filter || filter === "all") return cards;
  if (CEFR_LEVELS.includes(filter)) {
    return cards.filter((c) => c.level === filter && !c.domain);
  }
  if (DOMAIN_CATEGORIES.some((d) => d.id === filter)) {
    return cards.filter((c) => c.domain === filter);
  }
  return cards;
}

/** @deprecated */
export function filterCardsByLevel(cards, level) {
  return filterEnglishCards(cards, level);
}

const LEGACY_FILTER_KEY = "englishFlashcardFilter";

function filterStorageKey() {
  return scopedStorageKey(LEGACY_FILTER_KEY, getDeviceId());
}

export function readEnglishFilter() {
  migrateLegacyStorage(LEGACY_FILTER_KEY, filterStorageKey());
  try {
    const value = localStorage.getItem(filterStorageKey());
    if (!value || value === "all") return "all";
    if (CEFR_LEVELS.includes(value)) return value;
    if (DOMAIN_CATEGORIES.some((d) => d.id === value)) return value;
    return "all";
  } catch {
    return "all";
  }
}

export function saveEnglishFilter(filter) {
  try {
    localStorage.setItem(filterStorageKey(), filter);
  } catch {
    /* ignore */
  }
}

/** @deprecated */
export function readEnglishLevelFilter() {
  return readEnglishFilter();
}

/** @deprecated */
export function saveEnglishLevelFilter(level) {
  saveEnglishFilter(level);
}

export function countCardsByFilter(allEnglish) {
  const counts = {
    all: allEnglish.length,
    ...Object.fromEntries(CEFR_LEVELS.map((l) => [l, allEnglish.filter((c) => c.level === l && !c.domain).length])),
    ...Object.fromEntries(
      DOMAIN_CATEGORIES.map((d) => [d.id, allEnglish.filter((c) => c.domain === d.id).length]),
    ),
  };
  return counts;
}
