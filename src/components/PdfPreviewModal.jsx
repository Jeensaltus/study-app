import { ExternalLink, FolderOpen, X } from "lucide-react";
import { isExternalKbItem, kbOpenUrl } from "../data/knowledgeBase";
import { formatKbMeta } from "../utils/knowledgeBase";

export default function PdfPreviewModal({ item, onClose }) {
  if (!item) return null;

  const external = isExternalKbItem(item);
  const href = kbOpenUrl(item);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="pdf-preview-title">
      <button type="button" className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} aria-label="ปิด preview" />
      <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
        <header className="flex shrink-0 items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 dark:border-slate-700">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.categoryLabel}</p>
            <h2 id="pdf-preview-title" className="mt-1 truncate text-lg font-bold text-ink dark:text-white">
              {item.title}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            <p className="mt-1 text-xs text-slate-400">{formatKbMeta(item)}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              {item.linkType === "folder" ? <FolderOpen size={16} /> : <ExternalLink size={16} />}
              เปิด Google Drive
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="ปิด"
            >
              <X size={20} />
            </button>
          </div>
        </header>
        {external ? (
          <div className="flex min-h-[40vh] flex-1 flex-col items-center justify-center gap-4 bg-slate-100 px-6 py-12 text-center dark:bg-slate-950">
            <p className="max-w-md text-sm text-slate-600 dark:text-slate-300">
              ไฟล์อยู่บน Google Drive — preview ในแอปไม่รองรับ กดปุ่มด้านบนเพื่อเปิดโฟลเดอร์
              {item.driveHint ? ` “${item.driveHint}”` : ""} แล้วเลือก PDF เอง
            </p>
          </div>
        ) : (
          <div className="min-h-[60vh] flex-1 bg-slate-100 dark:bg-slate-950">
            <iframe title={`Preview: ${item.title}`} src={href} className="h-[70vh] w-full border-0" />
          </div>
        )}
      </div>
    </div>
  );
}
