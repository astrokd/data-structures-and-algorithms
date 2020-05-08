// Sum of numbers in a binary tree

/*
 * INPUT:  1       OUTPUT:   8
 *        / \
 *       4   3
 *
 * Algorithm:
 * declare function that accepts a tree
 * define a variable
 * loop through tree
 * add tree node values to variable
 * return variable
 * 
 * BigO; time: O(n)  space: O(n)
 */

const { Node, BinaryTree } = require('../dataStructures/trees/tree')

let sumTree = (tree) => {
  let sumResult = 0

  let sumHelper = (node) => {
    if (!node) return null
    sumResult = sumResult + node.value
    sumHelper(node.left)
    sumHelper(node.right)
  }
  sumHelper(tree.root)
  return sumResult
}

const root1 = new Node(1)
const left1 = new Node(4)
const right1 = new Node(3)
root1.left = left1
root1.right = right1
const tree1 = new BinaryTree()
tree1.root = root1

console.log('sum Tree 1',sumTree(tree1)) // 8

const root2 = new Node(8)

const left2a = new Node(1)
const left2bl = new Node(4)
const left2br = new Node(7)
const left2b = new Node(6,left2bl,left2br)
const left2 = new Node(3,left2a,left2b)

const right2rl = new Node(13)
const right2r = new Node(14,right2rl,null)
const right2 = new Node(10,null,right2r)
root2.left = left2
root2.right = right2
const tree2 = new BinaryTree()
tree2.root = root2

console.log('sum Tree 2',sumTree(tree2)) // 66