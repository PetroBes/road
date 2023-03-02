// generator function
function* genFunc() {
  yield '*',
  console.log('first');
  yield 'lala'
  console.log('second');
  return 'done';
};

const genObj = genFunc();
console.log('la', genObj);
const iter1 = genObj.next();
console.log('iter1', iter1);
const iter2 = genObj.next();
console.log('iter2', iter2)
const iter3 = genObj.next();
console.log('iter3', iter3);

const str = 'I love js'
const newVal = [...str].map(el => el);
console.log('newVal', newVal);


const objToIter = {
  name: 'Angie',
  age: 25,

};
// create iterable object
objToIter[Symbol.iterator] = function* () {
  yield* Object.keys(this);// yield* removes nesting array
  yield* Object.values(this);
};
console.log('iterable obj1: ', [...objToIter]);
console.log('iterable obj2: ', [...objToIter]);
console.log();


var querystring = require('querystring');
var q = querystring.parse('year=2017&month=february');
console.log('q', q);
