const {LinkedList} = require('./linked-lists')

//Stack class
class Stack {
    constructor() {
        this.top = null;
        this.storage = new LinkedList(this.top);
    }

    //push
    push(value) {
        this.storage.insert(value);
        this.top = this.storage.head;
    }

    //pop
    pop() {
        if (this.storage.head !== null) {
            let popped = this.storage.head.value;
            this.storage.head = this.storage.head.next;
            this.top = this.storage.head !== null ? this.storage.head : null;
            return popped;
        } else {
            this.top = null;
            return null;
        }
    }

    //peek
    peek() {
        return this.top;
    }

}

//Queue class
class PseudoQueue {
    constructor() {
        this.front = null;
        this.storage = new Stack(this.front);
    }

    //enqueue
    enqueue(value) {
        if (this.front === null) {this.front = this.storage.top}
        return this.storage.push(value)
    }

    //dequeue
    dequeue() {
        if (this.front === null) {
            return null;
        } else {
            if (this.storage.top.next === undefined) {
                this.front = null;
            } else {
                this.front = this.storage.top.next;
            }
            return this.storage.pop();
        }
    }

}

module.exports = {
    PseudoQueue
}