<template>
  <section>
    <h1>Welcome to Surface!</h1>
    <div class="buttons">
      <button type="button">Start Game</button>
      <button type="button">Help</button>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
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
      color: var(--clr-bg);
      background-color: var(--clr-text);
      border: none;
      border-radius: 0.5rem;
      outline: var(--clr-text) solid 2px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover,
      &:focus {
        background-color: var(--clr-bg);
        color: var(--clr-text);
      }
    }
  }
}
</style>
