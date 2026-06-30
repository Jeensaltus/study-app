import { Fragment } from "react";
import { BlockMath, InlineMath } from "react-katex";

export default function MathText({ text = "", className = "" }) {
  const parts = String(text).split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+\$)/g);
  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith("$$") && part.endsWith("$$") && part.length > 4) {
          return <BlockMath key={`math-block-${index}`} math={part.slice(2, -2)} />;
        }
        if (part.startsWith("$") && part.endsWith("$") && part.length > 2) {
          return <InlineMath key={`math-inline-${index}`} math={part.slice(1, -1)} />;
        }
        return <Fragment key={`text-${index}`}>{part}</Fragment>;
      })}
    </span>
  );
}
