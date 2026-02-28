<script setup lang="ts">
import Welcome from './components/Welcome.vue';

import { reactive, computed } from 'vue';

import { TrustGraph } from './services/trust';
import { Round, Trade, Bundle, Node } from './services/simulation';

const GameState: any = reactive({
  merchantCount: 4,
  roundCap: 3,
  graph: null,
});

const publicTrust = computed(() => {
  return (
    GameState.graph?.nodes
      .map((node: Node) => node.trust)
      .reduce((a: number, b: number) => a + b, 0) /
      GameState.graph?.nodes.length || 0
  );
});

function startGame() {
  const nodes = [];
  for (let i = 0; i < GameState.merchantCount; i++) {
    nodes.push(new Node(`Merchant ${i + 1}`));
  }

  const graph = new TrustGraph(nodes);
  GameState.graph = graph;
}
</script>

<template>
  <Welcome />
</template>

<style src="./style/reset.css"></style>
<style>
/* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&display=swap');

:root {
  --font-primary:
    'Stack Sans Notch', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';

  --clr-black-1: #121212;
  --clr-black-2: #333;
  --clr-white-1: #fff;
  --clr-white-2: #eee;

  --clr-text: var(--clr-black-1);
  --clr-bg: var(--clr-white-2);
}

::selection {
  background-color: var(--clr-text);
  color: var(--clr-bg);
}

/* Do not use !important inside layers */
@layer reset, base, components, utilities;

@layer base {
  body {
    font-family: var(--font-primary);
    color: var(--clr-text);
    background-color: var(--clr-bg);
  }
}
</style>
