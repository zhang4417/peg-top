<template>
  <div class="layout" :class="{hasAside:hasAside}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return { hasAside: false };
  },
  mounted() {
    this.$children.forEach(child => {
      if (child.$options.name === "Aside") {
        this.hasAside = true;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasAside {
    flex-direction: row;
  }
}
</style>