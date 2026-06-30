import { Fragment } from "react";
import { BlockMath, InlineMath } from "react-katex";

const DISPLAY_MATH_PATTERN = /\\(sum|int|iint|iiint|oint|frac|dfrac|tfrac|lim|sqrt|begin\{)/;

function isDisplayMath(latex) {
  return DISPLAY_MATH_PATTERN.test(latex) || latex.length > 36;
}

/** PDF-safe math: complex expressions render as block to avoid broken fractions/sums */
export default function PdfMathText({ text = "", className = "" }) {
  const parts = String(text).split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+\$)/g);

  return (
    <span className={`pdf-math-text ${className}`.trim()}>
      {parts.map((part, index) => {
        if (part.startsWith("$$") && part.endsWith("$$") && part.length > 4) {
          return <BlockMath key={`m-b-${index}`} math={part.slice(2, -2)} />;
        }
        if (part.startsWith("$") && part.endsWith("$") && part.length > 2) {
          const latex = part.slice(1, -1);
          if (isDisplayMath(latex)) {
            return (
              <span key={`m-d-${index}`} className="pdf-math-block my-2 block w-full">
                <BlockMath math={latex} />
              </span>
            );
          }
          return <InlineMath key={`m-i-${index}`} math={latex} />;
        }
        return <Fragment key={`t-${index}`}>{part}</Fragment>;
      })}
    </span>
  );
}

export { isDisplayMath, DISPLAY_MATH_PATTERN };
