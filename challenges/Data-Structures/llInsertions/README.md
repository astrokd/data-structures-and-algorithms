# Singly Linked List
<!-- Short summary or background information -->
Implement a Linked List

## Challenge
<!-- Description of the challenge -->
- [x] Create Node Class that has two properties, a value and pointer to the next Node.
- [x] In LinkedList Class have a head property and on instantiation create an empty linked list.
- [x]  Define a method called insert that takes a value and inserts it as the head with O(1) time performance
- [x]  Define a method called include which takes a value and returns a boolean of that values existance in the linked list
- [x]  Define a method called toString which returns a string of all the values in the string formated like; `"{ a } -> { b } -> { c } -> NULL"`
- [x] Write Tests
  - [x] Can successfully instantiate an empty linked list
  - [x] Can properly insert into the linked list
  - [x] The head property will properly point to the first node in the linked list
  - [x] Can properly insert multiple nodes into the linked list
  - [x] Will return true when finding a value within the linked list that exists
  - [x] Will return false when searching for a value in the linked list that does not exist
  - [x] Can properly return a collection of all the values that exist in the linked list
- [x] Stretch Goal: Create doubly-linked-list
  - [x] [doubly linked list pull request](https://github.com/astrokd/data-structures-and-algorithms/pull/35)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

For insert I inserted the value in a new node and made that the head and made the next the oldhead.

Following the class guide I traversed the list and looped through the list with a while node.next not equal to null.

For includes I checked if the value was equal to each node.value in the list, if it was I returned true.

For toString I created a string and added the head.value, set the node.value for each node until next was equal to null



## API
<!-- Description of each method publicly available to your Linked List -->

- The insert(value) method inserts a value in the beginning of the list
- The includes(value) method checks 
- toString returns and string of the list values

*With from TA (allister)*

[Some link list testing in Replit](https://repl.it/@KevinDreyer/linkedlist)

![Whiteboard Image](./assets/linkedlist.jpg)