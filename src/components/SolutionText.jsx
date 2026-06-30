import MathText from "./MathText";
import PdfMathText from "./PdfMathText";
import { simplifyLatexText } from "../utils/latexSimplify";

/**
 * Rich solution renderer.
 *
 * Supported line prefixes:
 *   **Title:**  or  **Title:** subtitle  →  section header
 *   • text                               →  bullet sub-step
 *   ✅ คำตอบ: text                        →  boxed answer (green)
 *   💡 text                              →  hint (amber)
 *   ─── or ---                           →  thin separator
 */
export default function SolutionText({ text = "", variant = "screen" }) {
  if (!text) return null;

  const isPdf = variant === "pdf";
  const Math = isPdf ? PdfMathText : MathText;
  const render = (value) => <Math text={simplifyLatexText(value)} />;
  const lines = text.split("\n");

  return (
    <div className={`space-y-1.5 ${isPdf ? "pdf-solution text-[13px] leading-relaxed text-slate-900" : "text-sm leading-relaxed"}`}>
      {lines.map((line, i) => {
        const t = line.trim();

        if (!t) return <div key={i} className="h-1.5" />;

        if (t === "───" || t === "---") {
          return <hr key={i} className={`my-1 ${isPdf ? "border-slate-400" : "border-slate-200 dark:border-slate-700"}`} />;
        }

        if (t.startsWith("✅")) {
          const body = t.replace(/^✅\s*คำตอบ:\s*/i, "").trim();
          return (
            <div
              key={i}
              className={
                isPdf
                  ? "mt-3 rounded-md border-2 border-emerald-700 bg-emerald-50 px-3 py-2.5"
                  : "mt-3 rounded-xl border-2 border-emerald-400 bg-emerald-50 px-4 py-3 dark:border-emerald-500 dark:bg-emerald-950/40"
              }
            >
              <div
                className={
                  isPdf
                    ? "mb-1 text-[11px] font-bold uppercase tracking-wide text-emerald-800"
                    : "mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400"
                }
              >
                คำตอบ
              </div>
              <div className={isPdf ? "text-[14px] font-bold text-emerald-950" : "text-base font-bold text-emerald-800 dark:text-emerald-200"}>
                {render(body)}
              </div>
            </div>
          );
        }

        if (t.startsWith("💡")) {
          return (
            <div
              key={i}
              className={
                isPdf
                  ? "flex items-start gap-2 rounded-md border border-amber-400 bg-amber-50 px-3 py-1.5 text-amber-950"
                  : "flex items-start gap-2 rounded-lg bg-amber-50 px-3 py-1.5 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300"
              }
            >
              <span className="shrink-0 select-none">💡</span>
              {render(t.replace(/^💡\s*/, ""))}
            </div>
          );
        }

        const headerMatch = t.match(/^\*\*(.+?)\*\*:?\s*(.*)/);
        if (headerMatch) {
          const [, title, subtitle] = headerMatch;

          if (isPdf) {
            return (
              <div key={i} className="mt-3 border-l-[3px] border-blue-700 pl-3">
                <div className="font-bold text-slate-900">
                  {render(title)}
                </div>
                {subtitle ? (
                  <div className="mt-1 text-slate-800">
                    {render(subtitle)}
                  </div>
                ) : null}
              </div>
            );
          }

          return (
            <div key={i} className="mt-3 flex flex-wrap items-baseline gap-2">
              <span className="solution-step-badge shrink-0 rounded bg-blue-600 px-2 py-0.5 text-xs font-bold text-white dark:bg-blue-500">
                {render(title)}
              </span>
              {subtitle ? (
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  {render(subtitle)}
                </span>
              ) : null}
            </div>
          );
        }

        if (t.startsWith("•")) {
          return (
            <div
              key={i}
              className={`ml-4 flex items-start gap-2 ${isPdf ? "text-slate-900" : "text-slate-600 dark:text-slate-300"}`}
            >
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${isPdf ? "bg-slate-800" : "bg-blue-400"}`} />
              {render(t.replace(/^•\s*/, ""))}
            </div>
          );
        }

        return (
          <div className={isPdf ? "text-slate-900" : "text-slate-700 dark:text-slate-200"}>
            {render(t)}
          </div>
        );
      })}
    </div>
  );
}
