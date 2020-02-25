class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
}
  
class LinkedList {
    constructor(head = null) {
      this.head = head;
    }

    
}

module.exports = {
    Node,
    LinkedList
}