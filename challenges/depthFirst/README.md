# Graphs - Depth First
<!-- Short summary or background information -->
Conduct a depth first preorder traversal on a graph

## Challenge
<!-- Description of the challenge -->

Create a function that accepts an adjacency list as a graph, and conducts a depth first traversal. Without utilizing any of the built-in methods available to your language, return a collection of nodes in their pre-order depth-first traversal order.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

INPUT:
```
            {A}----(D)----(F)
              \   / | \   /
               (B)  |  (H)
              /    (E)
            (C)
              \
              (G)
```
OUTPUT:
 `A,B,C,G,D,E,H,F`

### Algorithm/Psuedo Code

- Algorithm
  - Push the root node into the stack
  - Start a while loop while the stack is not empty
  - Peek at the top node in the stack
  - If the top node has unvisited children, mark the top node as visited, and then Push any unvisited children back into the stack.
  - If the top node does not have any unvisited children, Pop that node off the stack repeat until the stack is empty.

Psuedo code
```
Declare depthFirst(rootNode)
  // the stack to help traverse the graph
  stack = []
  // a Set object to keep track of the nodes and return when done
  visitedSet = Set object
  // push the first node on to the stack
  stack.push(rootNode)
  // loop over the stack until it is empty
  while (stack[0])
    // check if the current node has already been visited
    if (!visitedSet.has(stack[0])) {
      // if it has not add to stack
      visitedSet.add(stack[0])
    }
    // place array of adjacent nodes in variable and pop node off stack
    define neighbors = getNeighbors(stack.pop())
    // check if adjacent node array is empty 
    if (neighbors.length > 0) {
      // array has a length loop through it
      neighbors.forEach(edge => {
        // check if the current node has already been visited
        if (!visitedSet.has(edge.node)) {
          // if it has not add to stack
          stack.push(edge.node)
        }
      })
    }

  })
  return visitedSet
```

## API
<!-- Description of each method publicly available in your Graph -->

[PR](https://github.com/astrokd/data-structures-and-algorithms/pull/58)

