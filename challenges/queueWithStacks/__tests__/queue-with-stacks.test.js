const {PseudoQueue} = require('../queue-with-stacks');
const { Node,
    LinkedList 
    } = require('../linked-lists');

// enqueue()

describe('enqueue multiple values into the queue', () => {
    const testQueue = new PseudoQueue;
    it('add new value to back of a queue ', () => {
        const a = new Node(10);
        const b = new Node(15);
        const c = new Node(20);
        a.next = b;
        b.next = c;
        testQueue.front = a;
        testQueue.enqueue(5);
        expect(testQueue.storage.top.value).toEqual(5);
        expect(testQueue.front.value).toEqual(5);
    })
})

describe('enqueue into a queue', () => {
    const testQueue = new PseudoQueue;
    it('add new value to back of a queue ', () => {
        testQueue.enqueue(5);
        expect(testQueue.storage.top.value).toEqual(5);
        expect(testQueue.front.value).toEqual(5);
        expect(testQueue.storage.head.value).toEqual(5);
    })
})

// dequeue()

describe('dequeue from front of queue', () => {
    const testQueue = new Queue;
    const aa = new Node(5);
    const a = new Node(10);
    const b = new Node(15);
    const c = new Node(20);
    aa.next = a;
    a.next = b;
    b.next = c;
    testQueue.front = aa;
    it('remove the value from front ', () => {
        testQueue.dequeue();
        expect(testQueue.front.next.next.value).toEqual(20);
        expect(testQueue.top.next.next.value).toEqual(20);
    })
})