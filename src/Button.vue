<template>
  <button class="g-button" :class=" {[`icon-${iconPosition}`]: icon ? true : false} ">
    <g-icon class="g-icon" :name="icon" v-if="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
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

  &.icon-right {
    > .content {
      order: 1;
    }
    > .g-icon {
      order: 2;
      margin-left: 0.2em;
    }
  }
  &.icon-left {
    > .g-icon {
      order: 1;
      margin-right: 0.2em;
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