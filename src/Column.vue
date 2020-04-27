<template>
  <div class="col" :class="`col-${span} right-${space}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: {
    span: {
      type: [String, Number]
    },
    space: {
      type: [String, Number]
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;
  border: 1px solid red;

  @for $n from 1 through 24 {
    &.col-#{$n} {
      width: $n/24 * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.right-#{$n} {
      margin-right: $n/24 * 100%;
    }
  }
}
</style>