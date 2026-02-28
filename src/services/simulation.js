class Round {
  constructor(trades) {
    this.trades = trades;
  }

  addTrade(node_one, node_two) {
    const newTrade = new Trade(node_one, node_two, this);
    this.trades.push(newTrade);
  }

  getTrades() {
    return this.trades;
  }
}

class Trade {
  constructor(nodeOne, nodeTwo, bundle, round, toNodeTwo = true) {
    console.assert(
      nodeOne !== nodeTwo,
      'A trade cannot be between the same node',
    );
    console.assert(
      round instanceof Round,
      'The round must be an instance of the Round class',
    );

    this.node_one = nodeOne ? toNodeTwo : nodeTwo;
    this.node_two = nodeTwo ? toNodeTwo : nodeOne;
    this.parentRound = round;
    this.bundle = bundle;
  }
}

class Bundle {
  constructor(goodsNumber) {
    this.goodsNumber = goodsNumber;
  }
}

class Merchant {
  constructor(name = '') {
    this.name = name;
    this.id = crypto.randomUUID();
  }
}
