// Node
class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
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

    // traverse tree
    let traverse = (node) => {
      if (node === null) {
        return null
      }

      if(node.left) {
        traverse(node.left)
      }
      if(node.right) {
        traverse(node.right)
      }
    }
    traverse(this.root)

  }

}



module.exports = {
  Node,
  BinaryTree
}