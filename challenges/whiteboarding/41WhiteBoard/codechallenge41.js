// Linked LIst

class Node {
  constructor (url, back = null, forward = null) {
    value: url
    back: back
    forward: forward
  }4
}

class LinkedList {
  constructor (node = null) {
    rootNode: node
    lastNode: lastNode = null
  }

  getHistoryBack(currentNode) {
    if (currentNode.back !== null) {
      return `history\back\${currentNode.back.value}`
    } else {
      return null
    }
  }

  getHistoryForward(currentNode) {
    if (currentNode.forward !== null) {
      return `history\forward\${currentNode.forward.value}`
    } else {
      return null
    }
  }

  putHistory(urlPath) {
    let newNode = new Node(urlPath)
    newNode.back = this.LinkedList.lastNode
    this.add(newNode) // add function not written
    return newNode
  }

}

