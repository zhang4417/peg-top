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
$distance: 40px;
$selected-color: #c36eff;
.head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  &.head-horizontal {
    flex-direction: column;
    border-right: 1px solid grey;
  }
  &.head-vertical {
    flex-direction: row;
    border-bottom: 1px solid grey;
    height: $distance;
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
    padding-bottom: 0.5em;
    padding-top: 0.5em;
    &.switch-vertical {
      margin-left: auto;
    }
    &.switch-horizontal {
      margin-top: auto;
    }
  }
}
</style>