/** Greatest common divisor for fraction reduction. */
function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    [x, y] = [y, x % y];
  }
  return x || 1;
}

function evalNumericPower(base, exp) {
  if (!Number.isInteger(base) || !Number.isInteger(exp)) return null;
  if (exp < 0 || exp > 6) return null;
  const value = base ** exp;
  if (!Number.isFinite(value) || value > 1_000_000) return null;
  return value;
}

/** Replace pure numeric powers like 4^2 → 16 (not x^2). */
function simplifyNumericPowers(text) {
  return text.replace(/(?<![a-zA-Z\\}])(\d+)\^(\d+)/g, (match, baseStr, expStr) => {
    const value = evalNumericPower(parseInt(baseStr, 10), parseInt(expStr, 10));
    return value == null ? match : String(value);
  });
}

/** Reduce \\frac/\\dfrac{a}{b} when both are integers. */
function simplifyFractions(text) {
  return text.replace(/\\(d)?frac\{(-?\d+)\}\{(-?\d+)\}/g, (match, dFlag, numStr, denStr) => {
    const num = parseInt(numStr, 10);
    const den = parseInt(denStr, 10);
    if (!Number.isFinite(num) || !Number.isFinite(den) || den === 0) return match;

    if (num === 0) return "0";
    if (num === den) return den < 0 ? "-1" : "1";

    const g = gcd(num, den);
    const n = num / g;
    const d = den / g;

    if (d === 1) return String(n);
    if (d === -1) return String(-n);

    const cmd = dFlag ? "\\dfrac" : "\\frac";
    return `${cmd}{${n}}{${d}}`;
  });
}

/** Simplify LaTeX strings: evaluate small numeric powers and reduce fractions. */
export function simplifyLatexText(text = "") {
  if (!text) return text;
  let out = String(text);
  out = simplifyNumericPowers(out);
  out = simplifyFractions(out);
  return out;
}

export { gcd, evalNumericPower };
