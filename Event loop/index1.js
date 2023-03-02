const fs = require('fs');
let iteration = 1;

setInterval(() => {
  iteration++;
  console.log(`ITERATION = ${iteration} Timers - setInterval`) // 4, 7, 8, 13 // 12
});

process.on('exit', () => {
  console.log(`ITERATION = ${iteration} Close callbacks =4=`); // 7* // 15
});

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log(`ITERATION = ${iteration} Timers setTimeout =4=`); // 12* // 14
    process.exit(1);
  });
  setImmediate(() => console.log(`ITERATION = ${iteration} Timers - setImmediate =4=`)); // 12

  console.log(`ITERATION = ${iteration} Pool =3=`); // 9
  Promise.resolve().then(() => console.log(`ITERATION = ${iteration} Promise resolve =3=`)); // 11
  process.nextTick(() => console.log(`ITERATION = ${iteration} Next tick =3=`)); // 10
});

setTimeout(() => console.log(`ITERATION = ${iteration} Timers - setTimeout =2=`)); // 5
setImmediate(() => console.log(`ITERATION = ${iteration} Check - setImmediate =2=`)); // 6

Promise.resolve()
  .then(() => console.log(`ITERATION = ${iteration} Promise resolve =1=`)); // 3
process.nextTick(() => console.log(`ITERATION = ${iteration} Next tick =1=`)); // 2

console.log(`ITERATION = ${iteration} Poll =1=`); // 1