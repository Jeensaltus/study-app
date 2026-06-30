import cal1 from "./cal1.mjs";
import cal2 from "./cal2.mjs";
import phy1 from "./phy1.mjs";
import phy2 from "./phy2.mjs";
import chem from "./chem.mjs";
import phy2FromBase from "./physics2-from-base.mjs";
import chemFromBase from "./chemistry-from-base.mjs";
import extraPhyChem from "./extra-phy-chem.mjs";
import { TEXTBOOKS } from "./helpers.mjs";

export const SEED_SECTIONS = {
  _textbooks: TEXTBOOKS,
  ...cal1,
  ...cal2,
  ...phy1,
  ...phy2,
  ...chem,
  ...phy2FromBase,
  ...chemFromBase,
  ...extraPhyChem,
};