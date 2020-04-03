# Graphs - Depth First
<!-- Short summary or background information -->
Conduct a depth first preorder traversal on a graph

## Challenge
<!-- Description of the challenge -->

Create a function that accepts an adjacency list as a graph, and conducts a depth first traversal. Without utilizing any of the built-in methods available to your language, return a collection of nodes in their pre-order depth-first traversal order.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

INPUT:
            (A)----(D)----(F)
              \   / | \   /
               (B)  |  (H)
              /    (E)
            (C)
              \
              (G)
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
  result = ''
  stack = []
  visitedSet = Set object
  stack.push(rootNode)

  while (stack[0]) 
    if (!visitedSet.has(stack[0])) {
      visitedSet.add(stack[0])
    }
    define neighbors = getNeighbors(stack[0])
    if (neighbors.length > 0) {
      neighbors.forEach(edge => {
        if (!visitedSet.has(edge.node)) {
          stack.push(edge.node)
          visitedSet.add(rootNode)
        } else {
          
        }

      })
    }

  })
  return result
```

## API
<!-- Description of each method publicly available in your Graph -->

[PR](https://github.com/astrokd/data-structures-and-algorithms/pull/58)

