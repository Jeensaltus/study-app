import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BlockMath } from "react-katex";
import {
  BookOpen, Bot, CheckCircle2, ChevronDown, ChevronRight, Circle,
  AlertTriangle, FlaskConical, Lightbulb, ChevronUp,
} from "lucide-react";
import {
  LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip,
} from "recharts";
import PageLoader from "../components/PageLoader";
import ProgressBar from "../components/ProgressBar";
import MathText from "../components/MathText";
import DiagramSVG from "../components/DiagramSVG";
import { useSubject } from "../hooks/useSubject";
import { useProgress } from "../hooks/useProgress";
import { getSubjectProgress } from "../utils/stats";
import { isSectionComplete, toggleSection } from "../utils/storage";
import { ensureExampleTitle } from "../utils/exampleTitle";

// ─── Graphs ─────────────────────────────────────────────────────────────────

function graphData(type) {
  switch (type) {
    case "derivative":
      return Array.from({ length: 21 }, (_, i) => {
        const x = i - 10;
        return { x, y: x * x, tangent: 4 * x - 4 };
      });
    case "integral":
      return Array.from({ length: 25 }, (_, i) => ({ x: +(i / 6).toFixed(2), y: +(i / 6 * i / 6).toFixed(3) }));
    case "limit":
      return Array.from({ length: 41 }, (_, i) => {
        const x = (i - 20) / 4;
        return { x: +x.toFixed(2), y: x === 0 ? null : +(Math.sin(x) / x).toFixed(4) };
      });
    case "motion":
      return Array.from({ length: 11 }, (_, t) => ({ x: t, y: +(0.5 * 2 * t * t).toFixed(1) }));
    case "projectile":
      return Array.from({ length: 21 }, (_, i) => {
        const t = i * 0.2;
        const v0 = 20, theta = Math.PI / 4, g = 9.8;
        return {
          x: +(v0 * Math.cos(theta) * t).toFixed(1),
          y: +(v0 * Math.sin(theta) * t - 0.5 * g * t * t).toFixed(1),
        };
      }).filter(p => p.y >= 0);
    case "energy":
      return Array.from({ length: 21 }, (_, i) => {
        const x = i * 0.5;
        const ke = Math.max(0, 10 - 0.5 * x * x);
        return { x: +x.toFixed(1), KE: +ke.toFixed(2), PE: +(10 - ke).toFixed(2) };
      });
    default:
      return [];
  }
}

const GRAPH_COLORS = ["#378ADD", "#1D9E75", "#F59E0B", "#EF4444"];

