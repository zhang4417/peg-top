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
    },
    align: {
      type: String
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
      let { span, rights, align } = this;
      return [
        span && `col-${span}`,
        rights && `right-${rights}`,
        align && `align-${align}`
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;
  border: 1px solid #bbb;

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

  display: flex;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-center {
    justify-content: center;
  }
  &.align-right {
    justify-content: flex-end;
  }
}
</style>