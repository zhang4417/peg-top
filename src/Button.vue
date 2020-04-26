<template>
  <button
    class="p-button"
    :class=" {[`icon-${iconPosition}`]: icon ? true : false} "
    @click="$emit('click')"
  >
    <p-icon class="p-icon" :name="icon" v-if="icon && !loading"></p-icon>
    <p-icon class="loading g-icon" name="loading" v-if="loading"></p-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  components: { "g-icon": Icon },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
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
<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.p-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  .loading {
    animation: spin 1s infinite linear;
  }
  .p-icon {
    order: 1;
    margin-right: 0.2em;
  }
  .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .g-icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.2em;
    }
  }
  &.icon-left {
    > .g-icon {
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