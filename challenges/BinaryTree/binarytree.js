// Binary Tree 
const Queue = require('./stacks-and-queues').Queue

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
  constructor() {
    this.root = null;
  }

  //breadthFirst
  breadthFirst() {
    let outputArr = [];

    let breadth = new Queue()
    breadth.enqueue(this.root)

    while (breadth.peek()) {
      let front = breadth.dequeue()
      outputArr.push(front.value)

      if (front.left) breadth.enqueue(front.left)
      if (front.right) breadth.enqueue(front.right)
    }
    
    return outputArr.length > 0 ? outputArr : null;
  }

}

module.exports = {
  Node,
  BinaryTree
}