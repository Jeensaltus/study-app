import { Moon, RefreshCcw, Sun, Target, Bot, ClipboardList, Languages, Fingerprint, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useProgress } from "../hooks/useProgress";
import {
  AI_MODEL_OPTIONS,
  DAILY_GOAL_OPTIONS,
  ENGLISH_FILTER_OPTIONS,
  QUIZ_COUNT_OPTIONS,
  QUIZ_DIFFICULTY_OPTIONS,
  QUIZ_FORMAT_OPTIONS,
} from "../config/settingsOptions";
import { resetProgress, updateSettings } from "../utils/storage";
import { getDeviceId, getDeviceLabel } from "../utils/deviceId";

function SettingRow({ icon: Icon, iconClass, title, detail, children }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 first:border-t-0 first:pt-0 dark:border-slate-800">
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconClass}`}>
          <Icon size={22} />
        </div>
        <div>
          <h2 className="font-bold text-ink dark:text-white">{title}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">{detail}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function SegmentedControl({ value, options, onChange, getLabel = (o) => o.label ?? o }) {
  return (
    <div className="inline-flex max-w-full flex-wrap justify-end gap-1 rounded-xl border border-slate-200 bg-slate-50/50 p-1 dark:border-slate-700 dark:bg-slate-800/50">
      {options.map((option) => {
        const id = typeof option === "object" ? option.id : option;
        const label = typeof option === "object" ? getLabel(option) : option;
        const selected = value === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 ${
              selected
                ? "bg-primary text-white shadow-sm"
                : "text-slate-600 hover:text-ink dark:text-slate-300 dark:hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default function Settings() {
  const progress = useProgress();
  const { settings } = progress;
  const quizDefaults = settings.quizDefaults ?? {};
  const deviceId = getDeviceId();
  const [copied, setCopied] = useState(false);

  async function copyDeviceId() {
    try {
      await navigator.clipboard.writeText(deviceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="relative mx-auto max-w-3xl space-y-6">
      <div className="blob blob-blue -left-20 top-0 h-48 w-48" />
      <div className="blob blob-amber -right-20 top-20 h-48 w-48" />

      <header className="relative animate-fade-in-down">
        <p className="text-sm font-semibold text-primary">Settings</p>
        <h1 className="mt-2 text-3xl font-bold text-ink dark:text-white">ตั้งค่าแอป</h1>
      </header>

      <section className="relative animate-fade-in-up space-y-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/90">
        <SettingRow
          icon={settings.darkMode ? Moon : Sun}
          iconClass={`transition-colors duration-500 ${settings.darkMode ? "bg-slate-800 text-primary" : "bg-amber-50 text-amber-500 dark:bg-amber-950/40"}`}
          title="Dark mode"
          detail="สลับธีมสว่าง/มืด"
        >
          <button
            type="button"
            onClick={() => updateSettings({ darkMode: !settings.darkMode })}
            className={`relative h-7 w-12 rounded-full p-1 transition-colors duration-300 ${
              settings.darkMode ? "bg-primary" : "bg-slate-300"
            }`}
          >
            <span
              className={`block h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-300 ${
                settings.darkMode ? "translate-x-5" : ""
              }`}
            />
          </button>
        </SettingRow>

        <SettingRow
          icon={Target}
          iconClass="bg-blue-50 text-primary dark:bg-blue-950/40"
          title="Daily goal"
          detail="เป้าหมาย flashcard + slide ต่อวัน (นับรวมใน activity วันนี้)"
        >
          <SegmentedControl
            value={settings.dailyGoal ?? 30}
            options={DAILY_GOAL_OPTIONS}
            onChange={(dailyGoal) => updateSettings({ dailyGoal })}
            getLabel={(n) => String(n)}
          />
        </SettingRow>

        <SettingRow
          icon={Bot}
          iconClass="bg-violet-50 text-violet-600 dark:bg-violet-950/40"
          title="AI Tutor model"
          detail="โมเดลเริ่มต้นเมื่อเปิด AI Tutor"
        >
          <select
            value={settings.aiModel ?? "gemini-2.5-flash"}
            onChange={(e) => updateSettings({ aiModel: e.target.value })}
            className="max-w-xs rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium dark:border-slate-700 dark:bg-slate-950"
          >
            {AI_MODEL_OPTIONS.map((model) => (
              <option key={model.id} value={model.id}>
                {model.label}
              </option>
            ))}
          </select>
        </SettingRow>

        <SettingRow
          icon={ClipboardList}
          iconClass="bg-emerald-50 text-success dark:bg-emerald-950/40"
          title="Quiz defaults"
          detail="ค่าเริ่มต้นเมื่อเข้า AI Quiz"
        >
          <div className="flex max-w-md flex-col gap-2">
            <div className="flex flex-wrap items-center justify-end gap-2">
              <span className="text-xs font-semibold text-slate-500">ข้อ</span>
              <SegmentedControl
                value={quizDefaults.count ?? 5}
                options={QUIZ_COUNT_OPTIONS}
                onChange={(count) => updateSettings({ quizDefaults: { count } })}
                getLabel={(n) => String(n)}
              />
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2">
              <span className="text-xs font-semibold text-slate-500">ความยาก</span>
              <SegmentedControl
                value={quizDefaults.difficulty ?? "normal"}
                options={QUIZ_DIFFICULTY_OPTIONS}
                onChange={(difficulty) => updateSettings({ quizDefaults: { difficulty } })}
              />
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2">
              <span className="text-xs font-semibold text-slate-500">รูปแบบ</span>
              <SegmentedControl
                value={quizDefaults.format ?? "multiple-choice"}
                options={QUIZ_FORMAT_OPTIONS}
                onChange={(format) => updateSettings({ quizDefaults: { format } })}
              />
            </div>
          </div>
        </SettingRow>

        <SettingRow
          icon={Languages}
          iconClass="bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40"
          title="English flashcard"
          detail="แท็บเริ่มต้นเมื่อเปิด flashcard ภาษาอังกฤษ"
        >
          <select
            value={settings.englishDefaultFilter ?? "all"}
            onChange={(e) => updateSettings({ englishDefaultFilter: e.target.value })}
            className="max-w-xs rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium dark:border-slate-700 dark:bg-slate-950"
          >
            {ENGLISH_FILTER_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </SettingRow>

        <SettingRow
          icon={Fingerprint}
          iconClass="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          title="Device ID"
          detail="รหัสเครื่องนี้ — ใช้ผูก progress/chat ในอนาคต (ยังไม่ sync ข้ามเครื่อง)"
        >
          <div className="flex max-w-md flex-col items-end gap-2">
            <code className="break-all rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
              {deviceId}
            </code>
            <button
              type="button"
              onClick={copyDeviceId}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
              {copied ? "Copied" : `Copy (${getDeviceLabel(deviceId)})`}
            </button>
          </div>
        </SettingRow>
      </section>

      <section className="relative animate-fade-in-up overflow-hidden rounded-2xl border border-rose-200/80 bg-white/90 p-6 backdrop-blur-sm dark:border-rose-900/50 dark:bg-slate-900/90">
        <div className="blob blob-amber -right-10 -bottom-10 h-32 w-32 opacity-20" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 dark:bg-rose-950/40">
              <RefreshCcw className="text-rose-500" size={22} />
            </div>
            <div>
              <h2 className="font-bold text-rose-700 dark:text-rose-300">Reset progress</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                ลบ flashcard schedule, quiz history, activity และความคืบหน้า slide วันนี้ (เก็บ settings ไว้)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              if (confirm("Reset progress ทั้งหมดใช่ไหม?")) resetProgress();
            }}
            className="btn-ripple inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 px-5 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-rose-600/25 active:scale-[0.97]"
          >
            <RefreshCcw size={18} />
            Reset
          </button>
        </div>
      </section>
    </div>
  );
}
