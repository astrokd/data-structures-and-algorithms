// Node
class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

// Fizz Buzz
let fizzBuzz = (value) => {
  if (value%15 === 0) {
    value = 'FizzBuzz'
  } else if (value%3 === 0) {
    value = 'Fizz'
  } else if (value%5 === 0) {
    value = 'Buzz'
  } else {
    value = value.toString()
  }
  return value
}

// traverse tree
let traverse = (node) => {
  if (node === null) return null

  let newValue = fizzBuzz(node.value)

  let newNode = new Node(newValue)
  newNode.left = traverse(node.left)
  newNode.right = traverse(node.right)

  return newNode
}

//Binary Tree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  //Fizz Buzz method
  fizzBuzzTree() {
    let newTree = new BinaryTree

    //call traverse
    newTree.root = traverse(this.root)
    return newTree
  }

}

module.exports = {
  Node,
  BinaryTree
}