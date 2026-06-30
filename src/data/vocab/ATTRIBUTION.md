# English Vocabulary Data — Attribution

Flashcard vocabulary is sourced from open datasets aligned with CEFR levels.

## CEFR-J Vocabulary Profile v1.5 (A1–B2)

- Compiled by Yukio Tono, Tokyo University of Foreign Studies
- Retrieved via [openlanguageprofiles/olp-en-cefrj](https://github.com/openlanguageprofiles/olp-en-cefrj)
- License: Creative Commons Attribution-ShareAlike (CEFR-J project terms)

## Octanove Vocabulary Profile C1/C2 v1.0

- Created by [Octanove Labs](http://www.octanove.com/)
- License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

## Thai translations

Card backs include Thai meanings from **Lexitron 2.0** (NECTEC), via [thaidict-json](https://github.com/johnnyduo/thaidict-json) `eng2thai.json`. See NECTEC LEXiTRON terms of use for redistribution.

## Optional English definitions

When built with `npm run vocab:build:full`, definitions may be fetched from [Free Dictionary API](https://dictionaryapi.dev/) (Wiktionary data, CC BY-SA).

## Domain vocabulary (Science, Engineering, Political, Judicial)

Curated word lists in `scripts/vocab/domains/` — physics/chemistry/biology terms, engineering, political science, and legal/judicial English.

Words not found in Lexitron are translated via [MyMemory API](https://mymemory.translated.net/) (cached in `scripts/vocab/cache/thai-mt.json`). Results are machine-generated and may need review for rare terms.
