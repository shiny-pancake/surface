import { Graph } from 'graph-data-structure';

class trustGraph {
  constructor(nodes) {
    this.graph = new Graph();
    this.nodes = nodes;
    this.pairs = this.generatePairs(this.nodes);

    this.addNodes();
  }

  *addNodes() {
    this.pairs.forEach((a, b) => {
      this.graph.addEdge(a, b);
    });
  }

  *generatePairs() {
    return this.nodes.flatMap((v, i) =>
      this.nodes.slice(i + 1).map((w) => (v, w)),
    );
  }
}
