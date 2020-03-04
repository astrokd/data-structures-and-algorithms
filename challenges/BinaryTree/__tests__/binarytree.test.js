//Test
const { Node,BinaryTree } = require('../binarytree')

//return a collection of breadth first
describe('Breadth FirstTraversal', () => {
  const testTree = new BinaryTree
  const rootNode = new Node('A')
  const bNode = new Node('B')
  const cNode = new Node('C')
  const dNode = new Node('D')
  const eNode = new Node('E')
  const fNode = new Node('F')
  bNode.left = dNode
  bNode.right = eNode
  cNode.left = fNode
  rootNode.left = bNode
  rootNode.right = cNode
  testTree.root = rootNode
  let result = testTree.breadthFirst()
  it('returns tree breadth first traversed ', () => {
    expect(result).toEqual(['A','B','C','D','E','F'])
  })
  const testNullTree = new BinaryTree
  it('returns returns null for empty trees ', () => {
    expect(testNullTree.breadthFirst()).toEqual(null)
  })
})