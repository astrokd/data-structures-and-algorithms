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

    push(value) {  // AKA addToEnd
        let newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){ // AKA removeFromEnd
        if(!this.head) return undefined
        let poppedNode = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.previous
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }

    unshift(value) {  // AKA addToFront
        let newNode = new Node(value)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {  // AKA removeFromFront
        if(this.length === 0) return undefined
        let oldHead = this.head
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

}

module.exports = {
    Node,
    LinkedList
}
