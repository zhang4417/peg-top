<template>
  <div class="col">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Column"
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;
  border: 1px solid red;
}
</style>