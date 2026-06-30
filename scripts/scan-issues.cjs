/**
 * Scan template files and report ALL remaining syntax issues at once,
 * by examining the AST/parse attempt.
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const files = ['hardCal1Templates.js', 'hardCal2Templates.js', 'problemTemplates.js'];
const dir = path.join(__dirname, 'templates');

// Also run targeted searches for known bad patterns
files.forEach(f => {
  const fp = path.join(dir, f);
  const content = fs.readFileSync(fp, 'utf8');
  const lines = content.split('\n');
  
  console.log(`\n=== ${f} ===`);
  
  // Pattern: backtick-opened template literal closed with " (unclosed TL)
  // Lines where we have `...content..." (backtick then content then double-quote then comma)
  const issues = [];
  lines.forEach((line, i) => {
    const lineNum = i + 1;
    
    // Check for unclosed template literals closed with "
    // Pattern: `CONTENT" at end of line (with or without comma)
    if (/`[^`${]*",\s*$/.test(line)) {
      issues.push({ line: lineNum, type: 'TL-closed-with-dq', text: line.trim() });
    }
    
    // Check for sec/bul/para with unclosed double-quote (contains ${ but no closing ")
    // Pattern: sec("CONTENT with ${ but line ends without closing "
    if (/(sec|bul|para)\("[^"]*\$\{[^"]*$/.test(line)) {
      issues.push({ line: lineNum, type: 'DQ-unclosed-with-TL', text: line.trim() });
    }
    
    // Check for unquoted sec/bul/para content (no opening quote at all)
    // Pattern: sec/bul/para($CONTENT$) where $ starts the content directly
    if (/(sec|bul|para)\(\$[^'"`]/.test(line)) {
      issues.push({ line: lineNum, type: 'UNQUOTED', text: line.trim() });
    }
    
    // Check for sec missing opening quote for first arg
    // Pattern: sec(TEXT" where TEXT doesn't start with quote
    if (/sec\([^'"` \t].*",/.test(line) && !/sec\("/.test(line) && !/sec\(`/.test(line)) {
      issues.push({ line: lineNum, type: 'MISSING-OPEN-QUOTE', text: line.trim() });
    }
  });
  
  if (issues.length === 0) {
    console.log('  No patterns detected.');
  } else {
    issues.forEach(({ line, type, text }) => {
      console.log(`  Line ${line} [${type}]: ${text.substring(0, 100)}`);
    });
  }
});
