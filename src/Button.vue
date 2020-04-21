<template>
  <button class="g-button">按钮</button>
</template>
<script>
export default {};
</script>
<style>
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
}
.g-button:focus {
  outline: none;
}
.g-button:hover {
  border-color: var(--border-color-hover);
}
.g-button:active {
  background: var(--button-active-bg);
}
</style>