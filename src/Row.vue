<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
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
  created() {},
  mounted() {
    this.$children.forEach(vm => {
      vm.gap = this.gap;
    });
  },
  computed: {
    rowStyle() {
      let { gap } = this;
      return { marginLeft: "-" + gap };
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>