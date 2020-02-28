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

    append(value) {
        const newNode = new Node(value, null);
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    insert(value) {
        const newHead = new Node(value, this.head);
        this.head = newHead;
    }

}

module.exports = {
    Node,
    LinkedList
}