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

describe('Tree Intersection', () => {
  const cLLNode1 = new Node(125)
  const cLRNode1 = new Node(175)
  const cRLNode1 = new Node(300)
  const cRRNode1 = new Node(500)
  const bLLNode1 = new Node(75)
  const bLRNode1 = new Node(160,cLLNode1,cLRNode1)
  const bRLNode1 = new Node(200)
  const bRRNode1 = new Node(350,cRLNode1,cRRNode1)
  const aLNode1 = new Node(100,bLLNode1,bLRNode1)
  const aRNode1 = new Node(250,bRLNode1,bRRNode1)
  const rootNode1 = new Node(150,aLNode1,aRNode1)


  const cLLNode2 = new Node(125)
  const cLRNode2 = new Node(175)
  const cRLNode2 = new Node(4)
  const cRRNode2 = new Node(500)
  const bLLNode2 = new Node(15)
  const bLRNode2 = new Node(160,cLLNode2,cLRNode2)
  const bRLNode2 = new Node(200)
  const bRRNode2 = new Node(350,cRLNode2,cRRNode2)
  const aLNode2 = new Node(100,bLLNode2,bLRNode2)
  const aRNode2 = new Node(600,bRLNode2,bRRNode2)
  const rootNode2 = new Node(42,aLNode2,aRNode2)

  const result = [100,160,125,175,200,350,500]
  if('return array of intersecting nodes', () => {
    expect(tree_intersection(rootNode1,rootNode2)).toEqual(result)
  })
})
