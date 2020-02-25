const {
    Node,
    LinkedList
} = require('../linked-lists')

describe('linked-list instantiate', () => {
    test('should return the value of head', () => {
        const headNode = new Node(0);
        const linkedList = new LinkedList(headNode);
        expect(linkedList.head.value).toEqual(0);
        expect(linkedList.head.next).toEqual(null);
    });
  });
  
  describe('linked-list append', () => {
    test('should return the value of appended item', () => {
        const one = new Node(1);
        const two = new Node(2);
        one.next = two;
        const ll = new LinkedList(one);
        const three = new Node(3);
        ll.append(three);
        expect(two.next.value).toEqual(three.value);
    });
  });
  
  describe('linked-list insert', () => {
      test('should insert value into linked-list', () => {
          const headNode = new Node(0);
          const linkedList = new LinkedList(headNode);
          linkedList.insert(5);
          expect(linkedList.head.value).toEqual(5);
          expect(linkedList.head.next.next).toEqual(null);
      });
  });