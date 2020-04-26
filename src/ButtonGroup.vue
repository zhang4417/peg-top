<template>
  <div class="group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `<button-group>里最好只能有<p-button>，你在这里用了<${name}>`
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.group {
  display: inline-flex;
  vertical-align: middle;
  > .p-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
      border-color: var(--border-color-hover);
    }
  }
}
</style>