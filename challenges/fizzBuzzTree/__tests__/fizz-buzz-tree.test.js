const { Node, BinaryTree } = require('../fizz-buzz-tree')

describe('test empty tree', () => {
  const testTree = new BinaryTree
  it('returns null', () => {
    expect(testTree.root).toEqual(null)
  })
})