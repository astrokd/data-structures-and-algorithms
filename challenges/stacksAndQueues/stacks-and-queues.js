//Node class
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

//Stack class
class Stack {
    constructor() {
        this.top = null;
        this.storage = [];
    }

    //push
    push(value) {
        this.top = value;
        return this.storage.unshift(value);
    }

    //pop
    pop() {
        if (this.storage.length) {
            let popped = this.storage.shift();
            this.top = this.storage[0] ? this.storage[0] : null;
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

    //isEmpty
    isEmpty() {
        return this.storage.length ? false : true;
    }

}

//Queue class
class Queue {
    constructor() {
        this.front = null;
        this.storage = [];
    }

    //enqueue
    enqueue(value) {
        !this.front ? this.front = value : this.front = null
        return this.storage.push(value)
    }

    //dequeue
    //peek
    //isEmpty
}

module.exports = {
    Stack,
    Queue
}