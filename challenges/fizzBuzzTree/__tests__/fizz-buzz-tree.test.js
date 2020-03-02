const { Node, BinaryTree } = require('../fizz-buzz-tree')

describe('test tree', () => {
  const testTree = new BinaryTree
  const rootNode = new Node(1)
  const leftNode = new Node(0)
  const rightNode = new Node(2)
  rootNode.left = leftNode
  rootNode.right = rightNode
  testTree.root = rootNode
  it('returns values', () => {
    expect(testTree.root.value).toEqual(1)
    expect(testTree.root.left.value).toEqual(0)
    expect(testTree.root.right.value).toEqual(2)
  })
})

describe('test fizz buzz tree', () => {
  const testTree = new BinaryTree
  const rootNode = new Node(1)
  const leftNode = new Node(0)
  const rightNode = new Node(2)
  rootNode.left = leftNode
  rootNode.right = rightNode
  testTree.root = rootNode
  const newTree = testTree.fizzBuzzTree()
  it('returns values', () => {
    expect(newTree.root.value).toEqual('1')
    expect(newTree.root.left.value).toEqual('0')
    expect(newTree.root.right.value).toEqual('2')
  })
})