const { Queue, Node, Edge, Graph } = require ('./breadth-first')

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

  testGraph.addEdge(testNode1,testNode2)
  testGraph.addEdge(testNode2,testNode3)
  testGraph.addEdge(testNode2,testNode4)
  testGraph.addEdge(testNode3,testNode4)
  testGraph.addEdge(testNode3,testNode5)
  testGraph.addEdge(testNode3,testNode6)
  testGraph.addEdge(testNode4,testNode6)
  testGraph.addEdge(testNode5,testNode6)

  it('Graph size is', () => {
    expect(testGraph.size()).toEqual(6)
  })
  it('A collection of all nodes can be properly retrieved from the graph', () => {
    const result = [{"value": 'Pandora'},{"value": 'Arendelle'},{"value": 'Metroville'},{"value": 'Monstroplolis'},{"value": 'Narnia'},{"value": 'Naboo'}]
    expect(testGraph.getNodes()).toEqual(result)
  })
  it('Abreadth first traversal runs list of nodes in BFT order', () => {
    const orderBFT = 'Pandora, Arendelle, Metroville, Monstroplolis, Narnia, Naboo'
    expect(testGraph.breadthFirst(testNode1)).toEqual(orderBFT)
  })
})