<script setup lang="ts">
import Game from './components/Game.vue';
import { ref } from 'vue';

const gameVisible = ref(false);
</script>

<template>
  <section class="welcome" v-if="!gameVisible">
    <h1>Welcome to Surface!</h1>
    <div class="buttons">
      <button type="button" @click="gameVisible = true">Start Game</button>
      <button type="button">Help</button>
    </div>
  </section>

  <Game v-model:visible="gameVisible" />
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

  --clr-text-1: var(--clr-black-1);
  --clr-text-2: var(--clr-black-2);
  --clr-bg-1: var(--clr-white-2);
  --clr-bg-2: var(--clr-white-1);
}

::selection {
  background-color: var(--clr-text-1);
  color: var(--clr-bg-1);
}

/* Do not use !important inside layers */
@layer reset, base, components, utilities;

@layer base {
  body {
    font-family: var(--font-primary);
    color: var(--clr-text-1);
    background-color: var(--clr-bg-1);
  }
}

@layer components {
  .welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    min-height: 100vh;

    & h1 {
      font-size: 2.5rem;
      font-weight: 700;
    }

    & .buttons {
      display: flex;
      gap: 1rem;

      & button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        font-weight: 500;
        color: var(--clr-bg-1);
        background-color: var(--clr-text-1);
        border: none;
        border-radius: 0.5rem;
        outline: var(--clr-text-1) solid 2px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover,
        &:focus {
          background-color: var(--clr-bg-1);
          color: var(--clr-text-1);
        }
      }
    }
  }
}
</style>
