import { useLayoutEffect, useRef, useState } from "react";
import PdfMathText from "./PdfMathText";
import SolutionText from "./SolutionText";

/** A4 @ 96dpi — matches jsPDF mm layout */
export const PDF_PAGE = {
  widthPx: 794,
  heightPx: 1123,
  paddingPx: 56,
  get contentHeightPx() {
    return this.heightPx - this.paddingPx * 2;
  },
};

function PdfWritingLines({ lines = 6 }) {
  return (
    <div className="mt-5 space-y-7">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="border-b border-slate-400/80" style={{ height: 24 }} />
      ))}
    </div>
  );
}

function PdfHeader({ quiz }) {
  const dateLabel = quiz.generatedAt
    ? new Date(quiz.generatedAt).toLocaleDateString("th-TH", { day: "numeric", month: "long", year: "numeric" })
    : new Date().toLocaleDateString("th-TH", { day: "numeric", month: "long", year: "numeric" });

  return (
    <header data-pdf-header className="border-b-2 border-slate-900 pb-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Freshman Study · แบบฝึกหัด</p>
      <h1 className="mt-1 text-[22px] font-bold leading-tight text-slate-900">ข้อสอบ {quiz.subject}</h1>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[12px] text-slate-500">
        <span>จำนวน {quiz.questions.length} ข้อ</span>
        <span>ระดับ: {quiz.difficultyLabel ?? quiz.difficulty ?? "ปกติ"}</span>
        <span>วันที่: {dateLabel}</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-[12px] text-slate-600">
        <div>
          ชื่อ-นามสกุล
          <div className="mt-2 border-b border-slate-400" style={{ height: 22 }} />
        </div>
        <div>
          รหัสนิสิต
          <div className="mt-2 border-b border-slate-400" style={{ height: 22 }} />
        </div>
      </div>
    </header>
  );
}

function PdfQuestionBlock({ index, question, showAnswer }) {
  return (
    <article data-pdf-block className="pb-6">
      <div className="text-[15px] leading-normal text-slate-900">
        <span className="mr-1 font-bold tabular-nums">{index + 1}.</span>
        <PdfMathText text={question.question} />
      </div>
      {question.choices?.length ? (
        <ol className="mt-3 list-[upper-alpha] space-y-2 pl-6 text-[14px] leading-normal text-slate-800 marker:font-semibold">
          {question.choices.map((choice, i) => (
            <li key={i}>
              <PdfMathText text={choice} />
            </li>
          ))}
        </ol>
      ) : (
        <PdfWritingLines lines={6} />
      )}
      {showAnswer ? (
        <div className="mt-4 rounded-md border-2 border-slate-400 bg-white px-4 py-3">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-wide text-slate-800">เฉลย</p>
          <SolutionText text={question.solution} variant="pdf" />
        </div>
      ) : null}
    </article>
  );
}

function paginateBlocks(blockHeights, headerHeight, contentHeight) {
  const pages = [];
  let current = [];
  let used = headerHeight;

  blockHeights.forEach((height, index) => {
    const nextUsed = used + height;

    if (current.length > 0 && nextUsed > contentHeight) {
      pages.push(current);
      current = [index];
      used = height;
    } else {
      current.push(index);
      used = nextUsed;
    }
  });

  if (current.length) pages.push(current);
  return pages.length ? pages : [[]];
}

const pdfFont = { fontFamily: '"Sarabun", ui-sans-serif, system-ui, sans-serif' };

/**
 * Paginated A4 document for preview + PDF export.
 * pageRefs.current[i] points to each full-size page element (794×1123px).
 */
export default function QuizPdfDocument({ quiz, showAnswers, pageRefs }) {
  const measureRef = useRef(null);
  const [pages, setPages] = useState(null);
  const questions = quiz.questions ?? [];

  useLayoutEffect(() => {
    const root = measureRef.current;
    if (!root) return undefined;

    let cancelled = false;
    let rafId = 0;

    const measureAndPaginate = () => {
      if (cancelled) return;

      const blocks = [...root.querySelectorAll("[data-pdf-block]")];
      const header = root.querySelector("[data-pdf-header]");
      const katexNodes = [...root.querySelectorAll(".katex")];
      const katexReady =
        katexNodes.length === 0 || katexNodes.every((node) => node.getBoundingClientRect().height > 0);
      const blocksReady = blocks.length > 0 && blocks.every((block) => block.getBoundingClientRect().height > 12);

      if (!katexReady || !blocksReady) {
        rafId = requestAnimationFrame(measureAndPaginate);
        return;
      }

      const heights = blocks.map((el) => el.getBoundingClientRect().height);
      const headerHeight = (header?.getBoundingClientRect().height ?? 0) + 28;
      const nextPages = paginateBlocks(heights, headerHeight, PDF_PAGE.contentHeightPx - 32);

      setPages((prev) => {
        const same =
          prev?.length === nextPages.length &&
          prev.every((page, i) => page.length === nextPages[i].length && page.every((v, j) => v === nextPages[i][j]));
        return same ? prev : nextPages;
      });
    };

    rafId = requestAnimationFrame(measureAndPaginate);

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measureAndPaginate);
    });
    observer.observe(root);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [quiz, showAnswers, questions.length]);

  return (
    <>
      <div
        ref={measureRef}
        aria-hidden
        className="pointer-events-none fixed left-[-10000px] top-0 box-border bg-white text-slate-900 quiz-pdf-page"
        style={{ width: PDF_PAGE.widthPx, padding: PDF_PAGE.paddingPx, ...pdfFont }}
      >
        <PdfHeader quiz={quiz} />
        <div className="mt-6">
          {questions.map((q, i) => (
            <PdfQuestionBlock key={q.id} index={i} question={q} showAnswer={showAnswers} />
          ))}
        </div>
      </div>

      {!pages ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
          กำลังจัดหน้า PDF...
        </div>
      ) : (
        <div className="-mx-2 overflow-x-auto px-2 pb-4">
          <div className="mx-auto flex w-max flex-col gap-8">
            {pages.map((indices, pageIndex) => (
              <div
                key={pageIndex}
                ref={(el) => {
                  if (pageRefs) pageRefs.current[pageIndex] = el;
                }}
                data-pdf-page
                className="quiz-pdf-page relative box-border bg-white text-slate-900 shadow-md ring-1 ring-slate-200"
                style={{
                  width: PDF_PAGE.widthPx,
                  minHeight: PDF_PAGE.heightPx,
                  padding: PDF_PAGE.paddingPx,
                  ...pdfFont,
                }}
              >
                {pageIndex === 0 ? <PdfHeader quiz={quiz} /> : null}
                <div className={pageIndex === 0 ? "mt-6" : undefined}>
                  {indices.map((questionIndex) => (
                    <PdfQuestionBlock
                      key={questions[questionIndex].id}
                      index={questionIndex}
                      question={questions[questionIndex]}
                      showAnswer={showAnswers}
                    />
                  ))}
                </div>
                <p className="absolute bottom-5 right-6 text-[11px] tabular-nums text-slate-400">
                  หน้า {pageIndex + 1} / {pages.length}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
