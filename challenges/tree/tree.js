// Binary Tree and BST Implementation

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
    // this.preOrderOutput = [];
    // this.inOrderOutput = [];
    // this.postOrderOutput = [];
  }

  //preOrder
  preOrder() {
    let stackArr = [];

    let traverse = (node) =>  {
      if (node === null) {
        return null;
      }
      stackArr.push(node)
      
      if(node.left) {
        traverse(node.left)
      }
      if(node.right) {
        traverse(node.right)
      }
    }
    return stackArr;

  }

  //inOrder
  inOrder(node) {

  }

  //postOrder
  postOrder(node) {

  }
}

module.exports = {
  Node,
  BinaryTree
}