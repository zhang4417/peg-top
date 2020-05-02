<template>
  <div :class="{active:this.active}" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Pane",
  data() {
    return { active: false };
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  }
};
</script>

<style lamg="scss" scoped>
.active {
  background: red;
}
</style>