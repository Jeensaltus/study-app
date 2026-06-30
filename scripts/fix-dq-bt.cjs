/**
 * Fix all remaining "VALUE` patterns where a double-quoted string
 * is improperly closed with a backtick.
 * Pattern: "SIMPLE_TEXT` (no ${} or other template features)
 * -> "SIMPLE_TEXT"
 */
const fs = require('fs');
const path = require('path');

const files = ['hardCal1Templates.js', 'hardCal2Templates.js', 'problemTemplates.js'];
const dir = path.join(__dirname, 'templates');

files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  let totalFixes = 0;

  const lines = content.split('\n');
  const fixedLines = lines.map((line, i) => {
    let fixed = line;
    
    // Pattern: "CONTENT` where CONTENT has no ${} or other template stuff
    // and the backtick is followed by a space, colon, semicolon, or end of expression
    // This handles: ? "1` : `TL` -> ? "1" : `TL`
    fixed = fixed.replace(/"([^"`\n${}]*)`(\s*:|\s*;|\s*\)|\s*,)/g, (m, inner, after) => {
      totalFixes++;
      return `"${inner}"${after}`;
    });
    
    return fixed;
  });

  fs.writeFileSync(fp, fixedLines.join('\n'));
  console.log(`${f} - total fixes: ${totalFixes}`);
});
