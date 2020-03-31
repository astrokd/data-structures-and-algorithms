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
  it('A collection of all nodes can be properly retrieved from the graph', () => {
    const result = [{"value": 1},{"value": 2}]
    expect(testGraph.getNodes()).toEqual(result)
  })
  it('All appropriate neighbors can be retrieved from the graph', () => {
    const neighbors = [{"node": {"value": 2},"weight": 1}]
    expect(testGraph.getNeighbors(testNode)).toEqual(neighbors)
  })
  it('Neighbors are returned with the weight between nodes included', () => {
    expect(testGraph.getNeighbors(testNode)[0].weight).toEqual(1)
  })
  it('The proper size is returned, representing the number of nodes in the graph', () => {
    expect(testGraph.size()).toEqual(2)
  })
  it('A graph with only one node and edge can be properly returned', () => {
    const singleGraph = new Graph
    const singleNode = new Node(1)
    const singleEdge = new Edge(singleNode)
    singleGraph.addNode(singleNode)
    expect(singleGraph.adjacencyList.has(singleNode)).toBeTruthy()
  })
  it('An empty graph properly returns null', () => {
    const nullGraph = new Graph
    expect(nullGraph.getNeighbors()).toEqual('node does not exist in Graph')
  })
})