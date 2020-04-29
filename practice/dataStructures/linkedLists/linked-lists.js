class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
      this.previous = null
    }
}

class LinkedList {
    constructor(head = null) {
      this.head = head;
      this.tail = null;
      this.length = 0;
    }

    append(node) {
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = node;
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
