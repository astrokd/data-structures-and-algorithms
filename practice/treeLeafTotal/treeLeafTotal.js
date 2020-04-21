const { Node, BinaryTree } = require('../dataStructures/trees/tree')

// function that given a binary tree and a value will return true or false if values of a leaf to node equal input value

/* INPUT
Tree=        Interger= 9
      1
     / \
    3   4
   /   / \
  5   6   7
*/

// OUTPUT true or false

// Algorithm
/*
 * loop through tree and traverse through each node
 *   add value of each node to a storage value
 *   when a leaf is reached(node is null)
 *     compare the storage value to the Interger
 *       if the storage value and the interger are equal return true
 *   subtract value of node from storage value
 */

// Code
const treeLeafTotal = (tree, int) => {
  let result = false
  let storeTotal = 0

  const leafHelper = (node) => {
    if (node === null) {
      if (int === storeTotal) {
        result = true
      }
      return null
    }
    storeTotal = storeTotal + node.value
    leafHelper(node.left)
    leafHelper(node.right)
    storeTotal = storeTotal - node.value
  }

  leafHelper(tree.root)

  return result
}

const rootNode = new Node(1)
const left1 = new Node(3)
const left2l = new Node(5)

const right1 = new Node(4)
const left2r = new Node(6)
const right2r = new Node(7)

left1.left = left2l

right1.left = left2r
right1.right = right2r

rootNode.left = left1
rootNode.right = right1

const testTree = new BinaryTree()
testTree.root = rootNode

console.log('tree leaf with 9', treeLeafTotal(testTree, 9)) // true
console.log('tree leaf with 11', treeLeafTotal(testTree, 11)) // true
console.log('tree leaf with 12', treeLeafTotal(testTree, 12)) // true

console.log('tree leaf with 20', treeLeafTotal(testTree, 20)) // false
console.log('tree leaf with 5', treeLeafTotal(testTree, 5)) // false
