# Binary Tree and Breadth-First Traversal
<!-- Short summary or background information -->
Write a breadth first traversal method

## Challenge
<!-- Description of the challenge -->
Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.


- [x] - Breadth First traversal method
- [x] - Error handling
- [x] - Test
  - [x] - return a collection of breadth first traversal
  - [x] - return a collection of breadth first traversal if tree is null

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- `breadth-first`
```
Create an empty output array
Create a queue
enqueue root of binarytree into queue
while the queue is not empty
  dequeue from the queue and place it's value into the output array
  if there is a left in the binary tree enqueue it
  if there is a right in the binary tree enqueue it
return output array if length > 0 else return null
```

Time is O(n), loops through binaryTree once
Space is O(2), stores an array that is the output and builds a queue for each depth of tree

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
  - method breadthFirst


[PR for Trees](https://github.com/astrokd/data-structures-and-algorithms/pull/43)

[PR for Breadth First traversal](https://github.com/astrokd/data-structures-and-algorithms/pull/45)