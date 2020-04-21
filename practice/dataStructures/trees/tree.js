// Binary Tree and BST Implementation

// Node Class of tree
class Node {
  constructor (value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

// Create a BinaryTree class
class BinaryTree {
  constructor () {
    this.root = null
    // this.preOrderOutput = [];
    // this.inOrderOutput = [];
    // this.postOrderOutput = [];
  }

  // preOrder
  preOrder () {
    const stackArr = []

    let traverse = (node) => {
      if (node === null) {
        return null
      }
      // Add node value to stack
      stackArr.push(node.value)

      if (node.left) {
        traverse(node.left)
      }
      if (node.right) {
        traverse(node.right)
      }
    }

    traverse(this.root)
    return stackArr.length > 0 ? stackArr : null
  }

  // inOrder
  inOrder () {
    const stackArr = []

    let traverse = (node) => {
      if (node === null) {
        return null
      }
      if (node.left) {
        traverse(node.left)
      }
      // Add node value to stack
      stackArr.push(node.value)

      if (node.right) {
        traverse(node.right)
      }
    }

    traverse(this.root)
    return stackArr.length > 0 ? stackArr : null
  }

  // postOrder
  postOrder () {
    const stackArr = []

    let traverse = (node) => {
      if (node === null) {
        return null
      }
      if (node.left) {
        traverse(node.left)
      }
      if (node.right) {
        traverse(node.right)
      }
      // Add node value to stack
      stackArr.push(node.value)
    }

    traverse(this.root)
    return stackArr.length > 0 ? stackArr : null
  }

  // breadthFirst
  breadthFirst () {
    const queueArr = []
    queueArr.push(this.root.value)

    return queueArr.length > 0 ? queueArr : null
  }
}

module.exports = {
  Node,
  BinaryTree
}
