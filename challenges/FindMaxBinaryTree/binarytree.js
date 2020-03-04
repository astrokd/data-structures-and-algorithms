// Binary Tree 

//Queue class
class Queue {
  constructor() {
      this.front = null;
      this.storage = [];
  }

  //enqueue
  enqueue(value) {
      if (this.front === null) {this.front = value}
      return this.storage.push(value)
  }

  //dequeue
  dequeue() {
      if (this.front === null) {
          return null;
      } else {
          if (this.storage[1] === undefined) {
              this.front = null;
          } else {
              this.front = this.storage[1];
          }
          return this.storage.shift();
      }
  }

  //peek
  peek() {
      return this.front;
  }

}
// Node Class of tree
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

//Create a BinaryTree class
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  //findMaxVal as breadthFirst
  findMaximumValue() {
    if (this.root === null) return null
    // place root value into output
    let maxNumber = this.root.value
    // make queue to traverse tree
    let breadth = new Queue()
    // root node into queue
    breadth.enqueue(this.root)
    // loop over queue while not empty
    while (breadth.peek()) {
      // place front of queue into temp node
      let front = breadth.dequeue()
      // compare value to current output value, replace if greater
      if (front.value > maxNumber) maxNumber = front.value
      // if there is a left place in queue
      if (front.left) breadth.enqueue(front.left)
      // if there is a right place in queue
      if (front.right) breadth.enqueue(front.right)
    }
    // output result
    return maxNumber
  }

}

module.exports = {
  Node,
  BinaryTree
}