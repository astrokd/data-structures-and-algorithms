// Linked List

class Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
}
  
class LinkedList {
    constructor(head) {
      this.head = head;
    }
  
    //Add to head
    insert(value) {
      if (!this.head) {
          return 'No Head';
      }
      const newHead = new Node(value,this.head);
      this.head = newHead;
    }
  
    //
    includes(value) {
      if (!this.head) {
        return 'No Head';
      }
      let current = this.head;
      let result = false;
      while(current.value !== value) {
        current = current.next;
      }
      if (current.value === value) {
        result = true;
      }
      return result;
    }
  
    //
    toString() {
    if (!this.head) {
      return 'No Head';
    }
    let current = this.head;
    let str = '';
    while(current.next !== null) {
      str = str + `{ ${current.value} } -> `;
      current = current.next;
    }
    return str + 'NULL';
    }
  
}

// instantiate linked list
// let linkList = new LinkedList(new Node('first',null));

module.exports = LinkedList;
module.exports = Node;