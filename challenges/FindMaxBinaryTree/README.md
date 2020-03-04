# Binary Tree find maximum value
<!-- Short summary or background information -->
Find the Maximum Value in a Binary Tree

## Challenge
<!-- Description of the challenge -->
Write an instance method called `find-maximum-value`. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.


- [x] - Find Maximum value
- [x] - Error handling
- [x] - Test
  - [x] - return a maximum for null tree
  - [x] - return a maximum for tree of negative numbers
  - [x] - return a maximum for tree


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- `find-maximum-value`
```
findMaxVal as breadthFirst
  place root value into output
  make queue to traverse tree
  root node into queue
  loop over queue while not empty
    place front of queue into temp node
    compare value to current output value, replace if greater
    if there is a left place in queue
    if there is a right place in queue
  return output
```

Time is O(n), loops through binaryTree once
Space is O(2), stores an array that is the output and builds a queue for each depth of tree

## API
<!-- Description of each method publicly available to your Stack and Queue-->

* Tree.js
- Class Queue 
- Class Node
- Class BinaryTree
  - property root
  - method findMaximumValue


[PR for Trees](https://github.com/astrokd/data-structures-and-algorithms/pull/43)

[PR for Breadth First traversal](https://github.com/astrokd/data-structures-and-algorithms/pull/45)