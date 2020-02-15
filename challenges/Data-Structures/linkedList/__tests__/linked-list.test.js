const LinkedList = require('../linked-list.js');

describe('linked-list insert', () => {
    test('should insert value into linked-list', () => {
        const headNode = new Node(0,null);
        const linkedList = new LinkedList(headNode);
        linkedList.insert(5);
        expect(linkedList.head.value).toEqual(5);
        expect(linkedList.head.next.next).toEqual(null);
    });
});

describe('linked-list includes', () => {
    test('should return boolean of value if it exist in list', () => {
        const headNode = new Node(0,null);
        const linkedList = new LinkedList(headNode);
        linkedList.insert(5);
        linkedList.insert(4);
        linkedList.insert(3);
        expect(linkedList.includes(4)).toEqual(true);
        expect(linkedList.includes(8)).toEqual(false);
    });
});

describe('linked-list includes', () => {
    test('should return boolean of value if it exist in list', () => {
        const headNode = new Node(0,null);
        const linkedList = new LinkedList(headNode);
        linkedList.insert(5);
        expect(toString()).toEqual('{ 0 } -> { 5 } -> NULL');
    });
});