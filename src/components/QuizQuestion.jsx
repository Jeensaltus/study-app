import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import MathText from "./MathText";
import SolutionText from "./SolutionText";

export default function QuizQuestion({ question, selected, onSelect, showSolution = true, showFeedback = true }) {
  return (
    <div className="animate-scale-in space-y-6">
      <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/90">
        <h2 className="text-xl font-bold leading-relaxed text-ink dark:text-white">
          <MathText text={question.question} />
        </h2>
        <div className="mt-6 grid gap-3">
          {question.options.map((option, index) => {
            const answered = selected !== null;
            const isCorrect = index === question.answer;
            const isSelected = index === selected;

            let stateClass = "border-slate-200 bg-white hover:border-primary hover:bg-primary/5 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-primary dark:hover:bg-primary/10";
            let icon = null;

            if (answered && showFeedback && isCorrect) {
              stateClass = "border-success bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-950/40";
              icon = <CheckCircle2 size={20} className="text-success shrink-0" />;
            } else if (answered && showFeedback && isSelected) {
              stateClass = "border-rose-400 bg-rose-50 dark:border-rose-600 dark:bg-rose-950/40";
              icon = <XCircle size={20} className="text-rose-500 shrink-0" />;
            } else if (answered && isSelected) {
              stateClass = "border-primary bg-primary/5 dark:bg-blue-950/30";
            }

            return (
              <button
                key={option}
                type="button"
                disabled={answered}
                onClick={() => onSelect(index)}
                className={`group relative flex items-center gap-3 rounded-xl border-2 px-5 py-4 text-left transition-all duration-300 ${
                  answered ? "cursor-default" : "cursor-pointer"
                } ${stateClass}`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 leading-relaxed text-slate-700 dark:text-slate-200">
                  <MathText text={option} />
                </span>
                {icon && (
                  <span className="animate-scale-in">{icon}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Solution */}
        {showSolution && selected !== null && (
          <div className="mt-6 animate-fade-in-up overflow-hidden rounded-2xl border border-amber-100 bg-white dark:border-amber-900/30 dark:bg-slate-900">
            <div className="flex items-center gap-2 border-b border-amber-100 bg-amber-50 px-4 py-2.5 dark:border-amber-900/30 dark:bg-amber-950/30">
              <Lightbulb size={16} className="text-amber-500 shrink-0" />
              <span className="text-sm font-bold tracking-wide text-amber-700 dark:text-amber-300">เฉลย</span>
            </div>
            <div className="px-4 py-4">
              <SolutionText text={question.solution} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}