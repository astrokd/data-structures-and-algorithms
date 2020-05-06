// Compare to trees and see if they have the same number of leafs

/* INPUT: 2 trees
 * OUTPUT: true or false based on the tree comparison
 *
 * Algorithm
 *   Function takes 2 trees as arguments
 *     define value1 and value2
 *     Loop over first tree and count leafs store in value1
 *     Loop over second tree and count leafs store in value2
 *     if value 1 is equal to value 2 return true
 *       else return false
 * 
 * Tree1:      F            Tree2:       F
 *            / \                       / \
 *          F1   F1                   F1   F1
 *          / \   \                   /     \
 *         L1 AF2  BF2              A2F2     B2F2
 *            / \   / \             / \     / \
 *          L2  L3  L4 L5          L6  L7  L8  C2F3
 *                                            / \
 *                                           L9   L10
 */

const { Node, BinaryTree } = require('../dataStructures/trees/tree')

let compareLeafs = (tree1,tree2) => {
  let count = 0

  let compareLeafHelper = (node) => {
    if (!node) {
      return null
    }
    //check for leaf
    if (node.left === null && node.right === null) {
      count++
    }
    compareLeafHelper(node.left)
    compareLeafHelper(node.right)

  }

  compareLeafHelper(tree1.root)
  let count1 = count
  count = 0
  compareLeafHelper(tree2.root)
  let count2 = count

  // console.log('count1', count1)
  // console.log('count2', count2)

  if (count1 !== count2) {
    return false
  } else {
    return true
  }

}
// Tree1
const rootNode1 = new Node('F')
const left1 = new Node('F1')
const right1 = new Node('F1')

const L1 = new Node('L1')
const AF2 = new Node('AF2')
const L2 = new Node('L2')
const L3 = new Node('L3')
const BF2 = new Node('BF2')
const L4 = new Node('L4')
const L5 = new Node('L5')

AF2.left = L2
AF2.right = L3

BF2.left = L4
BF2.right = L5

left1.left = L1
left1.right = AF2

right1.right = BF2

rootNode1.left = left1
rootNode1.right = right1

const testTree1 = new BinaryTree()
testTree1.root = rootNode1

// Tree2
const rootNode2 = new Node('F')
const left2 = new Node('F1')
const right2 = new Node('F1')

const A2F2 = new Node('A2F2')
const B2F2 = new Node('B2F2')
const C2F3 = new Node('C2F3')
const L6 = new Node('L6')
const L7 = new Node('L7')
const L8 = new Node('L8')
const L9 = new Node('L9')
const L10 = new Node('L10')

C2F3.left = L9
C2F3.right = L10

A2F2.left = L6
A2F2.right = L7

B2F2.left = L8
B2F2.right = C2F3

left2.left = A2F2

right2.right = B2F2

rootNode2.left = left2
rootNode2.right = right2

const testTree2 = new BinaryTree()
testTree2.root = rootNode2

// Tree3
const rootNode3 = new Node('F')
const left3 = new Node('F1')
const right3 = new Node('F1')

const A3F2 = new Node('A3F2')
const B3F2 = new Node('B3F2')
const C3F3 = new Node('C3F3')
const L36 = new Node('L6')
const L38 = new Node('L8')
const L39 = new Node('L9')


C3F3.left = L39

A3F2.left = L36

B3F2.left = L38
B3F2.right = C3F3

left3.left = A3F2

right3.right = B3F2

rootNode3.left = left3
rootNode3.right = right3

const testTree3 = new BinaryTree()
testTree3.root = rootNode3


console.log('compare trees 1 n 2', compareLeafs(testTree1,testTree2))  //true
console.log('compare trees 1 n 3', compareLeafs(testTree1,testTree3))  //false