const { Node, BinaryTree } = require('../fizz-buzz-tree')

describe('test fizz buzz tree of null', () => {
  const testTree = new BinaryTree
  const newTree = testTree.fizzBuzzTree()
  it('returns values', () => {
    expect(newTree.root).toBeNull()
  })
})

describe('test fizz buzz tree of one node', () => {
  const testTree = new BinaryTree
  const rootNode = new Node(1)
  testTree.root = rootNode
  const newTree = testTree.fizzBuzzTree()
  it('returns values', () => {
    expect(newTree.root.value).toEqual('1')
  })
})

describe('test fizz buzz tree of 3', () => {
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
    expect(newTree.root.left.value).toEqual('FizzBuzz')
    expect(newTree.root.right.value).toEqual('2')
  })
})

describe('test fizz buzz tree of ', () => {
  const testTree = new BinaryTree
  const rootNode = new Node(1)
  const leftNode = new Node(3)
  const rightNode = new Node(5)
  const rightLNode = new Node(2)
  const rightRNode = new Node(15)
  rightNode.left = rightLNode
  rightNode.right = rightRNode
  rootNode.left = leftNode
  rootNode.right = rightNode
  testTree.root = rootNode
  const newTree = testTree.fizzBuzzTree()
  it('returns values', () => {
    expect(newTree.root.value).toEqual('1')
    expect(newTree.root.left.value).toEqual('Fizz')
    expect(newTree.root.right.value).toEqual('Buzz')
    expect(newTree.root.right.left.value).toEqual('2')
    expect(newTree.root.right.right.value).toEqual('FizzBuzz')
  })
})