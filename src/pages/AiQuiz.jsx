import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  EyeOff,
  Loader2,
  Minus,
  Plus,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Trophy,
} from "lucide-react";
import MathText from "../components/MathText";
import SolutionText from "../components/SolutionText";
import QuizQuestion from "../components/QuizQuestion";
import { DIFFICULTY_GUIDE, generateQuiz, getDifficultyMixPreview, getExamModePreview, getSubjectTopics } from "../utils/aiQuizGenerator";
import { getTopicWeights } from "../data/examWeights";
import { getBankStats, QUESTION_TYPE_LABELS } from "../utils/quizBank";
import { exportQuizToPdf } from "../utils/quizPdfExport";
import QuizPdfDocument from "../components/QuizPdfDocument";
import { clearActiveQuizSession, readActiveQuizSession, saveActiveQuizSession, saveQuizToHistory } from "../utils/quizGeneratorStorage";
import PageLoader from "../components/PageLoader";
import { useSubject } from "../hooks/useSubject";
import { useProgress } from "../hooks/useProgress";
import { saveQuizScore } from "../utils/storage";
const FORMAT_OPTIONS = [
  { id: "multiple-choice", label: "Multiple Choice", detail: "โจทย์ + ตัวเลือก A-D" },
  { id: "practice-card", label: "Practice Card", detail: "ข้อเขียน — ดูเฉลยเมื่อพร้อม (ทำบนกระดาษ)" },
  { id: "pdf", label: "PDF Export", detail: "ข้อเขียนหลายแบบ — ดาวน์โหลดปริ้นทำ" },
];

const DIFFICULTY_OPTIONS = [
  { id: "easy", label: "ง่าย" },
  { id: "normal", label: "ปกติ" },
  { id: "hard", label: "ยาก" },
];

const EXAM_PRESETS = [
  { id: "midterm", label: "กลางภาค", accent: "amber" },
  { id: "final", label: "ปลายภาค", accent: "rose" },
];

const GENERATE_COOLDOWN_MS = 3000;

function toQuizQuestion(q) {
  return {
    id: String(q.id),
    question: q.question,
    options: q.choices?.length ? q.choices : ["A", "B", "C", "D"],
    answer: q.correctAnswer ?? 0,
    solution: q.solution,
  };
}

function QuestionTypeBadge({ type }) {
  if (!type) return null;
  return (
    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
      {QUESTION_TYPE_LABELS[type] ?? type}
    </span>
  );
}

function SourceBadge({ label }) {
  if (!label) return null;
  return (
    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
      {label}
    </span>
  );
}

function WritingSpace({ lines = 6 }) {
  return (
    <div className="mt-4 space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="border-b border-slate-300 dark:border-slate-600" style={{ minHeight: "1.75rem" }} />
      ))}
    </div>
  );
}

