import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const TEXTBOOK_ROOT = join(__dirname, "..");
export const SYLLABUS_PATH = join(TEXTBOOK_ROOT, "syllabusMap.json");
export const PARSED_DIR = join(TEXTBOOK_ROOT, "parsed");
export const RAW_DIR = join(TEXTBOOK_ROOT, "raw");
export const OUT_DIR = join(TEXTBOOK_ROOT, "../../src/data/textbook");

export const PDF_PATHS = {
  calculus1: process.env.STEWART_PDF_PATH ?? join(TEXTBOOK_ROOT, "../../../subject/Math/stewart-calculus-9et.pdf"),
  calculus2: process.env.STEWART_PDF_PATH ?? join(TEXTBOOK_ROOT, "../../../subject/Math/stewart-calculus-9et.pdf"),
  physics1: process.env.SERWAY_PDF_PATH ?? join(TEXTBOOK_ROOT, "../../../subject/Physics/serway-physics.pdf"),
  physics2: process.env.SERWAY_PDF_PATH ?? join(TEXTBOOK_ROOT, "../../../subject/Physics/serway-physics.pdf"),
  chemistry:
    process.env.CHEM_PDF_PATH ??
    join(TEXTBOOK_ROOT, "../../../subject/Chemistry/scienceChemistryTheCentralScience12th.pdf"),
};
