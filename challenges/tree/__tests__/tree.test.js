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

//Add a left child and right child to a single root node

//return a collection of preorder traversal

//return a collection of inorder traversal

//return a collection of ipostorder