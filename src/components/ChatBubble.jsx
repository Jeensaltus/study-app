import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import ChatAttachments from "./ChatAttachments";

const mathCommandNames = [
  "frac",
  "dfrac",
  "tfrac",
  "sqrt",
  "lim",
  "int",
  "sum",
  "prod",
  "sin",
  "cos",
  "tan",
  "ln",
  "log",
  "left",
  "right",
  "begin",
  "end",
  "hat",
  "bar",
  "vec",
  "psi",
  "phi",
  "Psi",
  "Phi",
  "nabla",
  "Delta",
  "delta",
  "partial",
  "cdot",
  "times",
  "geq",
  "leq",
  "neq",
  "approx",
  "hbar",
  "alpha",
  "beta",
  "gamma",
  "theta",
  "lambda",
  "mu",
  "sigma",
  "omega",
  "infty",
];

const mathCommandPattern = mathCommandNames.join("|");
const rawMathCommand = new RegExp(`\\\\(?:${mathCommandPattern})\\b`);
const tokenPattern = new RegExp(
  `(\\$\\$[\\s\\S]+?\\$\\$|\\\\\\[[\\s\\S]+?\\\\\\]|\\\\\\([\\s\\S]+?\\\\\\)|\\$[^$\\n]+\\$|\\*\\*[^*]+\\*\\*|\`[^\`]+\`)`,
  "g"
);

function useMathOverflow(math) {
  const ref = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    function measure() {
      const next = element.scrollWidth > element.clientWidth + 1;
      setIsOverflowing(next);
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [math]);

  return [ref, isOverflowing];
}

function MathBlock({ math }) {
  const [ref, isOverflowing] = useMathOverflow(math);
  return (
    <div ref={ref} className={`chat-math-block ${isOverflowing ? "chat-math-overflow" : ""}`}>
      <BlockMath math={math} errorColor="currentColor" renderError={() => <span className="chat-math-fallback">{math}</span>} />
    </div>
  );
}

function MathInline({ math }) {
  return (
    <span className="chat-math-inline">
      <InlineMath math={math} errorColor="currentColor" renderError={() => <span className="chat-math-fallback">{math}</span>} />
    </span>
  );
}

function isStandaloneMathLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return false;
  // Must start with \ or contain LaTeX command to be considered math
  if (!rawMathCommand.test(trimmed)) return false;
  // Must NOT contain Thai characters — those are explanatory text
  if (/[ก-๙]/.test(trimmed)) return false;
  // Must NOT start with Thai/English prose
  if (/^[A-Za-zก-๙]/.test(trimmed) && !trimmed.startsWith("\\")) return false;
  if (/^\\(?:text|mathrm)\b/.test(trimmed)) return false;
  return /[=_^]|\\(?:frac|hat|vec|psi|Psi|nabla|Delta|delta|partial|cdot|geq|leq|hbar)\b/.test(trimmed);
}

function normalizeAssistantText(text) {
  return text
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/\\+\$/g, "$")
    .replace(/\\{2,}(?=[A-Za-z])/g, "\\")
    .replace(/\\{2,}(?=[\[\]()])/g, "\\");
}

function nextMathEnd(text, start, delimiter) {
  let index = start;
  while (index < text.length) {
    const found = text.indexOf(delimiter, index);
    if (found === -1) return -1;
    if (text[found - 1] !== "\\") return found;
    index = found + delimiter.length;
  }
  return -1;
}

