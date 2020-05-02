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
    return { eventBus: this.eventBus,direction:this.direction };
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
  }
};
</script>

<style lang="scss" scoped>
.tab {
  &.tab-vertical {
    display: flex;
    flex-direction: column;
  }
  &.tab-horizontal {
    display: flex;
    flex-direction: row;
  }
}
</style>