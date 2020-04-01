# Graphs - Breadth First
<!-- Short summary or background information -->
Implement a breadth-first traversal on a graph.

## Challenge
<!-- Description of the challenge -->

Extend your graph object with a breadth-first traversal method that accepts a starting node

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

#### Algorithm
```
  Algorithm BreadthFirst(node)
    Define nodes <-- new Map()
    Define breadth <-- new Queue()
    breadth.Enqueue(node)

    while (breadth is not empty)
      Define front <-- breadth.Dequeue()
      nodes.add(front)

      for each child in front.Children
        if(child is not visited)
          child.Visited <-- true
          breadth.Enqueue(child)
        
  return nodes
```

## API
<!-- Description of each method publicly available in your Graph -->

[PR](https://github.com/astrokd/data-structures-and-algorithms/pull/56)

[MDN Global_Objects/Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)