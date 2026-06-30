const fs = require('fs');
['hardCal1Templates.js','hardCal2Templates.js','problemTemplates.js'].forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let count = 0;

  // Process line-by-line to avoid multiline matching issues
  const lines = content.split('\n');
  const fixed = lines.map(line => {
    // Replace double-quoted strings on this line that contain ${...}
    // Using non-greedy match, no newlines inside
    return line.replace(/"([^"\n]*\$\{[^"\n]*)"/g, (m, str) => {
      count++;
      return '`' + str + '`';
    });
  });

  const result = fixed.join('\n');
  fs.writeFileSync(f, result);
  console.log(f, 'fixed', count, 'occurrences');
});
