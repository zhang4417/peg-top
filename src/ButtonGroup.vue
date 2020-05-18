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
$border-radius: 4px;
$border-color-hover: #666;
.group {
  display: inline-flex;
  vertical-align: middle;
  > .p-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
      border-color: $border-color-hover;
    }
  }
}
</style>