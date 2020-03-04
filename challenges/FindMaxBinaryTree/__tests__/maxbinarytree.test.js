//Test
const { Node,BinaryTree } = require('../binarytree')

//return max
describe('Find Maximum Value', () => {
  const testTree = new BinaryTree
  const rootNode = new Node(1)
  const bNode = new Node(2)
  const cNode = new Node(3)
  const dNode = new Node(5)
  const eNode = new Node(8)
  const fNode = new Node(13)
  bNode.left = dNode
  bNode.right = eNode
  cNode.left = fNode
  rootNode.left = bNode
  rootNode.right = cNode
  testTree.root = rootNode
  let result = testTree.findMaximumValue()
  it('returns max value for all positive numbers', () => {
    expect(result).toEqual(13)
  })
  const testNullTree = new BinaryTree
  it('returns returns null when tree is null', () => {
    expect(testNullTree.findMaximumValue()).toEqual(null)
  })
})
describe('Find Maximum Value for negative numbers', () => {
  const testTree = new BinaryTree
  const rootNode = new Node(-11)
  const bNode = new Node(-2)
  const cNode = new Node(-32)
  const dNode = new Node(-5)
  const eNode = new Node(-88)
  const fNode = new Node(-13)
  bNode.left = dNode
  bNode.right = eNode
  cNode.left = fNode
  rootNode.left = bNode
  rootNode.right = cNode
  testTree.root = rootNode
  let result = testTree.findMaximumValue()
  it('returns max value for all positive numbers', () => {
    expect(result).toEqual(-2)
  })
  const testSingleTree = new BinaryTree(new Node(0))
  it('returns returns root value when tree is one node', () => {
    expect(testSingleTree.findMaximumValue()).toEqual(0)
  })
})