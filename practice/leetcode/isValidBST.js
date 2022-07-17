/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// https://leetcode.com/problems/validate-binary-search-tree/
// testcases
/*
[2,1,3]
[5,1,4,null,null,3,6]
[2,2,2]
*/
const { Node, BinaryTree } = require('../dataStructures/trees/tree')

var isValidBST = function(root) {
    let array = []
    let output = true
    let current, previous
    let helper = (node) => {
        // if (!output) return null
        if (!node) return null
        helper(node.left)
        
        current = node.value
        if (array.length > 0) {
            // console.log(array)
            previous = array[array.length-1]
            if (current <= previous) output = false
        }
        array.push(current)
        
        helper(node.right)
    }
    helper(root)
    return output
};

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

console.log('example A BST true', isValidBST(testTreeA.root))
console.log('example B BST false', isValidBST(testTreeB.root))

//example c returns false
const rootNodeC = new Node(2)
const left4C = new Node(2)
const right1C = new Node(2)

rootNodeC.left = left4C
rootNodeC.right = right1C

const testTreeC = new BinaryTree()
testTreeC.root = rootNodeC

console.log('example C BST false', isValidBST(testTreeC.root))