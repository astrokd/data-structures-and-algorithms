// Reverse a singly linked list.
// https://leetcode.com/problems/reverse-linked-list/

/*
 * INPUT: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * 
 * Declare function that accepts Linked List
 *   define a new linked list
 *   define a new linked list node set linked list head
 *   loop over input linked list
 *   append new node to new linked list
 *   set new node to equal new node next
 * 
 *   Return new linked list
 */

const { Node,LinkedList } = require('../dataStructures/linkedLists/linked-lists')

let reverseLListInt = (linkedList) => {
  let resultLL = new LinkedList()
  let current = linkedList.head

  while (current) {
    resultLL.unshift(current.value)
    current = current.next
  }

  return resultLL
}

let reverseLListRec = (linkedList) => {
  let resultLL = new LinkedList()
  let current = linkedList.head

  let helper = (node) => {
    if (!node) return null
    resultLL.unshift(node.value)
    helper(node.next)
  }

  helper(current)

  return resultLL
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const dee = new Node(4);
const eee = new Node(5);

one.next = two;
two.previous = one;

two.next = three;
three.previous = two;

three.next = dee;
dee.previous = three;

dee.next = eee;
eee.previous = dee;

const ll = new LinkedList(one);
ll.length = 5
ll.tail = eee

console.log('reverse LL Int',reverseLListInt(ll))
console.log('reverse LL Rec',reverseLListRec(ll))