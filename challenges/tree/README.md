# Binary Tree and BST Implementation
<!-- Short summary or background information -->
Implement Trees data structure

## Challenge
<!-- Description of the challenge -->
- [x] - Create a Node class that has a left and a right
- [x] - Create a BinaryTree class and define methods for each depth first traversals
  - [x] - `preOrder`
  - [x] - `inOrder`
  - [x] - `postOrder`
- [x] - Error handling
- [x] - Test
  - [x] - Instantiate empty tree
  - [x] - Instantiate a tree with a single root node
  - [x] - Add a left child and right child to a single root node
  - [x] - return a collection of preorder traversal
  - [x] - return a collection of inorder traversal
  - [x] - return a collection of postorder traversal
- [ ] - Stretch Goal, breadth-first traversal

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- `preOrder`

Created a method that has an array that will hold our output.  Defined a recursive function inside method that will check if the node is null then add the node value to the array and then traverse left or right.  Finally output the array.

- `inOrder`

Created a method that has an array that will hold our output.  Defined a recursive function inside method that will check if the node is null then then traverse left, add the node value to the array then traverse right.  Finally output the array.

- `postOrder`

Created a method that has an array that will hold our output.  Defined a recursive function inside method that will check if the node is null and then traverse left or right then add the node value to the array.  Finally output the array.

## API
<!-- Description of each method publicly available to your Stack and Queue-->

* Tree.js
- Class Node
  - property value
  - property left
  - property right
- Class BinaryTree
  - property root
  - method preOrder
  - method inOrder
  - method postOrder


[PR for Trees](https://github.com/astrokd/data-structures-and-algorithms/pull/43)