<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Toast"
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$background-color: #ccc;
$height: 40px;
.toast {
  background: $background-color;
  font-size: $font-size;
  height: $height;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 8px 16px;
}
</style>