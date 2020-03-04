
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

}

module.exports = {
    Queue
}