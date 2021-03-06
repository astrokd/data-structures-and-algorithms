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

    // Append to tail
    append(node) {
      let current = this.head;
      while(current.next !== null) {
        current = current.next;
      }
        current.next = node;
        node.prev = current;
    }
  
    // Add to head
    insert(value) {
      if (!this.head) {return 'No Head';}
      const oldHead = this.head;
      const newHead = new Node(value,oldHead);
      oldHead.prev = newHead;
      this.head = newHead;
    }
  
    // includes
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
  
    // convert list values to string
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

    // insert before
    insertBefore(value, newValue) {
      if (!this.head) {return 'No Head';}
      let current = this.head;
      const newNode = new Node(newValue);
      while(current.next !== null) {
        if(current.value === value) {
          const previousNode = current.prev || null;

          if (previousNode === null) {
            this.head = newNode;
            newNode.next = current;
            current.prev = newNode;
            newNode.prev = null;
          } else {
            previousNode.next = newNode
            newNode.next = current;
            current.prev = newNode;
            newNode.prev = previousNode;
          }
          
        }
        current = current.next;
      }
    }

    // insert after
    insertAfter(value, newValue) {
      if (!this.head) {return 'No Head';}
      let current = this.head;
      const newNode = new Node(newValue);
      while(current.next !== null) {
        if(current.value === value) {
          const nextNode = current.next || null;
          // console.log('current.next',current.next);
          if (nextNode === null) {
            current.next = newNode;
            newNode.prev = current;
            newNode.next = null;
          } else {
            current.next = newNode;
            newNode.prev = current;
            newNode.next = nextNode;
            nextNode.prev = newNode;
          }

        }
        current = current.next;
      }
    }
  
}

// -- TESTS ----------------------------------------------------

// -- Doubly Linked List

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
      expect(linkedList.head.next.prev.value).toEqual(5);
      expect(linkedList.head.next.next).toEqual(null);
      expect(linkedList.head.prev).toEqual(null);
  });
});

// -- Linked List Insertions

describe('linked-list append 2 nodes', () => {
  test('should return the value of appended items', () => {
      const one = new Node(1);
      const two = new Node(2);
      one.next = two;
      const ll = new LinkedList(one);
      const three = new Node(3);
      const four = new Node(4);
      ll.append(three);
      ll.append(four);
      expect(two.next.value).toEqual(three.value);
      expect(three.next.value).toEqual(four.value);
  });
});

describe('linked-list insert before', () => {
  test('should return the value of inserted items', () => {
      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      one.next = two;
      two.prev = one;
      two.next = three;
      three.prev = two;
      const ll = new LinkedList(one);
      ll.insertBefore(2,5);
      expect(one.next.value).toEqual(5);
  });
});

describe('linked-list insert before the first node of a linked list', () => {
  test('should return the value of inserted items', () => {
      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      one.next = two;
      two.prev = one;
      two.next = three;
      three.prev = two;
      const ll = new LinkedList(one);
      ll.insertBefore(1,5);
      expect(ll.head.value).toEqual(5);
  });
});

describe('linked-list insert after', () => {
  test('should return the value of inserted items', () => {
      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      one.next = two;
      two.prev = one;
      two.next = three;
      three.prev = two;
      const ll = new LinkedList(one);
      ll.insertAfter(2,5);
      expect(two.next.value).toEqual(5);
  });
});

describe('linked-list insert after the last node in a linked list', () => {
  test('should return the value of inserted items', () => {
      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      one.next = two;
      two.prev = one;
      two.next = three;
      three.prev = two;
      const ll = new LinkedList(one);
      // console.log('toString()',ll.toString());
      ll.insertAfter(3,5);
      // console.log('toString()',ll.toString());
      expect(three.next.value).toEqual(5);
  });
});