function SetupScreen({ subject, settings, setSettings, onGenerate, loading, loadingStatus, error, cooldownLeft, bankStats }) {
  const topics = useMemo(() => getSubjectTopics(subject), [subject]);
  const examPreview = useMemo(
    () => (settings.examMode !== "all" ? getExamModePreview(subject.id, settings.examMode) : null),
    [subject.id, settings.examMode]
  );
  const difficultyPreview = useMemo(
    () => getDifficultyMixPreview(settings.difficulty),
    [settings.difficulty]
  );
  const examChapterTitles = useMemo(
    () => (settings.examMode !== "all" ? Object.keys(getTopicWeights(subject.id, settings.examMode)) : null),
    [subject.id, settings.examMode]
  );

  function selectAllTopics() {
    setSettings((prev) => ({ ...prev, examMode: "all", topicTitles: topics.map((t) => t.title) }));
  }

  function selectExamPreset(mode) {
    setSettings((prev) => {
      const nextMode = prev.examMode === mode ? "all" : mode;
      if (nextMode === "all") {
        return { ...prev, examMode: "all", topicTitles: topics.map((t) => t.title) };
      }
      const weighted = Object.keys(getTopicWeights(subject.id, mode));
      return { ...prev, examMode: mode, topicTitles: weighted };
    });
  }

  function toggleTopic(title) {
    setSettings((prev) => ({
      ...prev,
      examMode: "all",
      topicTitles: prev.topicTitles.includes(title)
        ? prev.topicTitles.filter((t) => t !== title)
        : [...prev.topicTitles, title],
    }));
  }

  const canGenerate =
    settings.examMode === "midterm" ||
    settings.examMode === "final" ||
    settings.topicTitles.length > 0;

  const allTopicsSelected = topics.length > 0 && topics.every((t) => settings.topicTitles.includes(t.title));
  const COUNT_PRESETS = [5, 10, 15, 20];

  return (
    <div className="space-y-6">
      <header className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/90">
        <div className="blob blob-blue -left-10 -top-10 h-32 w-32" />
        <div className="relative">
          <p className="font-semibold" style={{ color: subject.accent }}>
            {subject.title}
          </p>
          <h1 className="mt-2 flex items-center gap-2 text-3xl font-bold text-ink dark:text-white">
            <Sparkles className="text-primary" size={28} />
            AI Quiz Generator
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            ผสม 3 ชั้น: ข้อสอบจริง ~15% · คลังโจทย์ ~70% · AI unique ~15%
          </p>
          {bankStats?.total > 0 ? (
            <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
              คลังพร้อมใช้ {bankStats.total} ข้อ
              {bankStats.exam != null
                ? ` (ข้อสอบจริง ${bankStats.exam} · คลัง generated ${bankStats.generated ?? 0})`
                : ""}
            </p>
          ) : null}
        </div>
      </header>

      <section className="space-y-5 rounded-2xl border border-slate-200/80 bg-white/90 p-6 dark:border-slate-700/50 dark:bg-slate-900/90">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">หัวข้อ / ประเภทข้อสอบ</label>
            <button
              type="button"
              onClick={selectAllTopics}
              className={`rounded-lg border px-3 py-1 text-xs font-semibold transition ${
                allTopicsSelected && settings.examMode === "all"
                  ? "border-primary bg-primary/10 text-primary dark:bg-blue-950/40"
                  : "border-slate-200 text-slate-600 hover:border-primary/40 dark:border-slate-700 dark:text-slate-300"
              }`}
            >
              เลือกทุกบท
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {EXAM_PRESETS.map((preset) => {
              const selected = settings.examMode === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => selectExamPreset(preset.id)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${
                    selected
                      ? preset.id === "midterm"
                        ? "border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200"
                        : "border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200"
                      : "border-slate-200 text-slate-600 hover:border-primary/40 dark:border-slate-700 dark:text-slate-300"
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
            {topics.map((topic) => {
              if (examChapterTitles && !examChapterTitles.includes(topic.title)) return null;
              const selected =
                settings.examMode !== "all"
                  ? settings.topicTitles.includes(topic.title)
                  : settings.topicTitles.includes(topic.title);
              const readOnly = settings.examMode !== "all";
              return (
                <button
                  key={topic.id}
                  type="button"
                  disabled={readOnly}
                  onClick={() => !readOnly && toggleTopic(topic.title)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                    selected
                      ? settings.examMode === "midterm"
                        ? "border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200"
                        : settings.examMode === "final"
                          ? "border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200"
                          : "border-primary bg-primary/10 text-primary dark:bg-blue-950/40"
                      : "border-slate-200 text-slate-600 hover:border-primary/40 dark:border-slate-700 dark:text-slate-300"
                  } ${readOnly ? "cursor-default opacity-90" : ""}`}
                >
                  {topic.title}
                </button>
              );
            })}
          </div>
          {examPreview ? (
            <p className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              สัดส่วนหัวข้อ{settings.examMode === "midterm" ? "กลางภาค" : "ปลายภาค"}: {examPreview}
            </p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">จำนวนข้อ (สูงสุด 20)</label>
          <div className="mt-3 flex flex-wrap gap-2">
            {COUNT_PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setSettings((s) => ({ ...s, count: preset }))}
                className={`min-w-[3.5rem] rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                  settings.count === preset
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-slate-200 text-slate-600 hover:border-primary/40 dark:border-slate-700 dark:text-slate-300"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSettings((s) => ({ ...s, count: Math.max(5, s.count - 1) }))}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <Minus size={16} />
            </button>
            <span className="min-w-[3rem] text-center text-2xl font-bold">{settings.count}</span>
            <button
              type="button"
              onClick={() => setSettings((s) => ({ ...s, count: Math.min(20, s.count + 1) }))}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">ระดับความยาก</label>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {DIFFICULTY_OPTIONS.map((option) => (
              <label
                key={option.id}
                className={`flex cursor-pointer flex-col gap-1 rounded-xl border p-3 transition ${
                  settings.difficulty === option.id
                    ? "border-primary bg-primary/5 dark:bg-blue-950/30"
                    : "border-slate-200 dark:border-slate-700"
                }`}
              >
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="difficulty"
                    checked={settings.difficulty === option.id}
                    onChange={() => setSettings((s) => ({ ...s, difficulty: option.id }))}
                  />
                  <span className="font-semibold text-ink dark:text-white">{option.label}</span>
                </span>
                <span className="text-xs text-slate-500">{DIFFICULTY_GUIDE[option.id]}</span>
              </label>
            ))}
          </div>
          <p className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            สัดส่วนในชุด: {difficultyPreview}
          </p>
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">รูปแบบ</label>
          <div className="mt-3 grid gap-2">
            {FORMAT_OPTIONS.map((option) => (
              <label
                key={option.id}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                  settings.format === option.id
                    ? "border-primary bg-primary/5 dark:bg-blue-950/30"
                    : "border-slate-200 dark:border-slate-700"
                }`}
              >
                <input
                  type="radio"
                  name="format"
                  checked={settings.format === option.id}
                  onChange={() => setSettings((s) => ({ ...s, format: option.id }))}
                />
                <span>
                  <span className="block font-semibold text-ink dark:text-white">{option.label}</span>
                  <span className="text-sm text-slate-500">{option.detail}</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        {error ? (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-300">
            {error}
          </div>
        ) : null}

        <button
          type="button"
          onClick={onGenerate}
          disabled={loading || !canGenerate || cooldownLeft > 0}
          className="btn-ripple flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 px-4 py-4 text-lg font-semibold text-white shadow-md transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? <Loader2 className="animate-spin" size={22} /> : <Sparkles size={22} />}
          {loading ? loadingStatus || "AI กำลังออกข้อสอบ..." : cooldownLeft > 0 ? `รอ ${Math.ceil(cooldownLeft / 1000)} วิ...` : "สร้างข้อสอบ"}
        </button>
      </section>
    </div>
  );
}

function PracticeCardQuiz({ quiz, onRegenerateAll, onBack }) {
  const [index, setIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const question = quiz.questions[index];
  const isLast = index === quiz.questions.length - 1;

  function goBack() {
    setShowSolution(false);
    if (index > 0) setIndex((i) => i - 1);
  }

  function goNext() {
    setShowSolution(false);
    if (index < quiz.questions.length - 1) setIndex((i) => i + 1);
  }

  return (
    <div className="space-y-5">
      <QuizHeader quiz={quiz} onRegenerateAll={onRegenerateAll} onBack={onBack} />
      <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 dark:border-slate-700/50 dark:bg-slate-900/90">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500">
          <span>
            ข้อ {index + 1}/{quiz.questions.length}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <QuestionTypeBadge type={question.questionType} />
            <SourceBadge label={question.sourceLabel} />
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold dark:bg-slate-800">{question.topic}</span>
          </div>
        </div>
        <h2 className="mt-4 text-xl font-bold leading-relaxed text-ink dark:text-white">
          <MathText text={question.question} />
        </h2>
        <p className="mt-3 text-sm text-slate-500">ทำบนกระดาษหรือสมุด แล้วกดดูเฉลยเมื่อพร้อม</p>
        <button
          type="button"
          onClick={() => setShowSolution((v) => !v)}
          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold dark:border-slate-700"
        >
          {showSolution ? <EyeOff size={16} /> : <Eye size={16} />}
          {showSolution ? "ซ่อนเฉลย" : "ดูเฉลย"}
        </button>
        {showSolution ? (
          <div className="mt-4 overflow-hidden rounded-2xl border border-amber-100 bg-white dark:border-amber-900/30 dark:bg-slate-900">
            <div className="flex items-center gap-2 border-b border-amber-100 bg-amber-50 px-4 py-2.5 dark:border-amber-900/30 dark:bg-amber-950/30">
              <span className="text-amber-500">💡</span>
              <span className="text-sm font-bold tracking-wide text-amber-700 dark:text-amber-300">เฉลย</span>
            </div>
            <div className="px-4 py-4">
              <SolutionText text={question.solution} />
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={goBack}
          disabled={index === 0}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3.5 font-semibold disabled:opacity-40 dark:border-slate-700"
        >
          <ChevronLeft size={18} />
          ย้อนกลับ
        </button>
        {!isLast ? (
          <button type="button" onClick={goNext} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 font-semibold text-white">
            ข้อถัดไป
            <ChevronRight size={18} />
          </button>
        ) : null}
      </div>
    </div>
  );
}

function MultipleChoiceQuiz({ quiz, subject, onRegenerateAll, onRegenerateOne, onBack }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [saved, setSaved] = useState(false);

  const questions = quiz.questions.map(toQuizQuestion);
  const question = questions[index];
  const selected = answers[index]?.selected ?? null;
  const score = questions.filter((_, i) => answers[i]?.correct).length;
  const wrongQuestions = questions
    .map((q, i) => ({ question: q, index: i, answer: answers[i] }))
    .filter((row) => !row.answer?.correct);

  function selectAnswer(optionIndex) {
    setAnswers((prev) => ({
      ...prev,
      [index]: { selected: optionIndex, correct: optionIndex === question.answer },
    }));
  }

  function goBack() {
    if (index > 0) setIndex((v) => v - 1);
  }

  function goNext() {
    if (index < questions.length - 1) setIndex((v) => v + 1);
  }

  function finishQuiz() {
    const finalScore = questions.filter((_, i) => answers[i]?.correct).length;
    setFinished(true);
    if (!saved) {
      saveQuizScore(subject.id, finalScore, questions.length);
      setSaved(true);
    }
  }

  function reset() {
    setIndex(0);
    setAnswers({});
    setFinished(false);
    setSaved(false);
  }

  const allAnswered = questions.every((_, i) => answers[i]?.selected != null);
  const isLast = index === questions.length - 1;

  if (finished) {
    return (
      <div className="space-y-5">
        <QuizHeader quiz={quiz} onRegenerateAll={onRegenerateAll} onRegenerateOne={onRegenerateOne} onBack={onBack} />

        <section className="rounded-2xl border border-slate-200/80 bg-white/90 p-8 text-center dark:border-slate-700/50 dark:bg-slate-900/90">
          <Trophy className="mx-auto text-amber-500" size={40} />
          <h2 className="mt-4 text-2xl font-bold text-ink dark:text-white">ทำแบบทดสอบเสร็จแล้ว!</h2>
          <p className="mt-4 text-5xl font-bold gradient-text">
            {score}/{questions.length}
          </p>
          {wrongQuestions.length > 0 ? (
            <p className="mt-3 text-sm text-rose-600 dark:text-rose-400">
              ตอบผิด {wrongQuestions.length} ข้อ: {wrongQuestions.map((row) => row.index + 1).join(", ")}
            </p>
          ) : (
            <p className="mt-3 text-sm text-emerald-600 dark:text-emerald-400">ตอบถูกทุกข้อ!</p>
          )}
          <button type="button" onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-white dark:bg-white dark:text-slate-900">
            <RotateCcw size={18} />
            ทำอีกครั้ง
          </button>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-bold text-ink dark:text-white">เฉลยและวิธีทำทุกข้อ</h3>
          {questions.map((q, i) => {
            const ans = answers[i];
            const isCorrect = ans?.correct;
            return (
              <article
                key={q.id}
                className={`rounded-2xl border p-5 ${
                  isCorrect
                    ? "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20"
                    : "border-rose-200 bg-rose-50/50 dark:border-rose-900 dark:bg-rose-950/20"
                }`}
              >
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-bold text-ink dark:text-white">ข้อ {i + 1}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      isCorrect ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" : "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                    }`}
                  >
                    {isCorrect ? "ถูก" : "ผิด"}
                  </span>
                </div>
                <p className="mt-3 text-lg font-semibold leading-relaxed text-ink dark:text-white">
                  <MathText text={q.question} />
                </p>
                {!isCorrect && ans?.selected != null ? (
                  <p className="mt-3 text-sm text-rose-700 dark:text-rose-300">
                    คุณเลือก: <MathText text={q.options[ans.selected]} />
                  </p>
                ) : null}
                <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
                  คำตอบที่ถูก: <MathText text={q.options[q.answer]} />
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-amber-100 bg-white dark:border-amber-900/30 dark:bg-slate-900">
                  <div className="border-b border-amber-100 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-700 dark:border-amber-900/30 dark:bg-amber-950/30 dark:text-amber-300">วิธีทำ</div>
                  <div className="px-3 py-3">
                    <SolutionText text={q.solution} />
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <QuizHeader quiz={quiz} onRegenerateAll={onRegenerateAll} onRegenerateOne={onRegenerateOne} onBack={onBack} />

      <p className="text-sm text-slate-500 dark:text-slate-400">
        ข้อ <span className="font-bold text-ink dark:text-white">{index + 1}</span> / {questions.length}
        <span className="ml-3">ตอบแล้ว {Object.keys(answers).length}/{questions.length}</span>
      </p>

      <QuizQuestion question={question} selected={selected} onSelect={selectAnswer} showSolution={false} showFeedback={false} />

      <div className="flex gap-3">
        <button
          type="button"
          onClick={goBack}
          disabled={index === 0}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3.5 font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700"
        >
          <ChevronLeft size={18} />
          ย้อนกลับ
        </button>
        {!isLast ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 font-semibold text-white"
          >
            ข้อถัดไป
            <ChevronRight size={18} />
          </button>
        ) : (
          <button
            type="button"
            onClick={finishQuiz}
            disabled={!allAnswered}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 px-4 py-3.5 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            ดูเฉลยและคะแนน
          </button>
        )}
      </div>
    </div>
  );
}

function PdfPreview({ quiz, onRegenerateAll, onBack }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");
  const [downloadRequest, setDownloadRequest] = useState(null);
  const pageRefs = useRef([]);

  useEffect(() => {
    if (!downloadRequest) return undefined;
    if (showAnswers !== downloadRequest.includeAnswers) return undefined;

    let cancelled = false;
    const run = async () => {
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      if (document.fonts?.ready) await document.fonts.ready;
      await new Promise((r) => setTimeout(r, 500));
      if (cancelled) return;

      const pages = pageRefs.current.filter(Boolean);
      if (!pages.length) {
        if (!cancelled) {
          setDownloadError("ยังจัดหน้า PDF ไม่เสร็จ — ลองอีกครั้งในไม่กี่วินาที");
          setDownloading(false);
          setDownloadRequest(null);
        }
        return;
      }

      try {
        await exportQuizToPdf(
          pages,
          `quiz-${quiz.subjectId}-${downloadRequest.includeAnswers ? "with-answers" : "questions"}.pdf`
        );
      } catch (err) {
        if (!cancelled) {
          setDownloadError(err?.message ?? "ดาวน์โหลด PDF ไม่สำเร็จ");
        }
      } finally {
        if (!cancelled) {
          setDownloading(false);
          setDownloadRequest(null);
        }
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [downloadRequest, quiz.subjectId, showAnswers]);

  function download(includeAnswers) {
    setDownloadError("");
    pageRefs.current = [];
    setShowAnswers(includeAnswers);
    setDownloading(true);
    setDownloadRequest({ includeAnswers, at: Date.now() });
  }

  return (
    <div className="space-y-5">
      <QuizHeader quiz={quiz} onRegenerateAll={onRegenerateAll} onBack={onBack} />
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          disabled={downloading}
          onClick={() => download(false)}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
        >
          <Download size={16} />
          {downloading ? "กำลังสร้าง PDF..." : "ดาวน์โหลดโจทย์อย่างเดียว"}
        </button>
        <button
          type="button"
          disabled={downloading}
          onClick={() => download(true)}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold disabled:opacity-60 dark:border-slate-700"
        >
          <Download size={16} />
          ดาวน์โหลดโจทย์ + เฉลย
        </button>
        <button
          type="button"
          onClick={() => setShowAnswers((v) => !v)}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold dark:border-slate-700"
        >
          {showAnswers ? <EyeOff size={16} /> : <Eye size={16} />}
          {showAnswers ? "ซ่อนเฉลยใน preview" : "แสดงเฉลยใน preview"}
        </button>
      </div>
      {downloadError ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-300">
          {downloadError}
        </div>
      ) : null}
      <QuizPdfDocument quiz={quiz} showAnswers={showAnswers} pageRefs={pageRefs} />
    </div>
  );
}

function QuizHeader({ quiz, onRegenerateAll, onRegenerateOne, onBack }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-4 dark:border-slate-700/50 dark:bg-slate-900/90">
      <div>
        <p className="text-sm text-slate-500">{quiz.topics.join(", ")}</p>
        <p className="font-semibold text-ink dark:text-white">
          {quiz.questions.length} ข้อ · {quiz.difficultyLabel ?? quiz.difficulty}
          {quiz.generatedBy ? <span className="ml-2 text-xs font-normal text-slate-500">via {quiz.generatedBy}</span> : null}
          {quiz.localCount != null ? (
            <span className="ml-2 text-xs font-normal text-slate-500">
              (bank {quiz.localCount} / AI {quiz.aiCount ?? 0})
            </span>
          ) : null}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={onBack} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold dark:border-slate-700">
          ตั้งค่าใหม่
        </button>
        {onRegenerateOne ? (
          <button type="button" onClick={onRegenerateOne} className="inline-flex items-center gap-1 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold dark:border-slate-700">
            <RefreshCw size={14} />
            สร้างข้อใหม่
          </button>
        ) : null}
        <button type="button" onClick={onRegenerateAll} className="inline-flex items-center gap-1 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-white">
          <RefreshCw size={14} />
          สร้างชุดใหม่
        </button>
      </div>
    </div>
  );
}

export default function AiQuiz() {
  const { subjectId } = useParams();
  const { subject, meta, loading: subjectLoading, error: subjectError } = useSubject(subjectId);
  const progress = useProgress();

  const [screen, setScreen] = useState("setup");
  const [settings, setSettings] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState("");
  const [error, setError] = useState("");
  const [lastGenerateAt, setLastGenerateAt] = useState(0);
  const [cooldownNow, setCooldownNow] = useState(Date.now());
  const [bankStats, setBankStats] = useState({ total: 0, exam: 0, generated: 0, textbook: 0, byTopic: {} });

  useEffect(() => {
    if (!subject) return;
    const defaults = progress.settings.quizDefaults ?? {};
    const baseSettings = {
      topicTitles: subject.chapters.map((c) => c.title),
      count: defaults.count ?? 5,
      difficulty: defaults.difficulty ?? "normal",
      format: defaults.format ?? "multiple-choice",
      examMode: "all",
    };

    const saved = readActiveQuizSession(subject.id);
    if (saved?.settings) {
      setSettings({ ...baseSettings, ...saved.settings });
    } else {
      setSettings(baseSettings);
    }

    if (saved?.quiz) {
      setQuiz(saved.quiz);
      const format = saved.settings?.format ?? baseSettings.format;
      setScreen(saved.screen ?? (format === "pdf" ? "pdf" : "quiz"));
    } else {
      setQuiz(null);
      setScreen("setup");
    }
  }, [subject, progress.settings.quizDefaults]);

  useEffect(() => {
    if (!subject || !quiz || !settings) return;
    saveActiveQuizSession(subject.id, { quiz, screen, settings });
  }, [subject, quiz, screen, settings]);

  useEffect(() => {
    if (!subject || !settings) return;
    let active = true;
    getBankStats(subject.id, settings.topicTitles, settings.difficulty, settings.format, settings.examMode)
      .then((stats) => {
        if (active) setBankStats(stats);
      })
      .catch(() => {
        if (active) setBankStats({ total: 0, exam: 0, generated: 0, textbook: 0, byTopic: {} });
      });
    return () => {
      active = false;
    };
  }, [subject, settings?.topicTitles, settings?.difficulty, settings?.format, settings?.examMode]);

  const cooldownLeft = Math.max(0, GENERATE_COOLDOWN_MS - (cooldownNow - lastGenerateAt));

  if (subjectLoading || !settings) return <PageLoader label="กำลังโหลด Quiz..." />;
  if (subjectError || !subject) {
    return <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{subjectError || "โหลดวิชาไม่สำเร็จ"}</div>;
  }

  async function handleGenerate() {
    if (settings.topicTitles.length === 0) return;
    if (Date.now() - lastGenerateAt < GENERATE_COOLDOWN_MS) return;

    setLoading(true);
    setError("");
    setLoadingStatus("กำลังเตรียมสร้างข้อสอบ...");
    try {
      const result = await generateQuiz(
        {
          subject,
          topicTitles: settings.topicTitles,
          count: settings.count,
          difficulty: settings.difficulty,
          format: settings.format,
          examMode: settings.examMode,
        },
        setLoadingStatus
      );
      setQuiz(result);
      saveQuizToHistory(result);
      setLastGenerateAt(Date.now());
      setScreen(settings.format === "pdf" ? "pdf" : "quiz");
    } catch (err) {
      setError(err.message ?? "เกิดข้อผิดพลาด");
    } finally {
      setLoading(false);
      setLoadingStatus("");
      setCooldownNow(Date.now());
    }
  }

  function backToSetup() {
    clearActiveQuizSession(subject.id);
    setScreen("setup");
    setQuiz(null);
  }

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <Link to={`/subjects/${subject.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
        <ArrowLeft size={16} />
        กลับไปหน้า {meta.title}
      </Link>

      {loading ? (
        <div className="flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
          <Loader2 className="animate-spin shrink-0" size={18} />
          {loadingStatus || "AI กำลังออกข้อสอบ..."}
        </div>
      ) : null}

      {error && screen !== "setup" ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-300">
          {error}
        </div>
      ) : null}

      {screen === "setup" ? (
        <SetupScreen
          subject={subject}
          settings={settings}
          setSettings={setSettings}
          onGenerate={handleGenerate}
          loading={loading}
          loadingStatus={loadingStatus}
          error={error}
          cooldownLeft={cooldownLeft}
          bankStats={bankStats}
        />
      ) : null}

      {screen === "quiz" && quiz && settings.format === "multiple-choice" ? (
        <MultipleChoiceQuiz quiz={quiz} subject={subject} onRegenerateAll={handleGenerate} onRegenerateOne={handleGenerate} onBack={backToSetup} />
      ) : null}

      {screen === "quiz" && quiz && settings.format === "practice-card" ? (
        <PracticeCardQuiz quiz={quiz} onRegenerateAll={handleGenerate} onBack={backToSetup} />
      ) : null}

      {screen === "pdf" && quiz ? <PdfPreview quiz={quiz} onRegenerateAll={handleGenerate} onBack={backToSetup} /> : null}
    </div>
  );
}
