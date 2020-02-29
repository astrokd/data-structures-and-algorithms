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
describe('Instantiate a tree with a root, a left, and a right', () => {
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
describe('Preorder Traversal', () => {
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
  let result = testTree.preOrder()
  it('returns tree preorder traversed ', () => {
    expect(result).toEqual(['A','B','D','E','C','F'])
  })
})

//return a collection of inorder traversal
describe('Inorder Traversal', () => {
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
  let result = testTree.inOrder()
  it('returns tree inorder traversed ', () => {
    expect(result).toEqual(['D','B','E','A','F','C'])
  })
})

//return a collection of postorder
describe('Postorder Traversal', () => {
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
  let result = testTree.postOrder()
  it('returns tree postorder traversed ', () => {
    expect(result).toEqual(['D','E','B','F','C','A'])
  })
})