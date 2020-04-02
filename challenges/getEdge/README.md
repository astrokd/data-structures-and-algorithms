# Graphs - Get Edge
<!-- Short summary or background information -->
Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

## Challenge
<!-- Description of the challenge -->

Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

### Algorithm
Declare getEdge(nodeStart,nodeDestination)
  define result = false
  define directNeighbor <-- getNeighbors(nodeStart)
  directNeighbor.forEach( neighbor => {
    if neighbor === nodeDestination
      result <-- neighbor.weight
  })
  return result


## API
<!-- Description of each method publicly available in your Graph -->

[PR](https://github.com/astrokd/data-structures-and-algorithms/pull/57)

