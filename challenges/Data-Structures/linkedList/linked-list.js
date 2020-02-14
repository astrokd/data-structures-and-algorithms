
class Node {
    constructor(valve, next) {
      this.value = value;
      this.next = next;
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
    }
  }
  
  const a = new Node(a, new Node(b,null));