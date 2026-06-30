const fs = require('fs');
const path = require('path');

const files = ['hardCal1Templates.js', 'hardCal2Templates.js', 'problemTemplates.js'];
const dir = path.join(__dirname, 'templates');

files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  
  // Fix: any ""), → "), (extra quote before closing paren then comma or newline)
  const before = content;
  content = content.replace(/""\)/g, '")');
  
  const count = (before.split('"")').length - 1);
  if (count > 0) console.log(`${f}: fixed ${count} occurrences of "")`);;
  
  fs.writeFileSync(fp, content);
});
