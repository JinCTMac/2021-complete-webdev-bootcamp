// imported from nodejs.org website
// import * as fs from 'fs/promises';
// import * as fs from 'fs';

const fs = require('fs');

// taken from stackOverflow - https://stackoverflow.com/questions/11293857/fastest-way-to-copy-a-file-in-node-js
fs.copyFile('file1.txt', 'file2.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});

// fs.copyFileSync("file1.text", "file2.txt");
