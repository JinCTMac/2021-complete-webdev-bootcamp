// LESSON 1 - BUILT-IN NODE PACKAGES

// imported from nodejs.org website
// import * as fs from 'fs/promises';
// import * as fs from 'fs';

// const fs = require('fs');

// taken from stackOverflow - https://stackoverflow.com/questions/11293857/fastest-way-to-copy-a-file-in-node-js
// fs.copyFile('file1.txt', 'file2.txt', (err) => {
//   if (err) throw err;
//   console.log('source.txt was copied to destination.txt');
// });

// INFO - why package.json is needed and what it does
// https://heynode.com/tutorial/what-packagejson/#:~:text=Recap-,The%20package.,entry%20point%20to%20our%20package.

// LESSON 2 - EXTERNAL NODE PACKAGES FROM NPM

// https://www.npmjs.com/package/superheroes
const superheroes = require('superheroes');

// package method
const mySuperhero = superheroes.random();

console.log(mySuperhero);
