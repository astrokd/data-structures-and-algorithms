# FIFO Animal Shelter
<!-- Short summary or background information -->
Create a FIFO Queue for and First-in, First out Animal Shelter.

## Challenge
<!-- Description of the challenge -->
- Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
- Implement the following methods:
  - enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
  - dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
enqueue will add dog or cat to back of queue with a push

dequeue will remove a dog or cat depending on preference from queue starting at the front

## API
<!-- Description of each method publicly available to your Stack and Queue-->


- [PR](https://github.com/astrokd/data-structures-and-algorithms/pull/42)