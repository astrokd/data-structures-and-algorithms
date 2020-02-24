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
}

//Queue class
class Queue {
    constructor() {
        this.front = null;
    }
}


module.exports = {
    Node,
    Stack,
    Queue
}