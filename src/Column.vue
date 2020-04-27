<template>
  <div class="col" :class="colClass" :style="colStyle">
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
    rights: {
      type: [String, Number]
    }
  },
  data() {
    return { gap: "0px" };
  },
  computed: {
    colStyle() {
      let { gap } = this;
      return { marginLeft: gap };
    },
    colClass() {
      let { span, rights } = this;
      return [span && `col-${span}`, rights && `right-${rights}`];
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