//Find common values in 2 binary trees

// Array that will returned
let intersections = [];
// Map the will hold node values
let intersectionMap = new Map()

// Node Class of tree
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

//Binary Tree class
class BinaryTree {
  constructor() {
    this.root = null;
  }
}

// traverse and map tree
let traverseMap = (node) => {
  if (node === null) return null
  const val = node.value
  //place node value into Map Obj
  if (!intersectionMap.has(val)) {
    intersectionMap.set(val, {value:val, count:1})
  } else {
    const newCount = intersectionMap.get(count) + 1
    intersectionMap.set(val, {value:val, count:newCount})
    // While traversing if collisions/intersection occur add value to an array
    if (newCount === 2) intersections.push(val)
  }
  traverseMap(node.left)
  traverseMap(node.right)
}

let tree_intersection = (node1, node2) => {

  // Traverse each tree separatly and add to Map Object
  traverseMap(node1)
  traverseMap(node2)
  
  // Return array of values that intersected
  return intersections;
}

