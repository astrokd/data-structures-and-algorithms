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
    }

    //push
    //pop
    //peek
    //isEmpty

}

//Queue class
class Queue {
    constructor() {
        this.front = null;
    }

    //enqueue
    //dequeue
    //peek
    //isEmpty
}

module.exports = {
    Node,
    Stack,
    Queue
}