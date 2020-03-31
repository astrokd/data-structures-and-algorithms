const { Node, Edge, Graph } = require ('./graph')

describe('graph', () => {
  const testGraph = new Graph
  const testNode = new Node(1)
  it('Node can be successfully added to the graph', () => {
    testGraph.addNode(testNode)
    expect(testGraph.adjacencyList.get(testNode)).toEqual([])
  })
  it('An edge can be successfully added to the graph', () => {
    const testNode2 = new Node(2)
    testGraph.addEdge(testNode,testNode2)
    expect(testGraph.adjacencyList.get(testNode)).toHaveLength(1)
  })
})