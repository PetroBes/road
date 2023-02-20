// size: Return the number of node(s).
// head: Return the element of the head.
// add: Add another node in the tail.
// remove: Remove a certain node.
// indexOf: Return the index of a node.
// elementAt: Return the node of an index.
// addAt: Insert a node at a specific index.
// removeAt: Delete a node at a specific index.

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  add(elem) {
    const node = new Node(elem);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    this.length++;
  }

  remove(elem) {
    let prevNode = null;
    let currentNode = this.head;

    if (currentNode.element === elem) {
      this.head = currentNode.next;
    } else {
      while (currentNode.element !== elem) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      prevNode.next = currentNode.next;
    }

    this.length--;
  }

  indexOf(elem) {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === elem) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  elementAt(index) {
    if (isNaN(index) || !this.length || index >= this.length) {
      return false;
    }

    let currentNode = this.head;
    let count = 0;
    
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  addAt(index, elem) {
    if (isNaN(index) || !this.length || this.length < index) {
      return false;
    }

    let currentNode = this.head;
    let prevNode = null;
    let count = 0;

    const node = new Node(elem);
    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while(count < index) {
        count++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      prevNode.next = node;
    }
    this.length++;
  }

  removeAt(index) {
    let prevNode = null;
    let currentNode = this.head;
    let count = 0;

    if (isNaN(index) || !this.length || this.length <= index || index < 0) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      while (count < index) {
        count++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      prevNode.next = currentNode.next;
    }

    this.length--;
  }

  isEmpty() {
    return !!this.length;
  }
}

const list = new LinkedList();
list.add('first');
list.add('second');
list.add('third');
list.add('fourth');
list.add('fives');
console.log('list', list);

console.log('index of second element', list.indexOf('secondd'));
list.remove('third');
console.log('list', list);
console.log('index of second element', list.indexOf('fourth'));

console.log('elementAt: ', list.elementAt('asd'));
console.log('elementAt: ', list.elementAt(1));

list.addAt(0, 'new first element');
console.log('list', list);
list.addAt(2, 'new second element');
console.log('list', list);

list.removeAt(3)
console.log('list', list);


console.log('')