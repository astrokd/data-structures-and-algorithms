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
  let cur1 = list1.head;
  let cur2 = list2.head;
  let ll = new LinkedList(new Node(cur1.value));
  cur1 = cur1.next;
  let count = 0;
  while(cur1.next || cur2.next) {
    if(count%2 === 0) {
      console.log('count even',count);
      ll.append(new Node(cur2.value))
      cur2 = cur2.next;
    } 
    if(count%2 === 1) {
      console.log('count odd',count);
      ll.append(new Node(cur1.value))
      cur1 = cur1.next;
    }
    count++;
  }
  return ll;
}


// -- TESTS ----------------------------------------------------

// -- Linked List kthFromEnd

describe('linked-list merge list', () => {
  test('should return a linked list of the two list zipped together', () => {
      const one1 = new Node(1);
      const two1 = new Node(3);
      const three1 = new Node(2);
      one1.next = two1;
      two1.next = three1;
      const ll1 = new LinkedList(one1);
      const one2 = new Node(5);
      const two2 = new Node(9);
      const three2 = new Node(4);
      one2.next = two2;
      two2.next = three2;
      const ll2 = new LinkedList(one2);
      const llMerged = mergeLists(ll1,ll2);
      console.log('ll1',ll1.toString());
      console.log('ll2',ll2.toString());
      console.log('llMerged',llMerged.toString());
      expect(mergeLists(ll1,ll2)).toBeInstanceOf(LinkedList);
  });
});