const fs = require('fs');

const start = process.hrtime();

console.log('START'); // 1

setTimeout(() => console.log('setTimeout 1'), 0); // 6

setImmediate(() => console.log('setImmediate')); // 11 // 8

fs.readFile(__filename, () => {
  setTimeout(() => console.log('readFile setTimeout'), 0); // 9 // 11
  setImmediate(() => console.log('readFile setImmediate')); // 10 // 10
  process.nextTick(() => console.log('readFile Next Tick')); // 8 // 9
  console.log('3: ', process.hrtime(start));
});

Promise.resolve()
  .then(() => {
    console.log('Promise'); // 4
    process.nextTick(() => console.log('Promise Next Tick')); // 5
  });

console.log('1: ', process.hrtime(start)); 

process.nextTick(() => console.log('Next Tick')); // 3

setTimeout(() => console.log('setTimeout 2'), 0); // 7

console.log('END'); // 2

console.log('2: ', process.hrtime(start));