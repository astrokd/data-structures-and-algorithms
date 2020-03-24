# Tree Intersection
<!-- Short summary or background information -->
Find common values in 2 trees

## Challenge
<!-- Description of the challenge -->
Write a function that takes two binary tree parameters and returns a set of values found in both trees.

- [x] - TreeIntersection
- [x] - Error handling
- [x] - Test
  - [x] - return intersections
  - [x] - return null when there are no intersections

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Input: 
```
tree1 :       150
             /   \
          100     250
          / \     / \
        75 160  200  350
           / \       / \
        125  175  300   500

tree2 :       42
             /   \
          100     600
          / \     / \
        15 160  200  350
           / \       / \
        125  175    4   500
```

Output:
`[100,160,125,175,200,350,500]`

  ### Algorithm:
    Create function that accepts the head of two binary tree
      Traverse each tree separatly and add to Map Object
        While traversing if collisions/intersection occur add value to an array
      Return array of values that intersected
    

Time is O(2n) , you need to traverse each node separately
Space is O(n) , only creating an array from intersecting nodes

## API
<!-- Description of each method publicly available to your Stack and Queue-->

[PR for Tree Intersection](https://github.com/astrokd/data-structures-and-algorithms/pull/59)
