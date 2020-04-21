<template>
  <button class="g-button" :class=" {[`icon-${iconPosition}`]: icon ? true : false} ">
    <svg class="icon" v-if="icon">
      <use :xlink:href="`#i-${icon}`" />
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: ["icon", "iconPosition"]
};
</script>
<style lang="scss">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  > .icon {
    order: 1;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
    }
  }
  &.icon-left {
    > .icon {
      order: 1;
    }
    > .content {
      order: 2;
    }
  }
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
}
</style>