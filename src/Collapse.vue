<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Collapse",
  data() {
    return { eventBus: new Vue() };
  },
  props: {
    single: { type: Boolean, default: false },
    selected: {
      type: Array
    }
  },
  provide() {
    return { eventBus: this.eventBus };
  },
  mounted() {
    let selectedCopy = JSON.parse(JSON.stringify(this.selected));
    this.eventBus.$emit("update:selected", selectedCopy);
    this.eventBus.$on("update:addName", name => {
      if (this.single) {
        selectedCopy = [];
        selectedCopy.push(name);
      } else {
        selectedCopy.push(name);
      }

      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
    this.eventBus.$on("update:removeName", name => {
      let index = selectedCopy.indexOf(name);
      selectedCopy.splice(index, 1);
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>