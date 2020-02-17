// Linked List

class Node {
    constructor(value, next, prev) {
      this.value = value;
      this.next = next || null;
      this.prev = prev || null;
    }
}
  
class LinkedList {
    constructor(head) {
      this.head = head;
    }

    append(node) {
      let current = this.head;
      while(current.next !== null) {
        current = current.next;
      }
        current.next = node;
        node.prev = current;
    }
  
    //Add to head
    insert(value) {
      if (!this.head) {return 'No Head';}
      const oldHead = this.head;
      const newHead = new Node(value,oldHead);
      oldHead.prev = newHead;
      this.head = newHead;
    }
  
    //
    includes(value) {
      if (!this.head) {return 'No Head';}
      let current = this.head;
      let result = false;
      while(current.next !== null) {
        current = current.next;
        if (current.value === value) {
            result = true;
            return result;
        }
      }
      return result;
    }
  
    //
    toString() {
    if (!this.head) {return 'No Head';}
    let current = this.head;
    let str = `{ ${current.value} } -> `;
    while(current.next !== null) {
      current = current.next;
      str = str + `{ ${current.value} } -> `;
    }
    return str + 'NULL';
    }
  
}

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

describe('linked-list includes', () => {
    test('should return boolean of value if it exist in list', () => {
        const headNode = new Node(0);
        const linkedList = new LinkedList(headNode);
        linkedList.insert(5);
        linkedList.insert(4);
        linkedList.insert(3);
        expect(linkedList.includes(4)).toEqual(true);
        expect(linkedList.includes(8)).toEqual(false);
    });
});

describe('linked-list toString', () => {
    test('should return string of linked list', () => {
        const headNode = new Node(0,null);
        const linkedList = new LinkedList(headNode);
        linkedList.insert('string');
        linkedList.insert(true);
        expect(linkedList.toString()).toEqual('{ true } -> { string } -> { 0 } -> NULL');
    });
});

describe('doubly linked-list instantiate', () => {
  test('should return the value of head, next, and prev', () => {
      const headNode = new Node(2);
      const dLL = new LinkedList(headNode);
      expect(dLL.head.value).toEqual(2);
      expect(dLL.head.next).toEqual(null);
      expect(dLL.head.prev).toEqual(null);
  });
});

describe('double linked-list insert', () => {
  test('should insert value into linked-list', () => {
      const headNode = new Node(0);
      const linkedList = new LinkedList(headNode);
      linkedList.insert(5);
      expect(linkedList.head.value).toEqual(5);
      expect(linkedList.head.next.next).toEqual(null);
  });
});