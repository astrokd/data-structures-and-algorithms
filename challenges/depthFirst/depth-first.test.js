const { Node, Graph } = require ('./depth-first')

describe('Depth First Traversal for a graph', () => {
  const testGraph = new Graph

  const testNodeA = new Node('A')
  const testNodeB = new Node('B')
  const testNodeC = new Node('C')
  const testNodeD = new Node('D')
  const testNodeE = new Node('E')
  const testNodeF = new Node('F')
  const testNodeG = new Node('G')
  const testNodeH = new Node('H')

  testGraph.addNode(testNodeA)
  testGraph.addNode(testNodeB)
  testGraph.addNode(testNodeC)
  testGraph.addNode(testNodeD)
  testGraph.addNode(testNodeE)
  testGraph.addNode(testNodeF)
  testGraph.addNode(testNodeG)
  testGraph.addNode(testNodeH)

  testGraph.addEdge(testNodeA,testNodeB)
  testGraph.addEdge(testNodeA,testNodeD)
  testGraph.addEdge(testNodeB,testNodeC)
  testGraph.addEdge(testNodeC,testNodeG)
  testGraph.addEdge(testNodeD,testNodeE)
  testGraph.addEdge(testNodeD,testNodeH)
  testGraph.addEdge(testNodeD,testNodeF)
  testGraph.addEdge(testNodeB,testNodeD)

  it('Graph size is', () => {
    expect(testGraph.size()).toEqual(8)
  })
  it('Graph getNodes returns', () => {
    const nodeOutput = [{"value": "A"}, {"value": "B"}, {"value": "C"}, {"value": "D"}, {"value": "E"}, {"value": "F"}, {"value": "G"}, {"value": "H"}]
    expect(testGraph.getNodes()).toEqual(nodeOutput)
  })
  it('Graph getNeighbors returns', () => {
    const neighborOutput = [{"node": {"value": "A"}, "weight": 1}, {"node": {"value": "E"}, "weight": 1}, {"node": {"value": "H"}, "weight": 1}, {"node": {"value": "F"}, "weight": 1}, {"node": {"value": "B"}, "weight": 1}]
    expect(testGraph.getNeighbors(testNodeD)).toEqual(neighborOutput)
  })
  it('Depth First traversal returns correct order', () => {
    const adjacencyList = testGraph.adjacencyList
    const rootNode = [...adjacencyList][0]
    const input = testGraph.depthFirst(rootNode)
    const output = 'A,B,C,G,D,E,H,F'
    expect(input).toEqual(output)
  })
})