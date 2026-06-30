import {
  getKnowledgeBaseItems as getLocalKnowledgeBaseItems,
  KNOWLEDGE_BASE_CATEGORY_LABELS,
} from "./knowledgeBaseManifest.js";
import { getExternalKnowledgeBaseItems } from "./knowledgeBaseExternal.js";

export { KNOWLEDGE_BASE_CATEGORY_LABELS };

export function getKnowledgeBaseItems(subjectId) {
  const source = import.meta.env.VITE_KB_SOURCE ?? "local";
  const external = getExternalKnowledgeBaseItems(subjectId);
  const local = getLocalKnowledgeBaseItems(subjectId);

  if (source === "external" || source === "links") return external;
  if (source === "both") return [...external, ...local];
  return local;
}

export function getKnowledgeBaseCount(subjectId) {
  return getKnowledgeBaseItems(subjectId).length;
}

export function isExternalKbItem(item) {
  return Boolean(item?.external) || /^https?:\/\//i.test(item?.url ?? "");
}

export function kbOpenUrl(item) {
  return item?.url ?? "#";
}
