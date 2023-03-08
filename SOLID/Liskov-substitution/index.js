// If 'S' is a subtype of 'T', then objects
// of type 'T' may be raplaced with objects of type 'S'

// objects of a superclass should be replaceable with
// objects of its subclasses without breaking the application

class A {
  constructor(name){
    this.name = name;
  }
  funcA() {
    console.log(this)
  }
}

const obj = { name: 'And' };
const a = new A('Pet');
const bound = a.funcA.bind(obj);
// bound();
// a.funcA.call(obj, 'Floa');

const numbers = {
  array: [3, 5, 10],
  getNumbers() {
    return console.log(this.array);
  }
};

const obj1 = {
  array: [1,3,2]
}

// Create a bound function
const boundGetNumbers = numbers.getNumbers.bind(obj1);
boundGetNumbers(); // => [3, 5, 10]
// Extract method from object
const simpleGetNumbers = numbers.getNumbers;
simpleGetNumbers(); // => undefined or throws an error in strict mode