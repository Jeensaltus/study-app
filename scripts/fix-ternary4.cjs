/**
 * Fix ternary corruptions where the true-branch uses backtick opener 
 * but double-quote closer, even when content has $ and \\ characters.
 * Uses a more permissive pattern.
 */
const fs = require('fs');
const path = require('path');

const files = ['hardCal1Templates.js', 'hardCal2Templates.js', 'problemTemplates.js'];
const dir = path.join(__dirname, 'templates');

files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  let totalFixes = 0;

  // Pattern: ?`TRUE_BRANCH":"FALSE_BRANCH"
  // where TRUE_BRANCH and FALSE_BRANCH can contain any chars except } and backtick
  // and the whole thing is inside ${...}
  // Replace with: ?"TRUE_BRANCH":"FALSE_BRANCH"
  content = content.replace(/\?`([^`}]+)":"([^"}]*)"(\})/g, (m, a, b, end) => {
    totalFixes++;
    return `?"${a}":"${b}"${end}`;
  });

  // Also handle: ?`TRUE_BRANCH":`FALSE_BRANCH` (true with bt/dq, false with bt)
  content = content.replace(/\?`([^`}]+)"`([^`}]*)``(\})/g, (m, a, b, end) => {
    totalFixes++;
    return `?"${a}":"${b}"${end}`;
  });

  fs.writeFileSync(fp, content);
  console.log(`${f} - total fixes: ${totalFixes}`);
});
