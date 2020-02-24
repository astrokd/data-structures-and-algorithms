const {Stack} = require('../stacks-and-queues');

// -- Stacks ------------------------------
// push onto a stack
describe('push onto a stack', () => {
    const testStack = new Stack;
    it('add new value to top of stack with push ', () => {
        testStack.push('x');
        expect(testStack.storage[0]).toEqual('x');
    })
})

// push multiple values onto stack

// pop off a stack

// empty stack with multiple pops

// peek next item on stack

// instantiate an empty stack
