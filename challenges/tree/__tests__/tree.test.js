//Test
const { Node,BinaryTree } = require('../tree')

//Instantiate empty tree
describe('Instantiate empty tree', () => {
  const testTree = new BinaryTree
  it('returns that tree is empty ', () => {
    expect(testTree.root).toEqual(null)
  })
})

//Instantiate a tree with a single root node
describe('Instantiate  a tree with a single root node', () => {
  const testTree = new BinaryTree
  const testNode = new Node('A')
  testTree.root = testNode
  it('returns root of tree ', () => {
    expect(testTree.root.value).toEqual('A')
  })
})

//Add a left child and right child to a single root node
describe('Instantiate  a tree with a root, a left, and a right', () => {
  const testTree = new BinaryTree
  const rootNode = new Node('A')
  const leftNode = new Node('B')
  const rightNode = new Node('C')
  rootNode.left = leftNode
  rootNode.right = rightNode
  testTree.root = rootNode
  it('returns left of root of tree ', () => {
    expect(testTree.root.left.value).toEqual('B')
  })
  it('returns right of root of tree ', () => {
    expect(testTree.root.right.value).toEqual('C')
  })
})

//return a collection of preorder traversal

//return a collection of inorder traversal

//return a collection of ipostorder