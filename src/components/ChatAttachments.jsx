import { FileText } from "lucide-react";
import { attachmentPreviewUrl, formatAttachmentSize } from "../utils/chatAttachments";

export default function ChatAttachments({ attachments, compact = false, tone = "dark" }) {
  if (!attachments?.length) return null;

  const isLight = tone === "light";
  const chipClass = isLight
    ? "border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
    : "border-white/20 bg-black/10 text-white";
  const imageBorderClass = isLight ? "border-slate-200 bg-slate-50" : "border-white/20 bg-black/10";

  return (
    <div className={`flex flex-wrap gap-2 ${compact ? "" : "mb-2"}`}>
      {attachments.map((attachment) => {
        const previewUrl = attachmentPreviewUrl(attachment);
        const isPdf = attachment.mimeType === "application/pdf";

        if (previewUrl) {
          return (
            <a
              key={attachment.id}
              href={previewUrl}
              target="_blank"
              rel="noreferrer"
              className={`block overflow-hidden rounded-lg border ${imageBorderClass}`}
              title={attachment.name}
            >
              <img
                src={previewUrl}
                alt={attachment.name}
                className={`object-cover ${compact ? "h-16 w-16" : "max-h-40 max-w-full"}`}
              />
            </a>
          );
        }

        return (
          <div
            key={attachment.id}
            className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs ${chipClass} ${
              compact ? "max-w-[12rem]" : "max-w-xs"
            }`}
            title={attachment.name}
          >
            <FileText size={16} className="shrink-0 opacity-80" />
            <span className="min-w-0 truncate font-medium">{attachment.name}</span>
            {isPdf ? <span className="shrink-0 opacity-70">PDF</span> : null}
            {attachment.sizeBytes ? (
              <span className="shrink-0 opacity-70">{formatAttachmentSize(attachment.sizeBytes)}</span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
