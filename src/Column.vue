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
    offset: {
      type: [String, Number]
    },
    align: {
      type: String
    },
    ipad: {
      type: Object,
      validator(value) {
        let keys = Object.keys(value);
        let valid = true;
        keys.forEach(key => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      }
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
      let { span, offset, align, ipad } = this;
      return [
        span && `span-${span}`,
        offset && `offset-${offset}`,
        align && `align-${align}`,
        ipad && ipad.span && `ipad-span-${ipad.span}`,
        ipad && ipad.offset && `ipad-offset-${ipad.offset}`
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
    &.span-#{$n} {
      width: $n/24 * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.offset-#{$n} {
      margin-right: $n/24 * 100%;
    }
  }
  @media (min-width: 576px) {
    @for $n from 1 through 24 {
      &.ipad-span-#{$n} {
        width: $n/24 * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.ipad-offset-#{$n} {
        margin-right: $n/24 * 100%;
      }
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