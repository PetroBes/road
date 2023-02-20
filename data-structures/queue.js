// FIFO

// enqueue: Enter queue, add an element at the end.
// dequeue: Leave queue, remove the front element and return it.
// front: Get the first element.
// isEmpty: Determine whether the queue is empty.
// size: Get the number of element(s) in queue.

class Queue {
  constructor() {
    this.collection = [];
  }

  enqueue(value) {
    this.collection.push(value);
  }

  dequeue() {
    return this.shiftFunc();
  }

  front() {
    return this.collection[0];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  size() {
    return this.collection.length;
  }

  shiftFunc() {
    if (this.collection.length === 0) {
      return undefined;
    }

    const firstElem = this.collection[0];
    if (this.collection.length === 1) {
      this.collection = [];
      return firstElem;
    }
    const newCollection = [];
    for (let i = 0; i < this.collection.length-1; i++) {
      newCollection[i] = this.collection[i + 1];
    }
    this.collection = newCollection;
    return firstElem;
  }
}

const queue = new Queue();

// returns undefined but someVal is entered to the collection
console.log('enqueue: ', queue.enqueue('someVal'));
console.log('front: ', queue.front());
console.log('dequeue: ', queue.dequeue());
console.log('collection: ', queue.collection);
console.log('isEmpty: ', queue.isEmpty());
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
console.log('collection: ', queue.collection);
console.log('size: ', queue.size());

console.log('enqueue: ', queue.enqueue('new value'));
console.log('collection: ', queue.collection);
console.log('dequeue: ', queue.dequeue());
console.log('collection: ', queue.collection);
console.log('front: ', queue.front());
console.log('isEmpty: ', queue.isEmpty());