function ConceptGraph({ type }) {
  if (!type) return null;
  const data = graphData(type);
  if (!data.length) return null;

  const keys = Object.keys(data[0]).filter(k => k !== "x");
  const UseChart = type === "integral" || type === "energy" ? AreaChart : LineChart;

  return (
    <div className="mt-4 h-56 rounded bg-slate-50 p-3 dark:bg-slate-800">
      <ResponsiveContainer width="100%" height="100%">
        <UseChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" />
          <XAxis dataKey="x" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          {keys.map((k, i) =>
            type === "integral" || type === "energy"
              ? <Area key={k} type="monotone" dataKey={k} stroke={GRAPH_COLORS[i]} fill={GRAPH_COLORS[i]} fillOpacity={0.2} dot={false} strokeWidth={2} />
              : <Line key={k} type="monotone" dataKey={k} stroke={GRAPH_COLORS[i]} dot={false} strokeWidth={2} connectNulls={false} />
          )}
        </UseChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── Example Accordion ──────────────────────────────────────────────────────

function ExamplesAccordion({ examples }) {
  const [open, setOpen] = useState(null);

  if (!examples?.length) return null;

  return (
    <div className="mt-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
        Example Problems ({examples.length})
      </p>
      <div className="space-y-2">
        {examples.map((ex, idx) => {
          const isOpen = open === idx;
          const levelLabel =
            ex.level === "ยาก" || ex.level === "Hard" ? "Hard"
            : ex.level === "ปานกลาง" || ex.level === "Medium" ? "Medium"
            : ex.level === "พื้นฐาน" || ex.level === "Basic" ? "Basic"
            : ex.level;
          const levelColor =
            levelLabel === "Hard" ? "text-red-600 bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-900/40"
            : levelLabel === "Medium" ? "text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-900/40"
            : "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-900/40";

          return (
            <div key={idx} className="overflow-hidden rounded border border-slate-200 dark:border-slate-700">
              {/* Header */}
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800/60"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <FlaskConical size={15} className="shrink-0 text-amber-500" />
                  <span className="flex min-w-0 items-center gap-1 truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                    <span className="shrink-0">{idx + 1}.</span>
                    <MathText text={ex.title} className="truncate" />
                  </span>
                  {levelLabel && (
                    <span className={`shrink-0 rounded border px-1.5 py-0.5 text-xs font-semibold ${levelColor}`}>
                      {levelLabel}
                    </span>
                  )}
                </div>
                {isOpen ? <ChevronUp size={15} className="shrink-0 text-slate-400" /> : <ChevronDown size={15} className="shrink-0 text-slate-400" />}
              </button>

              {/* Body */}
              {isOpen && (
                <div className="border-t border-slate-100 bg-amber-50/50 px-4 py-4 dark:border-slate-700 dark:bg-amber-950/10">
                  {/* Tip */}
                  {ex.tip && (
                    <div className="mb-3 flex gap-2 rounded bg-blue-50 px-3 py-2 text-xs text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                      <Lightbulb size={13} className="mt-0.5 shrink-0" />
                      <MathText text={ex.tip} />
                    </div>
                  )}

                  {/* Problem */}
                  <p className="font-semibold text-slate-800 dark:text-slate-100">
                    <MathText text={ex.problem} />
                  </p>

                  {/* Diagram */}
                  {ex.diagram && <DiagramSVG type={ex.diagram} />}

                  {/* Graph for this example */}
                  {ex.graph && <ConceptGraph type={ex.graph} />}

                  {/* Steps */}
                  {ex.steps?.length > 0 && (
                    <ol className="mt-4 space-y-2.5 text-sm">
                      {ex.steps.map((step, si) => (
                        <li key={si} className="flex gap-2.5">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                            {si + 1}
                          </span>
                          <span className="leading-6 text-slate-700 dark:text-slate-300">
                            <MathText text={step} />
                          </span>
                        </li>
                      ))}
                    </ol>
                  )}

                  {/* Answer highlight */}
                  {ex.answer && (
                    <div className="mt-3 rounded bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                      Answer: <MathText text={ex.answer} />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

/** Unique key per section (ids may repeat across chapters). */
function sectionKey(chapterId, sectionId) {
  return `${chapterId}:${sectionId}`;
}

export default function Slides() {
  const { subjectId } = useParams();
  const { subject, meta, loading, error } = useSubject(subjectId);
  const progress = useProgress();
  const subjectProgress = subject ? getSubjectProgress(subject, progress) : 0;

  const allSections = subject?.chapters.flatMap((chapter) =>
    (chapter.sections ?? []).map((section) => ({ chapter, section }))
  ) ?? [];

  const [activeId, setActiveId] = useState("");
  const sectionRefs = useRef({});
  const sidebarRef = useRef(null);
  const scrollAreaRef = useRef(null);
  const [openChapters, setOpenChapters] = useState({});

  useEffect(() => {
    if (!subject) return;
    const ch0 = subject.chapters[0];
    const sec0 = ch0?.sections?.[0];
    setActiveId(ch0 && sec0 ? sectionKey(ch0.id, sec0.id) : "");
    setOpenChapters(Object.fromEntries(subject.chapters.map((ch) => [ch.id, true])));
  }, [subject]);

  // Scroll detection — listen on the scrollable div, not window
  useEffect(() => {
    if (!subject) return;
    const container = scrollAreaRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerTop = container.getBoundingClientRect().top;
      const target = containerTop + container.clientHeight * 0.3;
      let best = null, bestDist = Infinity;
      allSections.forEach(({ chapter, section }) => {
        const key = sectionKey(chapter.id, section.id);
        const el = sectionRefs.current[key];
        if (!el) return;
        const dist = Math.abs(el.getBoundingClientRect().top - target);
        if (dist < bestDist) { bestDist = dist; best = key; }
      });
      if (best) setActiveId(best);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, [subjectId, subject, allSections]);

  // Auto-scroll sidebar to keep active item visible
  useEffect(() => {
    if (!sidebarRef.current || !activeId) return;
    const el = sidebarRef.current.querySelector(`[data-section-id="${activeId}"]`);
    if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeId]);

  if (loading) return <PageLoader label="กำลังโหลด Slides..." />;
  if (error || !subject) {
    return <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error || "โหลดวิชาไม่สำเร็จ"}</div>;
  }

  function scrollTo(chapterId, sectionId) {
    const key = sectionKey(chapterId, sectionId);
    setActiveId(key);
    const el = sectionRefs.current[key];
    if (el && scrollAreaRef.current) {
      const container = scrollAreaRef.current;
      const elTop = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop;
      container.scrollTo({ top: elTop - 16, behavior: "smooth" });
    }
  }

  const totalExamples = allSections.reduce((sum, { section }) =>
    sum + (section.examples?.length ?? (section.example ? 1 : 0)), 0);

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar — fixed height, scrollable */}
      <aside
        ref={sidebarRef}
        className="flex w-72 shrink-0 flex-col overflow-y-auto border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="sticky top-0 z-10 border-b border-slate-100 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Study Slides</p>
          <h2 className="mt-0.5 text-lg font-bold text-ink dark:text-white">{subject.title}</h2>
          <p className="mt-0.5 text-xs text-slate-400">{allSections.length} หัวข้อ · {totalExamples} ตัวอย่าง</p>
          <div className="mt-3">
            <ProgressBar value={subjectProgress} color={subject.accent} label="Today" />
          </div>
        </div>
        <div className="flex-1 space-y-1 p-2">
          {subject.chapters.map((chapter) => {
            const chapterHasActive = (chapter.sections ?? []).some(
              (s) => activeId === sectionKey(chapter.id, s.id)
            );
            return (
              <div key={chapter.id}>
                <button
                  type="button"
                  onClick={() => setOpenChapters(p => ({ ...p, [chapter.id]: !p[chapter.id] }))}
                  className={`flex w-full items-center justify-between gap-2 rounded px-3 py-2 text-sm font-semibold transition ${
                    chapterHasActive
                      ? "bg-blue-50 text-primary dark:bg-blue-950/40 dark:text-blue-300"
                      : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  <span className="flex items-center gap-2 text-left">
                    {chapterHasActive && <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />}
                    {chapter.title || "Untitled Chapter"}
                  </span>
                  {openChapters[chapter.id] ? <ChevronDown size={15} className="shrink-0 text-slate-400" /> : <ChevronRight size={15} className="shrink-0 text-slate-400" />}
                </button>
                {openChapters[chapter.id] && (
                  <div className="ml-3 space-y-0.5 border-l border-slate-100 pl-2 dark:border-slate-800">
                    {(chapter.sections ?? []).map((section) => {
                      const key = sectionKey(chapter.id, section.id);
                      const isActive = activeId === key;
                      const done = isSectionComplete(progress, subject.id, chapter.id, section.id);
                      return (
                        <button
                          key={key}
                          data-section-id={key}
                          type="button"
                          onClick={() => scrollTo(chapter.id, section.id)}
                          className={`flex w-full items-center gap-1.5 rounded px-2 py-1.5 text-left text-xs transition ${
                            isActive
                              ? "bg-blue-50 font-semibold text-primary dark:bg-blue-950/40 dark:text-blue-300"
                              : done
                                ? "text-emerald-600 hover:bg-slate-50 dark:text-emerald-400 dark:hover:bg-slate-800"
                                : "text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
                          }`}
                        >
                          {done ? (
                            <CheckCircle2 size={13} className="shrink-0 text-emerald-500" />
                          ) : isActive ? (
                            <span className="h-3 w-0.5 shrink-0 rounded-full bg-primary" />
                          ) : (
                            <Circle size={12} className="shrink-0 text-slate-300 dark:text-slate-600" />
                          )}
                          <span className="min-w-0 flex-1">
                            {section.title}
                            {section.trackTag && (
                              <span className="mt-0.5 block text-[10px] font-normal text-violet-500 dark:text-violet-400">
                                {section.trackTag}
                              </span>
                            )}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main content — scrollable */}
      <div ref={scrollAreaRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-4xl space-y-4 px-6 py-6">
          {/* Page header */}
          <header className="rounded border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="font-semibold" style={{ color: subject.accent }}>
              {meta.code ?? subject.code}
              {meta.trackLabel && (
                <span className="ml-2 text-sm font-normal text-slate-500 dark:text-slate-400">
                  · {meta.trackLabel} ({meta.credits} cr.)
                </span>
              )}
            </p>
            <h1 className="mt-1 text-3xl font-bold text-ink dark:text-white">Study Slides — {subject.title}</h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {allSections.length} หัวข้อ · {totalExamples} ตัวอย่างโจทย์
            </p>
            {meta.examNote && (
              <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200">
                {meta.examNote}
              </p>
            )}
          </header>

        {subject.chapters.map((chapter) => (
          <div key={chapter.id} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
              <span className="rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                {chapter.title}
              </span>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
            </div>

            {(chapter.sections ?? []).map((section, idx) => {
              const key = sectionKey(chapter.id, section.id);
              const done = isSectionComplete(progress, subject.id, chapter.id, section.id);
              return (
              <article
                key={key}
                ref={(el) => { sectionRefs.current[key] = el; }}
                id={`section-${key}`}
                className={`scroll-mt-24 card-hover group relative overflow-hidden rounded-xl border bg-white/90 p-6 shadow-soft backdrop-blur-sm dark:bg-slate-900/90 ${
                  done
                    ? "border-emerald-200/80 dark:border-emerald-900/40"
                    : "border-slate-200/80 dark:border-slate-700/50"
                }`}
              >
                {/* Accent left border */}
                <div
                  className="absolute left-0 top-0 h-full w-1 rounded-l-xl transition-all duration-300 group-hover:w-1.5"
                  style={{ backgroundColor: subject.accent }}
                />
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                      {idx + 1}
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-ink dark:text-white">
                        <MathText text={section.title} />
                      </h2>
                      {section.source && (
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                          <BookOpen size={12} />
                          {section.source}
                        </p>
                      )}
                      {section.trackTag && (
                        <p className="mt-1 text-xs text-violet-600 dark:text-violet-400">
                          {section.trackTag}
                          {section.trackTagDetail ? ` — ${section.trackTagDetail}` : ""}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleSection(subject.id, chapter.id, section.id)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                      done
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300"
                        : "border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    {done ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                    {done ? "Done" : "Mark as done"}
                  </button>
                </div>

                {/* Concept */}
                <div className="mt-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">Concept</p>
                  <p className="leading-8 text-slate-700 dark:text-slate-200">
                    <MathText text={section.concept} />
                  </p>
                </div>

                {/* Formula */}
                {section.formula && (
                  <div className="mt-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-violet-500">Key Formula</p>
                    <div className="overflow-x-auto rounded bg-slate-50 p-4 dark:bg-slate-800">
                      <BlockMath math={section.formula} />
                    </div>
                  </div>
                )}

                {/* Graph */}
                {section.graph && <ConceptGraph type={section.graph} />}

                {/* Derivation */}
                {section.derivation && (
                  <div className="mt-4 rounded border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Derivation</p>
                    <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                      <MathText text={section.derivation} />
                    </p>
                  </div>
                )}

                {/* Warning */}
                {section.warning && (
                  <div className="mt-4 flex gap-3 rounded border border-red-100 bg-red-50 p-4 dark:border-red-900/30 dark:bg-red-950/20">
                    <AlertTriangle size={16} className="mt-0.5 shrink-0 text-red-500" />
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-600 dark:text-red-400">Warning</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        <MathText text={section.warning} />
                      </p>
                    </div>
                  </div>
                )}

                {/* Examples accordion — prefer section.examples, fallback to section.example */}
                {(section.examples?.length > 0 || section.example) && (
                  <ExamplesAccordion
                    examples={
                      section.examples?.length
                        ? section.examples.map(ensureExampleTitle)
                        : [ensureExampleTitle({ level: "Basic", ...section.example })]
                    }
                  />
                )}

                {/* Practice */}
                {section.practice && (
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900/30 dark:bg-emerald-950/20">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-success">Practice</p>
                      <p className="text-sm text-slate-700 dark:text-slate-200">
                        <MathText text={section.practice} />
                      </p>
                    </div>
                    <Link
                      to="/ai-tutor"
                      className="inline-flex shrink-0 items-center gap-2 rounded bg-primary px-3 py-2 text-sm font-semibold text-white"
                    >
                      <Bot size={15} />
                      ถาม AI
                    </Link>
                  </div>
                )}
              </article>
              );
            })}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
