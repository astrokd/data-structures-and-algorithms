# Linked List Insertions
<!-- Short summary or background information -->
Implement a Linked List that appends to the list and inserts before and after a list.

## Challenge
<!-- Description of the challenge -->
- [x] append to the end of the list
- [x] insert before a value
- [x] insert after a value
- [x] Testing
  - [x] Can successfully add a node to the end of the linked list
  - [x] Can successfully add multiple nodes to the end of a linked list
  - [x] Can successfully insert a node before a node located in the middle of a linked list
  - [ ] Can successfully insert a node before the first node of a linked list
  - [x] Can successfully insert after a node in the middle of the linked list
  - [ ] Can successfully insert a node after the last node of the linked list

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

The append method will create a new node from the value, traverse the list and when it gets to the end assign the tails next to the new node.

The insert before value method will create a new node,traverse the list until it finds the value to insert before then assign the node before next property to the new node and the new node's next will point to the insert before node.

The insert after value method will create a new node,traverse the list until it finds the value to insert after then assign the after nodes next property to the new node and the new node's next will point to the node that was originally in the after nodes next property.

## API
<!-- Description of each method publicly available to your Linked List -->




![Whiteboard Image](./assets/linkedlist.jpg)