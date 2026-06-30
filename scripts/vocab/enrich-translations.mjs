/**
 * Shared translation enrichment for vocab build scripts.
 */
import { lookupThaiTranslations } from "./lexitron.mjs";
import { lookupFallbackTranslations, cleanMtText, MANUAL_OVERRIDES } from "./translation-fallback.mjs";

export async function resolveTranslations(headword, pos, lexitronIndex, { useMt = true } = {}) {
  let translations = lookupThaiTranslations(lexitronIndex, headword, pos);

  if (!translations.length && useMt) {
    if (MANUAL_OVERRIDES[headword.toLowerCase()]) {
      translations = MANUAL_OVERRIDES[headword.toLowerCase()].slice(0, 3);
    } else {
      translations = await lookupFallbackTranslations(headword, pos);
      translations = translations.map(cleanMtText).filter(Boolean);
    }
  }

  return translations;
}

export function slugify(text) {
  return (
    text
      .toLowerCase()
      .replace(/[/\\.*+?^${}()|[\]\\]/g, " ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "word"
  );
}
