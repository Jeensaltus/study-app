/**
 * The template files have a DUPLICATED export: lines 5-860 are a corrupted first copy,
 * and lines 861-end are the good second copy.
 * This script removes the corrupted first section and keeps only the good second copy.
 */
const fs = require('fs');
const path = require('path');

function deduplicateFile(fp, exportName) {
  const content = fs.readFileSync(fp, 'utf8');
  const lines = content.split('\n');
  
  // Find all occurrences of the export declaration
  const exportDecl = `export const ${exportName} = [`;
  const indices = [];
  lines.forEach((line, i) => {
    if (line.trim() === exportDecl) indices.push(i);
  });
  
  console.log(`${path.basename(fp)}: found "${exportDecl}" at lines ${indices.map(i => i+1).join(', ')}`);
  
  if (indices.length <= 1) {
    console.log(`  No deduplication needed.`);
    return;
  }
  
  // Keep: import line (line 1) + second occurrence onwards
  const importLine = lines[0]; // "import { ... }"
  const secondCopyStart = indices[1]; // index of second "export const..."
  
  // Find the comment line just before second copy (usually 2 lines before)
  let startFrom = secondCopyStart;
  // Check if there's a comment 1-2 lines before
  if (secondCopyStart >= 2 && lines[secondCopyStart - 2].startsWith('//')) {
    startFrom = secondCopyStart - 2;
  } else if (secondCopyStart >= 1 && lines[secondCopyStart - 1].startsWith('//')) {
    startFrom = secondCopyStart - 1;
  }
  
  const newLines = [
    importLine,
    '',
    ...lines.slice(startFrom)
  ];
  
  fs.writeFileSync(fp, newLines.join('\n'));
  console.log(`  Removed corrupted section. New file: ${newLines.length} lines (was ${lines.length})`);
}

deduplicateFile(
  path.join(__dirname, 'templates', 'hardCal1Templates.js'),
  'CAL1_HARD_TEMPLATES'
);
deduplicateFile(
  path.join(__dirname, 'templates', 'hardCal2Templates.js'),
  'CAL2_HARD_TEMPLATES'
);
deduplicateFile(
  path.join(__dirname, 'templates', 'problemTemplates.js'),
  'PROBLEM_TEMPLATES'
);
