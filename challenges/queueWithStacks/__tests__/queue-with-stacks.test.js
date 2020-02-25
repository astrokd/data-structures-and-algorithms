const {PseudoQueue} = require('../queue-with-stacks');

// enqueue()

describe('enqueue multiple values into the queue', () => {
    const testQueue = new PseudoQueue;
    it('add new value to back of a queue ', () => {
        testQueue.enqueue(10);
        testQueue.enqueue(15);
        testQueue.enqueue(20);
        expect(testQueue.storage[0]).toEqual('x');
        expect(testQueue.front).toEqual('x');
        expect(testQueue.storage.length).toEqual(3);
    })
})

describe('enqueue into a queue', () => {
    const testQueue = new PseudoQueue;
    it('add new value to back of a queue ', () => {
        testQueue.enqueue(5);
        expect(testQueue.storage[0]).toEqual(5);
        expect(testQueue.front).toEqual(5);
        expect(testQueue.storage.length).toEqual(1);
    })
})

// dequeue()