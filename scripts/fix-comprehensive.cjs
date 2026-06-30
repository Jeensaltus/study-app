/**
 * Comprehensive fix for ALL remaining delimiter mismatches in template files.
 * This handles the pattern: sec("TEXT`) where dq opens but backtick closes.
 * Works line-by-line to avoid multi-line matches.
 */
const fs = require('fs');
const path = require('path');

const files = ['hardCal1Templates.js', 'hardCal2Templates.js', 'problemTemplates.js'];
const dir = path.join(__dirname, 'templates');

files.forEach(f => {
  const fp = path.join(dir, f);
  const lines = fs.readFileSync(fp, 'utf8').split('\n');
  let totalFixes = 0;

  const fixedLines = lines.map((line, i) => {
    let fixed = line;

    // Pattern I: sec/bul/para("CONTENT`) -> sec("CONTENT")
    // Double-quote opens function arg, backtick closes it
    // We replace `) with ") only when preceded by a string that started with "
    // Use a regex that allows ANY chars except newline in the content
    // (including $, (, ), etc - only exclude " which would close the string)
    fixed = fixed.replace(/(sec|bul|para)\("([^"\n]*)(`\s*)\)/g, (m, fn, inner, bt) => {
      // Only fix if backtick isn't followed by { (template expression)
      if (bt.includes('{')) return m;
      totalFixes++;
      return `${fn}("${inner}")`;
    });

    // Pattern G variant: sec("CONTENT`, `MORE`) -> sec("CONTENT", `MORE`)
    // Double-quote opens first arg, backtick closes it, second arg is template literal
    fixed = fixed.replace(/(sec|bul|para)\("([^"\n]*)(`\s*),\s*(`[^`]*`)\)/g, (m, fn, a, bt, b) => {
      totalFixes++;
      return `${fn}("${a}", ${b})`;
    });

    if (fixed !== line) {
      // console.log(`Line ${i+1}: ${line.trim()} -> ${fixed.trim()}`);
    }
    return fixed;
  });

  fs.writeFileSync(fp, fixedLines.join('\n'));
  console.log(`${f} - total fixes: ${totalFixes}`);
});
