/* Problem: write a function that tests whether a tree is a Binary Search Tree
 *
 * Input: tree
 * Output: true ofr false
 *
 * examples:
 *     (2)
 *     / \
 *   (4) (1)
 * output: false
 *
 *         (6)
 *         / \
 *       (5)  (8)
 *       /    / \
 *     (3)  (7)  (9)
 * output: true
 * 
 * Algorithm:
 * DEFINE checkBST that accepts a tree
 *   DECLARE an empty array to store tree as list
 *   DEFINE helper function that accepts a node
 *     if node equals null return null
 *     CALL helper with node.left
 *     push node.value into array
 *     CALL helper with node.right
 * 
 *   CALL helper with the tree root as an argument
 *   DECLARE previous and assign it to equal first index in array
 *   DECLARE current
 * 
 *   loop over array starting at index 1 
 *     set current equal to the array at i
 *     Check that previous is less than current
 *       if not return false
 *     set previous equal to current
 * 
 *   return true
 * 
 */

const { Node, BinaryTree } = require('../dataStructures/trees/tree')


let checkBST = (tree) => {
  let array = []
  let helper = (node) => {
    if (!node) return null
    helper(node.left)
    array.push(node.value)
    helper(node.right)
  }
  helper(tree.root)

  // console.log('array',array)
  let previous = array[0]
  let current

  for (let i = 1; i < array.length; i++) {
    current = array[i]
    if (current < previous) {
      // console.log('current',current)
      // console.log('previous',previous)
      return false
    }
    previous = current
  }
  return true
}

//example A returns true
const rootNodeA = new Node(6)
const left5A = new Node(5)
const left3A = new Node(3)

const right8A = new Node(8)
const left7A = new Node(7)
const right9A = new Node(9)

left5A.left = left3A

right8A.left = left7A
right8A.right = right9A

rootNodeA.left = left5A
rootNodeA.right = right8A

const testTreeA = new BinaryTree()
testTreeA.root = rootNodeA

//example B returns false
const rootNodeB = new Node(2)
const left4B = new Node(4)
const right1B = new Node(1)

rootNodeB.left = left4B
rootNodeB.right = right1B

const testTreeB = new BinaryTree()
testTreeB.root = rootNodeB

console.log('example A BST true', checkBST(testTreeA))
console.log('example B BST false', checkBST(testTreeB))
