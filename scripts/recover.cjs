const fs = require('fs');

['hardCal1Templates.js', 'hardCal2Templates.js', 'problemTemplates.js'].forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let fixes = 0;

  // Step 1: Fix subtopic lines that end with backtick instead of closing quote
  // Pattern: subtopic: "VALUE`, -> subtopic: "VALUE",
  content = content.replace(/(subtopic:\s*"[^"]*)`(\s*,)/g, (m, before, after) => {
    fixes++;
    return before + '"' + after;
  });

  // Step 2: Fix corrupted sec/bul/para calls where opening " was replaced by `
  // These look like: sec(`TITLE", "SUBTITLE`) -> sec("TITLE", "SUBTITLE")
  // or bul(`CONTENT", "MORE`) -> bul("CONTENT", "MORE")
  // Pattern: (sec|bul|para)(`[^`$\\]...) where arg starts with ` but has " inside before closing `
  // We detect: func(`TEXT"...) where TEXT starts with non-template char (Thai, letter)
  // and replace the ` with "
  content = content.replace(/(sec|bul|para)\(`([^`]*)"([^`]*)`\)/g, (m, fn, before, after) => {
    // Only fix if the content between backticks has a " (indicating corrupted two-arg form)
    // and the content before the " doesn't contain ${ (which would indicate a real template literal)
    if (!before.includes('${')) {
      fixes++;
      return `${fn}("${before}", "${after}")`;
    }
    return m; // leave legitimate template literals alone
  });

  fs.writeFileSync(f, content);
  console.log(f, '- fixed', fixes, 'corruptions');
});
