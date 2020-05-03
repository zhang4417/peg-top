<template>
  <div class="head" :class="[`head-${direction}`]">
    <slot></slot>
    <div class="line" :class="`line-${direction}`" ref="line"></div>
    <div class="switch" :class="`switch-${direction}`">
      <slot name="switch"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  inject: ["direction", "eventBus"],
  mounted() {
    if (this.direction === "vertical") {
      this.eventBus.$on("update:selected", (name, vm) => {
        this.$refs.line.style.width = `${
          vm.$el.getBoundingClientRect().width
        }px`;
        this.$refs.line.style.left = `${vm.$el.offsetLeft}px`;
      });
    }
    if (this.direction === "horizontal") {
      this.eventBus.$on("update:selected", (name, vm) => {
        this.$refs.line.style.height = `${
          vm.$el.getBoundingClientRect().height
        }px`;
        this.$refs.line.style.top = `${vm.$el.offsetTop}px`;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 40px;
$selected-color: blue;
.head {
  height: $height;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  &.head-horizontal {
    flex-direction: column;
  }
  &.head-vertical {
    flex-direction: row;
  }
  > .line {
    position: absolute;
    transition: all 0.3s;
    &.line-vertical {
      bottom: 0;
      border-bottom: 1px solid $selected-color;
    }
    &.line-horizontal {
      right: 0;
      border-right: 1px solid $selected-color;
    }
  }
  > .switch {
    cursor: pointer;
    &.switch-vertical {
      margin-left: auto;
    }
    &.switch-horizontal {
      margin-top: auto;
    }
  }
}
</style>