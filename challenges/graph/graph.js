
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
    if (!this.adjacencyList.has(node)) this.adjacencyList.set(node, []);
  }

  //AddEdge 
  addEdge(node1, node2){
    if (!this.adjacencyList.has(node1)) this.adjacencyList.set(node1, []);
    if (!this.adjacencyList.has(node2)) this.adjacencyList.set(node2, []);

    const neighborsOfNode1 = this.adjacencyList.get(node1);
    const neighborsOfNode2 = this.adjacencyList.get(node2);

    neighborsOfNode1.push(new Edge(node2));
    neighborsOfNode2.push(new Edge(node1));
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

  //Size
  size(){
    return this.adjacencyList.size;
  }


}

module.exports = {
  Node,
  Edge,
  Graph
}

