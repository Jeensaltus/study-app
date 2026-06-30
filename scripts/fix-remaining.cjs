const fs = require('fs');
const path = require('path');

const files = ['hardCal1Templates.js', 'hardCal2Templates.js', 'problemTemplates.js'];
const dir = path.join(__dirname, 'templates');

files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  let totalFixes = 0;

  const fix = (label, regex, fn) => {
    let cnt = 0;
    content = content.replace(regex, (...args) => { cnt++; return fn(...args); });
    if (cnt > 0) { console.log(`  ${label}: ${cnt}`); totalFixes += cnt; }
  };

  // Pattern: sec(`PLAINTEXT", `TEMPLATE_LITERAL`)
  // first arg: backtick opener, quote closer (no ${} in first arg)
  // -> sec("PLAINTEXT", `TEMPLATE_LITERAL`)
  fix('G-bt-first-arg-two-param',
    /(sec|bul|para)\(`([^`"${}\n]+)",\s*(`[^`]*`)\)/g,
    (m, fn, a, b) => `${fn}("${a}", ${b})`
  );

  // Pattern: sec(`PLAINTEXT") - single arg, backtick opener, quote closer
  fix('H-bt-single-arg-quote-close',
    /(sec|bul|para)\(`([^`${}\n]+)"\)/g,
    (m, fn, inner) => {
      const clean = inner.endsWith('"') ? inner.slice(0, -1) : inner;
      return `${fn}("${clean}")`;
    }
  );

  // Pattern: sec("PLAINTEXT`) - double-quote opener, backtick closer (no template vars)
  // -> sec("PLAINTEXT")
  fix('I-dq-open-bt-close-func-arg',
    /(sec|bul|para)\("([^"${}\n]*)`\)/g,
    (m, fn, inner) => `${fn}("${inner}")`
  );

  // Also for two-arg: sec("PLAIN1`, `CONTENT2`) -> sec("PLAIN1", `CONTENT2`)
  fix('I2-dq-open-bt-close-two-arg',
    /(sec|bul|para)\("([^"${}\n]*)`\s*,\s*(`[^`]*`)\)/g,
    (m, fn, a, b) => `${fn}("${a}", ${b})`
  );

  // Pattern: extra "" at end: sec("A", "B"") -> sec("A", "B")
  fix('J-extra-trailing-quote',
    /""\)/g,
    () => '")'
  );

  fs.writeFileSync(fp, content);
  console.log(`${f} - total fixes: ${totalFixes}`);
});
