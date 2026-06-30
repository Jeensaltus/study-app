const fs = require('fs');

['hardCal1Templates.js', 'hardCal2Templates.js', 'problemTemplates.js'].forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let totalFixes = 0;

  const fix = (label, regex, fn) => {
    let cnt = 0;
    content = content.replace(regex, (...args) => { cnt++; return fn(...args); });
    if (cnt > 0) { console.log(`  ${label}: ${cnt}`); totalFixes += cnt; }
  };

  // A: property: `VALUE",  ->  property: "VALUE",  (backtick opener, quote closer)
  fix('A-bt-open-dq-close',
    /^(\s+\w+:\s*)`([^`\n]+")\s*,\s*$/gm,
    (m, prop, val) => val.endsWith('"') ? prop + '"' + val.slice(0,-1) + '",' : m
  );

  // B: property: "VALUE`,  ->  property: "VALUE",  (quote opener, backtick closer)
  fix('B-dq-open-bt-close',
    /^(\s+\w+:\s*"[^"\n]*)`(\s*,\s*)$/gm,
    (m, before, after) => before + '"' + after
  );

  // C: problem/answer: `CONTENT",  ->  problem/answer: `CONTENT`,
  fix('C-problem-tl-bad-close',
    /^(\s+(?:problem|answer):\s*`[^`\n]+)",(\s*)$/gm,
    (m, before, after) => before + '`,' + after
  );

  // D1: sec("A", ", "B")  ->  sec("A", "B")
  fix('D1-sec-extra-comma',
    /(sec|bul|para)\("([^"]*)",\s*",\s*"([^"]*)"\)/g,
    (m, fn, a, b) => `${fn}("${a}", "${b}")`
  );

  // D2: sec(", "B")  ->  sec("B")  (empty first arg from bad recovery)
  fix('D2-sec-empty-first',
    /(sec|bul|para)\(",\s*"([^"]*)"\)/g,
    (m, fn, b) => `${fn}("${b}")`
  );

  // E: sec(`CONTENT")  ->  sec("CONTENT")  (backtick opener, content ends with ")
  // Strip trailing " from inner (it was the original closing ") before re-wrapping
  fix('E-bt-open-func-arg',
    /(sec|bul|para)\(`([^`]+)\)/g,
    (m, fn, inner) => inner.endsWith('"') ? `${fn}("${inner.slice(0,-1)}")` : m
  );

  // F: special ternary in hardCal1
  if (f === 'hardCal1Templates.js') {
    const bad = 'bul(`$du=${n-1}x^{${n-2}}dx$ ${n===2?`(=$dx$)":"`}`),';
    const good = 'bul(`$du=${n-1}x^{${n-2}}dx$ ${n===2?"(=$dx$)":""}$`),';
    if (content.includes(bad)) { content = content.replace(bad, good); totalFixes++; console.log('  F-ternary: 1'); }
  }

  fs.writeFileSync(f, content);
  console.log(f, '- total fixes:', totalFixes);
});
