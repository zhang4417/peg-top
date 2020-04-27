<template>
  <div :style="{marginRight:'-'+gap}">
    <div class="row">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    gap: {
      type: [String, Number]
    }
  },
  mounted() {
    console.log(this.$children);
    this.$children.forEach(vm => {
      vm.gap = this.gap;
    });
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>