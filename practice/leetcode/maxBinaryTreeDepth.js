// https://leetcode.com/problems/maximum-depth-of-binary-tree/
/*
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Note: A leaf is a node with no children.
 * 
 *      3
 *     / \
 *    9  20
 *      /  \
 *     15   7
 */

// visual
// 

// https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/

const { Node } = require('../dataStructures/trees/tree')

var maxDepth = function(root) {
  // helper function that returns depth count
  let helper = (node) => {
      // if empty return 0
      if (!node) {
          return 0
      }
      // traverse each side
      let left = helper(node.left)
      let right = helper(node.right)
      // return the deeper node
      if (left > right) {
        return left+1
      } else {
        return right+1
      }
  }
  return helper(root)
};
// 3,9,20,15,7
let treeNode1 = new Node(3,new Node(9),new Node(20,new Node(15),new Node(7)))

console.log('maxDepth',maxDepth(treeNode1))
