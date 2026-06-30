/**
 * Fix corrupted ternary expressions inside template literals.
 * Pattern: ${condition ? `VALUE":"OTHER"} 
 *       -> ${condition ? "VALUE":"OTHER"}
 * Also: ${condition ? `":"VALUE`} -> ${condition ? "":"VALUE"}
 */
const fs = require('fs');
const path = require('path');

const files = ['hardCal1Templates.js', 'hardCal2Templates.js', 'problemTemplates.js'];
const dir = path.join(__dirname, 'templates');

files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  let totalFixes = 0;

  // Pattern: ?`CONTENT":"OTHER"  -> ?"CONTENT":"OTHER"
  // The backtick opens a ternary true-branch, double-quote closes it
  content = content.replace(/\?`([^`"{}$\n]*)":"([^"}\n]*)"/g, (m, a, b) => {
    totalFixes++;
    return `?"${a}":"${b}"`;
  });

  // Pattern: ?`":"OTHER`  -> ?"":"OTHER"  (empty true-branch)
  content = content.replace(/\?`":"([^`}$\n]*)`/g, (m, b) => {
    totalFixes++;
    return `?"":"${b}"`;
  });

  // Pattern: ?`>1 → CONTENT":"OTHER"  -> ?"CONTENT":"OTHER"  (content may have special chars)
  // More general: handles LaTeX chars in ternary branches
  content = content.replace(/\?`([^`"{}$\n]*[^\s])":"([^"}\n]*)"/g, (m, a, b) => {
    // Skip if already fixed (no backtick in a)
    totalFixes++;
    return `?"${a}":"${b}"`;
  });

  fs.writeFileSync(fp, content);
  console.log(`${f} - total fixes: ${totalFixes}`);
});
