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
