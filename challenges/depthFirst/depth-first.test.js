const { Queue, Node, Edge, Graph } = require ('./depth-first')

describe('Breadth First Traversal for a graph', () => {
  const testGraph = new Graph

  const testNode1 = new Node('Pandora')
  const testNode2 = new Node('Arendelle')
  const testNode3 = new Node('Metroville')
  const testNode4 = new Node('Monstroplolis')
  const testNode5 = new Node('Narnia')
  const testNode6 = new Node('Naboo')

  testGraph.addNode(testNode1)
  testGraph.addNode(testNode2)
  testGraph.addNode(testNode3)
  testGraph.addNode(testNode4)
  testGraph.addNode(testNode5)
  testGraph.addNode(testNode6)

  testGraph.addEdge(testNode1,testNode2,150)
  testGraph.addEdge(testNode1,testNode3,82)
  testGraph.addEdge(testNode2,testNode3,99)
  testGraph.addEdge(testNode2,testNode4,42)
  testGraph.addEdge(testNode3,testNode4,105)
  testGraph.addEdge(testNode3,testNode5,37)
  testGraph.addEdge(testNode3,testNode6,26)
  testGraph.addEdge(testNode4,testNode6,73)
  testGraph.addEdge(testNode5,testNode6,250)

  it('Graph size is', () => {
    expect(testGraph.size()).toEqual(6)
  })
  it('Node neighbors are', () => {
    expect(testGraph.getNeighbors(testNode1)[0].weight).toEqual(150)
  })
  it('Get edge between nodes', () => {
    const output = testGraph.getEdge(testNode1,testNode2)
    expect(output).toEqual(150)
  })
  it('Get edge returns false when nodes do not have an edge', () => {
    const output = testGraph.getEdge(testNode1,testNode6)
    expect(output).toEqual(false)
  })
})