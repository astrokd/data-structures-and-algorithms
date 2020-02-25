const {Queue} = require('../stacks-and-queues');

// -- Queues ------------------------------
// enqueue into a queue
describe('enqueue into a queue', () => {
    const testQueue = new Queue;
    it('add new value to back of a queue ', () => {
        testQueue.enqueue('x');
        expect(testQueue.storage[0]).toEqual('x');
        expect(testQueue.front).toEqual('x');
        expect(testQueue.storage.length).toEqual(1);
    })
})


// enqueue multiple values into a queue

// dequeue out of a queue the expected value

// peek into a queue

// empty a queue with multiple dequeues

// instantiate an empty queue