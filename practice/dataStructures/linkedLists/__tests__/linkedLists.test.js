const { Node,LinkedList } = require('../linked-lists')

describe('linked-list instantiate', () => {
  test('should return the value of head', () => {
      const headNode = new Node(0);
      const linkedList = new LinkedList(headNode);
      expect(linkedList.head.value).toEqual(0);
      expect(linkedList.head.next).toEqual(null);
  });
});