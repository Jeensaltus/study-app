export const CHAT_ATTACHMENT_ACCEPT = "image/jpeg,image/png,image/webp,image/gif,application/pdf";
export const MAX_CHAT_ATTACHMENTS = 4;
export const MAX_ATTACHMENT_BYTES = 3 * 1024 * 1024;

const ALLOWED_MIME = new Set(CHAT_ATTACHMENT_ACCEPT.split(","));

const EXT_TO_MIME = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  jfif: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  pdf: "application/pdf",
};

export function isGeminiModel(modelId) {
  return String(modelId ?? "").startsWith("gemini");
}

function inferMimeType(file) {
  if (file.type && ALLOWED_MIME.has(file.type)) return file.type;
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  return EXT_TO_MIME[ext] ?? "";
}

export function isAllowedAttachmentType(mimeType) {
  return ALLOWED_MIME.has(mimeType);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error(`อ่านไฟล์ ${file.name} ไม่สำเร็จ`));
    reader.readAsDataURL(file);
  });
}

export async function filesToAttachments(files) {
  const list = [...files];
  if (list.length === 0) return [];

  if (list.length > MAX_CHAT_ATTACHMENTS) {
    throw new Error(`แนบได้สูงสุด ${MAX_CHAT_ATTACHMENTS} ไฟล์ต่อข้อความ`);
  }

  const attachments = [];
  let totalBytes = 0;

  for (const file of list) {
    const mimeType = inferMimeType(file);
    if (!mimeType) {
      throw new Error(`${file.name}: รองรับเฉพาะรูป JPG/PNG/WebP/GIF และ PDF`);
    }
    if (file.size > MAX_ATTACHMENT_BYTES) {
      throw new Error(`${file.name}: ไฟล์ใหญ่เกิน ${Math.round(MAX_ATTACHMENT_BYTES / (1024 * 1024))}MB`);
    }
    totalBytes += file.size;
    if (totalBytes > MAX_ATTACHMENT_BYTES) {
      throw new Error(`ขนาดไฟล์รวมเกิน ${Math.round(MAX_ATTACHMENT_BYTES / (1024 * 1024))}MB ต่อข้อความ`);
    }

    const dataUrl = await readFileAsDataUrl(file);
    const base64 = dataUrl.split(",")[1] ?? "";
    if (!base64) {
      throw new Error(`${file.name}: อ่านไฟล์ไม่สำเร็จ`);
    }
    attachments.push({
      id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: file.name,
      mimeType,
      sizeBytes: file.size,
      data: base64,
    });
  }

  return attachments;
}

export function attachmentPreviewUrl(attachment) {
  if (!attachment?.data || !attachment?.mimeType) return null;
  if (!attachment.mimeType.startsWith("image/")) return null;
  return `data:${attachment.mimeType};base64,${attachment.data}`;
}

export function formatAttachmentSize(bytes) {
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
