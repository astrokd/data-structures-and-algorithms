//Node class

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
        if (this.front === null) {this.front = value}
        return this.storage.push(value)
    }

    //dequeue
    dequeue() {
        if (this.front === null) {
            return null;
        } else {
            if (this.storage[1] === undefined) {
                this.front = null;
            } else {
                this.front = this.storage[1];
            }
            return this.storage.shift();
        }
    }

    //peek
    peek() {
        return this.front;
    }

    //isEmpty
    isEmpty() {
        return this.storage.length ? false : true;
    }
}

module.exports = {
    Stack,
    Queue
}