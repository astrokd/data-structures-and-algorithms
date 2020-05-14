const { Node,LinkedList } = require('../linked-lists')

describe('linked-list instantiate', () => {
  test('should return the value of head', () => {
      const headNode = new Node(0);
      const linkedList = new LinkedList(headNode);
      expect(linkedList.head.value).toEqual(0);
      expect(linkedList.head.next).toEqual(null);
  });
});

describe('linked-list push', () => {
  test('should return the value of push item', () => {
      const ll = new LinkedList();
      ll.push(1);
      expect(ll.head.value).toEqual(1);
      expect(ll.tail.value).toEqual(1);
  });
});

describe('linked-list pop', () => {
  test('should return the value of pop item', () => {
      const one = new Node(1);
      const two = new Node(2);
      one.next = two;
      two.previous = one
      const ll = new LinkedList(one);
      ll.length = 2
      ll.tail = two
      const poppedItem = ll.pop();
      expect(poppedItem.value).toEqual(2)
      expect(ll.head.value).toEqual(1);
      expect(ll.tail.value).toEqual(1);
      expect(ll.length).toEqual(1);
  });
});

describe('linked-list unshift', () => {
  test('should return the value of unshifted item', () => {
      const one = new Node(1);
      const two = new Node(2);
      one.next = two;
      two.previous = one
      const ll = new LinkedList(one);
      ll.length = 2
      ll.tail = two
      ll.unshift(3);
      expect(ll.head.value).toEqual(3);
      expect(ll.head.next.value).toEqual(1);
      expect(ll.tail.value).toEqual(2);
  });
});

describe('linked-list shift', () => {
  test('should return the value of shift item', () => {
      const one = new Node(1);
      const two = new Node(2);
      one.next = two;
      two.previous = one
      const ll = new LinkedList(one);
      ll.length = 2
      ll.tail = two
      const shiftedItem = ll.shift();
      expect(shiftedItem.value).toEqual(1)
      expect(ll.head.value).toEqual(2);
      expect(ll.tail.value).toEqual(2);
  });
  test('should return empty lined list', () => {
      const one = new Node(1);
      const two = new Node(2);
      one.next = two;
      two.previous = one
      const ll = new LinkedList(one);
      ll.length = 2
      ll.tail = two
      const shiftedItem1 = ll.shift();
      const shiftedItem2 = ll.shift();
      expect(shiftedItem1.value).toEqual(1)
      expect(shiftedItem2.value).toEqual(2)
      expect(ll.head).toEqual(null);
      expect(ll.tail).toEqual(null);
  });
});

describe('linked-list get', () => {
  test('should return the item at index', () => {
      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      one.next = two;
      two.previous = one
      two.next = three;
      three.previous = two
      const ll = new LinkedList(one);
      ll.length = 3
      ll.tail = three
      const result = ll.get(1)
      expect(result.value).toEqual(2)
      expect(result.previous.value).toEqual(1)
      expect(result.next.value).toEqual(3)
  });
});

describe('linked-list remove', () => {
  test('should return the item at index and remove it', () => {
      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      one.next = two;
      two.previous = one
      two.next = three;
      three.previous = two
      const ll = new LinkedList(one);
      ll.length = 3
      ll.tail = three
      const result = ll.remove(1)
      expect(result.value).toEqual(2)
      expect(ll.head.next.value).toEqual(3)
      expect(ll.tail.previous.value).toEqual(1)
  });
});

describe('linked-list insert', () => {
  test('should insert the value at the index', () => {
      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      one.next = two;
      two.previous = one
      two.next = three;
      three.previous = two
      const ll = new LinkedList(one);
      ll.length = 3
      ll.tail = three
      const result = ll.insert(1,2.5)
      expect(result).toEqual(true)
      expect(ll.head.next.value).toEqual(2.5)
      expect(ll.tail.previous.previous.value).toEqual(2.5)
  });
});