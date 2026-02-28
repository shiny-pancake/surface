import { Graph } from 'graph-data-structure';

class TrustGraph {
  constructor(merchants) {
    this.graph = new Graph();
    this.merchants = merchants;
    this.pairs = this.generatePairs(this.merchants);

    this.addMerchants();
  }

  *addMerchants() {
    this.pairs.forEach((a, b) => {
      this.graph.addEdge(a, b);
    });
  }

  *generatePairs() {
    return this.merchants.flatMap((v, i) =>
      this.merchants.slice(i + 1).map((w) => [v, w]),
    );
  }
}
