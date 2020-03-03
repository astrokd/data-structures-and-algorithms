// Node
class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

// traverse tree
let traverse = (node) => {
  if (node === null) {
    return null
  }

  if (node.value%15 === 0) {
    node.value = 'FizzBuzz'
  } else if (node.value%3 === 0) {
    node.value = 'Fizz'
  } else if (node.value%5 === 0) {
    node.value = 'Buzz'
  } else {
    node.value = node.value.toString()
  }

  if(node.left) {
    traverse(node.left)
  }
  if(node.right) {
    traverse(node.right)
  }
}

//Binary Tree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  fizzBuzzTree() {
    // make new tree
    let newTree = new BinaryTree
    newTree.root = this.root

    //call traverse
    traverse(newTree.root)
    return newTree
  }

}

module.exports = {
  Node,
  BinaryTree
}