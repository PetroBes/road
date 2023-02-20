// LIFO
// push: Input a new element.
// pop : Remove the top element, return the removed element.
// peek : Return the top element.
// length : Return the number of element(s) in the stack.


class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const elem = this.storage[this.count];
    delete this.storage[this.count];
    return elem;
  }

  peek() {
    return this.storage[this.count - 1];
  }

  length() {
    return this.count;
  }
}

const stack = new Stack();
console.log('pop: ', stack.pop()); 
console.log('peek: ', stack.peek());
console.log('length: ', stack.length());
stack.push('lala')
stack.push('lala2')
stack.push('lala3')
console.log(stack.storage);
console.log(stack.count);

const el = stack.pop()
console.log('el: ', el)
console.log(stack.storage);
console.log(stack.count);
console.log(`peek: ${stack.peek()}`);
console.log('length: ', stack.length());