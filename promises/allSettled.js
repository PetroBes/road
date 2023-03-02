let a,b,c;

Promise.all([
  Promise.resolve(a = 33),
  new Promise((resolve) => setTimeout(() => resolve(b = 66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));
console.log(a);
console.log(b);
console.log();

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: an error }
// ]

