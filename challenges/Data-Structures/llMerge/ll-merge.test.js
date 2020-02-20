// Linked List

class Node {
    constructor(value, next, prev) {
      this.value = value;
      this.next = next || null;
      this.prev = prev || null;
    }
}
  
class LinkedList {
    constructor(head = null) {
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

    //get kth from end
    kthFromEnd(k) {
      if (!this.head) {return 'No Head';}
      let current = this.head;
      let llCount = 0;
      while(current.next !== null) {
        llCount++;
        current = current.next;
      }
      let count = 0;
      current = this.head;
      while(current.next !== null) {
        if (count === llCount-k) {
          return current.value;
        }
        current = current.next;
        count++;
      }
      return current.value;
    }
  
}

//merge list
function mergeLists(list1,list2) {
  let ll = new LinkedList();

}


// -- TESTS ----------------------------------------------------

// -- Linked List kthFromEnd

describe('linked-list merge list', () => {
  test('should return a linked list of the two list zipped together', () => {
      const one = new Node(5);
      const two = new Node(6);
      const three = new Node(7);
      one.next = two;
      two.prev = one;
      two.next = three;
      three.prev = two;
      const ll = new LinkedList(one);
      expect(ll.kthFromEnd(1)).toEqual(6);
  });
});