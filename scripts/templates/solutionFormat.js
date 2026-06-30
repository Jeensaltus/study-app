/**
 * Solution format helpers for rich step-by-step solutions.
 *
 * Usage:
 *   import { h, b, p, sep, buildSol } from "./solutionFormat.js";
 *
 *   solution: buildSol([
 *     h("วิธีการ", "L'Hôpital (รูป 0/0)"),
 *     p("แทน $x=0$: เศษ $=0$, ส่วน $=0$ → รูป $\\frac{0}{0}$"),
 *     h("อนุพันธ์ครั้งที่ 1"),
 *     b("เศษ: $ae^{ax}-a$"),
 *     b("ส่วน: $2x$"),
 *     p("แทน $x=0$: ยังเป็น $\\frac{0}{0}$"),
 *     h("อนุพันธ์ครั้งที่ 2"),
 *     b("เศษ: $a^2e^{ax}$"),
 *     b("ส่วน: $2$"),
 *     p("$\\displaystyle\\lim_{x\\to0}=\\dfrac{a^2}{2}$"),
 *   ], "$\\dfrac{a^2}{2}$")
 */

/** Section header: renders as a blue label + optional subtitle */
export const sec = (title, subtitle = "") =>
  subtitle ? `**${title}:** ${subtitle}` : `**${title}:**`;

/** Bullet sub-step */
export const bul = (text) => `• ${text}`;

/** Plain paragraph line */
export const para = (text) => text;

/** Short aliases kept for templates that don't conflict */
export const h = sec;
export const b = bul;
export const p = para;

/** Thin separator */
export const sep = () => "───";

/**
 * Build a full solution string from an array of lines + final answer.
 * Filters falsy values so optional steps can be passed as "" or null.
 */
export function buildSol(lines, answer) {
  return lines.filter(Boolean).join("\n") + `\n\n✅ คำตอบ: ${answer}`;
}

/** Legacy helper — kept for compatibility with old templates */
export function formatSolution(steps, answer) {
  const lines = steps.filter(Boolean).map((s, i) => `${i + 1}. ${s}`);
  return `${lines.join("\n")}\n\n✅ คำตอบ: ${answer}`;
}
