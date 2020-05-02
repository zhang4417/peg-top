<template>
  <div class="head" :class="[`head-${direction}`]">
    <slot></slot>
    <div class="switch">
      <slot name="switch"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  inject: ["direction"]
};
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.head-horizontal {
    flex-direction: column;
  }
  &.head-vertical {
    flex-direction: row;
  }

  > .switch {
    border: 1px solid black;
    margin-left: auto;
  }
}
</style>