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
            poppedNode.previous = null
        }
        this.length--
        return poppedNode
    }

    unshift(value) {  // AKA addToFront, append
        let newNode = new Node(value)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.previous = newNode
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
            // this.head.previous = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    get(index) {
        if(index < 0 || index >= this.length) return null
        let count, current
        if(index <= this.length/2){
            count = 0
            current = this.head
            while(count !== index){
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while(count !== index){
                current = current.previous
                count--
            }
        }
        return current
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined
        this.length--
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()

        const removeNode = this.get(index)
        const beforeNode = removeNode.previous
        const afterNode = removeNode.next

        beforeNode.next = afterNode
        afterNode.previous = beforeNode

        removeNode.previous = null
        removeNode.next = null
        return removeNode
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(value)
        if(index === this.length) return !!this.push(value)
        
        const newNode = new Node(value)
        const beforeNode = this.get(index-1)
        const afterNode = beforeNode.next
        
        beforeNode.next = newNode
        newNode.previous = beforeNode
        newNode.next = afterNode
        afterNode.previous = newNode
        this.length++

        return true
    }

}

module.exports = {
    Node,
    LinkedList
}
