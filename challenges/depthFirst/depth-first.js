
//Queue class
class Queue {
  constructor() {
      this.front = null;
      this.storage = [];
  }

  //enqueue
  enqueue(value) {
      if (this.front === null) {this.front = value}
      return this.storage.push(value)
  }

  //dequeue
  dequeue() {
      if (this.front === null) {
          return null;
      } else {
          if (this.storage[1] === undefined) {
              this.front = null;
          } else {
              this.front = this.storage[1];
          }
          return this.storage.shift();
      }
  }

  //peek
  peek() {
      return this.front;
  }

  //isEmpty
  isEmpty() {
      return this.storage.length ? false : true;
  }
}

class Node{
  constructor(value) {
    this.value = value;
  }
}

class Edge{
  constructor(node, weight = 1){
    this.node = node;
    this.weight = weight;
  }
}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }

  //AddNode to the Map obj of the graph
  addNode(node){
    if (!this.adjacencyList.has(node)) {
      return this.adjacencyList.set(node, []);
    }
  }

  //AddEdge 
  addEdge(node1, node2, weight = 1){
    if (!this.adjacencyList.has(node1)) this.adjacencyList.set(node1, []);
    if (!this.adjacencyList.has(node2)) this.adjacencyList.set(node2, []);

    const neighborsOfNode1 = this.adjacencyList.get(node1);
    const neighborsOfNode2 = this.adjacencyList.get(node2);

    neighborsOfNode1.push(new Edge(node2,weight));
    neighborsOfNode2.push(new Edge(node1,weight));
  }

  //GetNodes
  getNodes(){
    return [... this.adjacencyList.keys()];
  }

  //GetNeighbors
  getNeighbors(node) {
    if (!this.adjacencyList.has(node)){
      return 'node does not exist in Graph'
    }
    return this.adjacencyList.get(node)
  }

  //GetEdge
  getEdge(node1,node2) {
    let result = false
    const neighbors = this.getNeighbors(node1)
    neighbors.forEach( neighbor => {
      if (neighbor.node.value === node2.value) result = neighbor.weight
    })

    return result
  }

  //Size
  size(){
    return this.adjacencyList.size;
  }

  //Breadth First Traversal
  breadthFirst(node) {
    let nodes = new Set() // keep visited node list here
    let breadth = new Queue
    breadth.enqueue(node)
    nodes.add(node)
    
    while (!breadth.isEmpty()) {
      let front = breadth.dequeue()
      let list = this.getNeighbors(front)
      // console.log('list',list)
      list.forEach(child => {
        // console.log('ch')
        if(!nodes.has(child.node)) {
          nodes.add(child.node)
          breadth.enqueue(child.node)
        }
      })
      // console.log('breadthFirst',breadth.peek())

    }
    
    return [... nodes.keys()].map(node => node.value)
  }

}

module.exports = {
  Queue,
  Node,
  Edge,
  Graph
}

