const fs = require('fs');
const path = require('path');

const fp = path.join(__dirname, 'templates', 'hardCal1Templates.js');
let content = fs.readFileSync(fp, 'utf8');

// Fix corrupted ternary: `เครื่องหมายต่างกัน ✓" -> "เครื่องหมายต่างกัน ✓"
// The backtick that opens must be replaced with a double-quote
const bad = '`\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19 \u2713"';
const good = '"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19 \u2713"';

const count = content.split(bad).length - 1;
content = content.split(bad).join(good);
fs.writeFileSync(fp, content);
console.log('Fixed', count, 'occurrences of ternary corruption');