function parseInline(text) {
  const normalizedText = normalizeAssistantText(text);
  const nodes = [];
  let buffer = "";
  let i = 0;

  function flushText() {
    if (!buffer) return;
    const textParts = buffer.split(/(\*\*[^*]+\*\*|\x60[^\x60]+\x60)/g).filter(Boolean);
    textParts.forEach((part, index) => {
      const key = "text-" + nodes.length + "-" + index;
      if (part.startsWith("**") && part.endsWith("**")) {
        nodes.push(<strong key={key}>{parseInline(part.slice(2, -2))}</strong>);
      } else if (part.startsWith("\x60") && part.endsWith("\x60")) {
        nodes.push(
          <code key={key} className="rounded bg-slate-100 px-1 py-0.5 text-xs font-mono dark:bg-slate-700">
            {part.slice(1, -1)}
          </code>
        );
      } else {
        nodes.push(<Fragment key={key}>{part}</Fragment>);
      }
    });
    buffer = "";
  }

  while (i < normalizedText.length) {
    // $$ display math — even if inline in a paragraph
    if (normalizedText.startsWith("$$", i)) {
      const end = nextMathEnd(normalizedText, i + 2, "$$");
      if (end !== -1) {
        flushText();
        nodes.push(<MathBlock key={"math-" + nodes.length} math={normalizedText.slice(i + 2, end).trim()} />);
        i = end + 2;
        continue;
      }
    }

    if (normalizedText.startsWith("\\[", i)) {
      const end = nextMathEnd(normalizedText, i + 2, "\\]");
      if (end !== -1) {
        flushText();
        nodes.push(<MathBlock key={"math-" + nodes.length} math={normalizedText.slice(i + 2, end).trim()} />);
        i = end + 2;
        continue;
      }
    }

    if (normalizedText.startsWith("\\(", i)) {
      const end = nextMathEnd(normalizedText, i + 2, "\\)");
      if (end !== -1) {
        flushText();
        nodes.push(<MathInline key={"math-" + nodes.length} math={normalizedText.slice(i + 2, end).trim()} />);
        i = end + 2;
        continue;
      }
    }

    if (normalizedText[i] === "$" && normalizedText[i + 1] !== "$") {
      const end = nextMathEnd(normalizedText, i + 1, "$");
      if (end !== -1) {
        flushText();
        nodes.push(<MathInline key={"math-" + nodes.length} math={normalizedText.slice(i + 1, end).trim()} />);
        i = end + 1;
        continue;
      }
    }

    buffer += normalizedText[i];
    i++;
  }

  flushText();
  return nodes;
}
function AssistantContent({ text }) {
  const lines = normalizeAssistantText(text).split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (/^---+$/.test(trimmed)) {
      elements.push(<hr key={i} className="my-3 border-slate-200 dark:border-slate-700" />);
      i++;
      continue;
    }

    if (trimmed === "$$") {
      const start = i;
      const mathLines = [];
      i++;
      while (i < lines.length && lines[i].trim() !== "$$") {
        mathLines.push(lines[i]);
        i++;
      }
      if (i < lines.length && lines[i].trim() === "$$") i++;
      elements.push(<MathBlock key={`math-${start}`} math={mathLines.join("\n").trim()} />);
      continue;
    }

    const displayMathMatch = trimmed.match(/^(?:\$\$([\s\S]+)\$\$|\\\[([\s\S]+)\\\])$/);
    if (displayMathMatch) {
      elements.push(<MathBlock key={i} math={(displayMathMatch[1] ?? displayMathMatch[2]).trim()} />);
      i++;
      continue;
    }

    if (isStandaloneMathLine(line)) {
      elements.push(<MathBlock key={i} math={trimmed} />);
      i++;
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const cls = level === 1 ? "text-lg font-bold mt-3 mb-1" : level === 2 ? "text-base font-bold mt-3 mb-1" : "text-sm font-bold mt-2 mb-1";
      elements.push(
        <p key={i} className={cls}>
          {parseInline(headingMatch[2])}
        </p>
      );
      i++;
      continue;
    }

    if (/^[-*]\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i])) {
        items.push(
          <li key={i} className="ml-4 list-disc break-words">
            {parseInline(lines[i].replace(/^[-*]\s/, ""))}
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-1 space-y-0.5">
          {items}
        </ul>
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(
          <li key={i} className="ml-4 list-decimal break-words">
            {parseInline(lines[i].replace(/^\d+\.\s/, ""))}
          </li>
        );
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-1 space-y-0.5">
          {items}
        </ol>
      );
      continue;
    }

    if (trimmed === "") {
      elements.push(<div key={i} className="h-2" />);
      i++;
      continue;
    }

    elements.push(
      <p key={i} className="leading-7 break-words">
        {parseInline(line)}
      </p>
    );
    i++;
  }

  return <div className="chat-assistant-content space-y-0.5 min-w-0">{elements}</div>;
}

export default function ChatBubble({ role, content, attachments }) {
  const isUser = role === "user";
  return (
    <div className={`flex min-w-0 animate-fade-in-up ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative min-w-0 max-w-[86%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
          isUser
            ? "bg-gradient-to-r from-primary to-blue-600 text-white rounded-br-sm chat-tail-user"
            : "border border-slate-200/80 bg-white text-slate-800 dark:border-slate-700/50 dark:bg-slate-900 dark:text-slate-100 rounded-bl-sm chat-tail-assistant"
        }`}
      >
        {isUser ? (
          <>
            <ChatAttachments attachments={attachments} />
            {content ? <p className="leading-7 whitespace-pre-wrap break-words">{content}</p> : null}
          </>
        ) : (
          <AssistantContent text={content} />
        )}
      </div>
    </div>
  );
}
