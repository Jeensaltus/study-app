export function formatFileSize(bytes) {
  if (!bytes || bytes < 1024) return `${bytes ?? 0} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function formatKbMeta(item) {
  if (item?.linkType === "folder") return "Google Drive · โฟลเดอร์";
  if (item?.external || /^https?:\/\//i.test(item?.url ?? "")) return "Google Drive · ลิงก์ภายนอก";
  return formatFileSize(item?.sizeBytes);
}

export function groupByCategory(items) {
  const groups = new Map();
  for (const item of items) {
    const key = item.category;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  return groups;
}
