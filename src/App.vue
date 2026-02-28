<script setup lang="ts">
import { reactive, computed } from 'vue';

import { TrustGraph } from './services/trust.js';
import { Round, Trade, Bundle, Node } from './services/simulation.js';

const GameState = reactive({
  merchantCount: 4,
  roundCap: 3,
});

const publicTrust = computed(() => {});

function startGame() {
  const nodes = [];
  for (let i = 0; i < GameState.merchantCount; i++) {
    nodes.push(new Node(`Merchant ${i + 1}`));
  }

  const graph = new TrustGraph(nodes);
}
</script>

<template>
  <h1>Test</h1>
</template>

<style scoped></style>
