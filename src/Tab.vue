<template>
  <div class="tab" :class="[`tab-${direction}`]">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Tab",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      defalt: "vertical",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) < 0 ? false : true;
      }
    }
  },
  data() {
    return { eventBus: new Vue() };
  },
  provide() {
    return { eventBus: this.eventBus, direction: this.direction };
  },
  mounted() {
    this.$children.forEach(item => {
      if (item.$options.name === "Head") {
        item.$children.forEach(vm => {
          if (vm.$options.name === "Item" && vm.name === this.selected) {
            this.eventBus.$emit("update:selected", this.selected, vm);
          }
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  &.tab-vertical {
    flex-direction: column;
  }
  &.tab-horizontal {
    flex-direction: row;
  }
}
</style>