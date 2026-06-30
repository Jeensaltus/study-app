/**
 * Fix remaining ternary corruptions:
 * 1. ? EXPR : `..."` -> ? EXPR : "..."  (false-branch: backtick open, quote close)
 * 2. Any other ternary patterns with backtick in string position inside ${}
 */
const fs = require('fs');
const path = require('path');

const files = ['hardCal1Templates.js', 'hardCal2Templates.js', 'problemTemplates.js'];
const dir = path.join(__dirname, 'templates');

files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  let totalFixes = 0;

  // Pattern: : `CONTENT"  (ternary false-branch: backtick open, quote close)
  // where CONTENT has no backtick, no ${
  content = content.replace(/:\s*`([^`${}\n]*)"(\s*[}\]])/g, (m, inner, after) => {
    totalFixes++;
    return `: "${inner}"${after}`;
  });

  // Pattern: :\s*`..."`  (specifically "...")
  content = content.replace(/:\s*`(\.\.\.)"(\s*\})/g, (m, inner, after) => {
    totalFixes++;
    return `: "${inner}"${after}`;
  });

  fs.writeFileSync(fp, content);
  console.log(`${f} - total fixes: ${totalFixes}`);
});
