<template>
  <button
    class="p-button"
    :class=" {[`icon-${iconPosition}`]: icon ? true : false} "
    @click="onClick"
  >
    <p-icon class="p-icon" :name="icon" v-if="icon && !loading"></p-icon>
    <p-icon class="loading p-icon" name="loading" v-if="loading"></p-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  components: { "p-icon": Icon },
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
  },
  methods: {
    onClick() {
      let loadingCopy = !this.loading;
      this.$emit("update:loading", loadingCopy);
      this.$emit("click", this);
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
$button-height: 32px;
$font-size: 14px;
$button-bg: #c36eff;
$button-active-bg: #8c56b3;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

.p-button {
  font-size: $font-size;
  color: $color;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
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
    > .p-icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.2em;
    }
  }
  &.icon-left {
    > .p-icon {
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
    border-color: $border-color-hover;
  }
  &:active {
    background: $button-active-bg;
  }
}
</style>