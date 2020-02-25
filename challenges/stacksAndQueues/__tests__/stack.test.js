const {Stack} = require('../stacks-and-queues');
const { Node,
        LinkedList 
        } = require('../linked-lists');

// -- Stacks ------------------------------
// push onto a stack
describe('push onto a stack', () => {
    const testStack = new Stack;
    it('add new value to top of stack with push ', () => {
        testStack.push('x');
        expect(testStack.storage.head.value).toEqual('x');
        expect(testStack.top.value).toEqual('x');
        expect(testStack.storage.next).toBeUndefined();
    })
})

// push multiple values onto stack
describe('push multiple onto a stack', () => {
    const testStack = new Stack;
    it('add new values to top of stack with push ', () => {
        testStack.push('x');
        testStack.push('y');
        testStack.push('z');
        expect(testStack.storage.head.value).toEqual('z');
        expect(testStack.top.value).toEqual('z');
    })
})

// pop off a stack
describe('pop off top stack', () => {
    const testStack = new Stack;
    it('remove values from stack with pop ', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        a.next = b;
        b.next = c;
        testStack.top = a;
        ll = new LinkedList(a);
        testStack.storage = ll;
        expect(testStack.pop()).toEqual('a');
        expect(testStack.top).toBe(b);
        expect(testStack.storage.head.value).toEqual('b');
        expect(testStack.storage.head).toBe(b);
    })
})

// empty stack with multiple pops
describe('pop off top of stack until stack is empty', () => {
    const testStack = new Stack;
    it('empty stack ', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        a.next = b;
        b.next = c;
        testStack.top = a;
        ll = new LinkedList(a);
        testStack.storage = ll;
        expect(testStack.pop()).toEqual('a');
        expect(testStack.pop()).toEqual('b');
        expect(testStack.pop()).toEqual('c');
        expect(testStack.top).toEqual(null);
    })
})

// peek next item on stack
describe('peek top item on stack', () => {
    const testStack = new Stack;
    it('returns current next item in stack ', () => {
        expect(testStack.peek()).toEqual(null);
        const a = new Node('1');
        const b = new Node('2');
        const c = new Node('3');
        a.next = b;
        b.next = c;
        testStack.top = a;
        ll = new LinkedList(a);
        testStack.storage = ll;
        expect(testStack.peek()).toBe(a);
    })
})


// instantiate an empty stack
describe('instantiate empty stack', () => {
    const testStack = new Stack;
    it('returns its emptiness  ', () => {
        expect(testStack.top).toEqual(null);
        expect(testStack.storage.head).toEqual(null);
    })
    it('isEmpty() also returns emptiness ', () => {
        expect(testStack.isEmpty()).toEqual(true);
    })
})