import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, ExternalLink, FolderOpen, Search } from "lucide-react";
import PdfPreviewModal from "../components/PdfPreviewModal";
import { getSubjectMeta } from "../data/subjects";
import {
  getKnowledgeBaseItems,
  isExternalKbItem,
  kbOpenUrl,
  KNOWLEDGE_BASE_CATEGORY_LABELS,
} from "../data/knowledgeBase";
import { useProgress } from "../hooks/useProgress";
import { formatKbMeta, groupByCategory } from "../utils/knowledgeBase";

const CATEGORY_ORDER = ["textbook", "summary", "exercise", "midterm", "mock", "final", "past-exam", "solutions", "other"];

export default function KnowledgeBase() {
  const { subjectId } = useParams();
  const progress = useProgress();
  const meta = getSubjectMeta(subjectId, progress.settings);
  const allItems = getKnowledgeBaseItems(subjectId);
  const driveOnly = allItems.length > 0 && allItems.every(isExternalKbItem);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [previewItem, setPreviewItem] = useState(null);

  const items = useMemo(() => {
    const lower = query.trim().toLowerCase();
    return allItems.filter((item) => {
      if (categoryFilter !== "all" && item.category !== categoryFilter) return false;
      if (!lower) return true;
      return [item.title, item.description, item.categoryLabel, item.fileName, item.driveHint]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(lower);
    });
  }, [allItems, query, categoryFilter]);

  const grouped = useMemo(() => groupByCategory(items), [items]);

  const categoriesInSubject = useMemo(() => {
    const set = new Set(allItems.map((i) => i.category));
    return CATEGORY_ORDER.filter((c) => set.has(c));
  }, [allItems]);

  if (!allItems.length) {
    return <Navigate to={`/subjects/${subjectId}`} replace />;
  }

  return (
    <div className="relative space-y-5">
      <div className="blob blob-blue -left-20 top-0 h-64 w-64" />
      <div className="blob blob-green -right-20 top-40 h-64 w-64" />

      <Link to={`/subjects/${meta.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-blue-600">
        <ArrowLeft size={16} />
        กลับไปหน้า {meta.title}
      </Link>

      <header className="relative animate-fade-in-down overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/90">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen size={28} className="text-primary" />
          </div>
          <div>
            <p className="font-semibold" style={{ color: meta.accent }}>
              {meta.title}
            </p>
            <h1 className="mt-1 text-3xl font-bold text-ink dark:text-white">Knowledge Base</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              {driveOnly
                ? `ลิงก์ไป Google Drive (Year 1) — เปิดโฟลเดอร์แล้วเลือก PDF เอง (${allItems.length} รายการ)`
                : `คลัง PDF ตำรา แบบฝึกหัด และข้อสอบ (${allItems.length} รายการ)`}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center">
          <label className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 dark:border-slate-700 dark:bg-slate-950/80">
            <Search size={18} className="shrink-0 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นหาชื่อหรือคำอธิบาย"
              className="w-full bg-transparent text-sm outline-none"
            />
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium dark:border-slate-700 dark:bg-slate-950"
          >
            <option value="all">ทุกหมวด</option>
            {categoriesInSubject.map((cat) => (
              <option key={cat} value={cat}>
                {KNOWLEDGE_BASE_CATEGORY_LABELS[cat]}
              </option>
            ))}
          </select>
        </div>
      </header>

      {items.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white/90 py-16 text-center dark:border-slate-700 dark:bg-slate-900/90">
          <p className="text-slate-400">ไม่พบรายการที่ค้นหา</p>
        </div>
      ) : (
        <div className="relative space-y-8">
          {CATEGORY_ORDER.filter((cat) => grouped.has(cat)).map((cat) => (
            <section key={cat}>
              <h2 className="mb-4 text-lg font-bold text-ink dark:text-white">{KNOWLEDGE_BASE_CATEGORY_LABELS[cat]}</h2>
              <div className="stagger-children grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {grouped.get(cat).map((item) => {
                  const external = isExternalKbItem(item);
                  const href = kbOpenUrl(item);
                  return (
                    <article
                      key={item.id}
                      className="card-hover flex flex-col rounded-xl border border-slate-200/80 bg-white/90 p-5 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/90"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.categoryLabel}</p>
                      <h3 className="mt-2 line-clamp-2 text-base font-bold text-ink dark:text-white">{item.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
                      <p className="mt-3 text-xs text-slate-400">{formatKbMeta(item)}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {external ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ripple inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                          >
                            {item.linkType === "folder" ? <FolderOpen size={16} /> : <ExternalLink size={16} />}
                            เปิด Google Drive
                          </a>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => setPreviewItem(item)}
                              className="btn-ripple inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-600 dark:text-slate-200"
                            >
                              Preview
                            </button>
                            <a
                              href={href}
                              download={item.fileName}
                              className="btn-ripple inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900"
                            >
                              ดาวน์โหลด
                            </a>
                          </>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}

      <PdfPreviewModal item={previewItem} onClose={() => setPreviewItem(null)} />
    </div>
  );
}
