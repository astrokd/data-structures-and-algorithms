# Problem Domain
Code up a function that stores data similiar to web browser back button.

Focus on the data structure and alogrithms to update

**functions**
getHistoryBack
getHistoryForward
putHistory

**node class**
  url: 'String of Url'
  back: back node
  forward: forward node

### Data structure: **Doubly linked list**

INPUT: LinkedList = (URL1),(URL2),(URL3)

OUTPUT: 

getHistoryBack({URL2}) returns => URL1
back end route:  page number history/back/ URL1

getHistoryForward({URL2}) returns => URL3
putHistory(URL4) returns => LinkedList = {URL1},{URL2},{URL3},{URL4}

### Visual 

  [{URL1},{URL2},{URL3},{URL4}]

### big(O)
get Time: O(1) Space: O(1)
put Time: O(n) Space:

### Algorithm
GetHistoryBack method
  takes in argument called currentNode
    if currentNode back property does not equal NULL
     gets the back property of the currentNode
     returns the backNode
    Else return NULL

GetHistoryForward method
  takes in argument called currentNode
    if currentNode forward property does not equal NULL
      gets the forward property of the currentNode
      returns the forwardNode
    else return NULL

### Pseudo Code
DECLARE getHistoryBack(currentNode)
  if (currentNode.back !== NULL) 
    return `history\back\${currentNode.back.url}`
  else
    return NULL

DECLARE getHistoryForward(currentNode)
  **Reverse of above**

DECLARE putHistory(urlPath)
  define node => new Node(urlPath)
  node.back => this.lastNode
  this.add(node)
  return node

### Code



