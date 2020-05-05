<template>
  <div class="body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Body"
};
</script>

<style lang="scss" scoped>
.body {
  flex-grow: 1;
}
</style>