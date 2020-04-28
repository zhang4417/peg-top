<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
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
      validator
    },
    spc: {
      type: Object,
      validator
    },
    mpc: { type: Object, validator },
    lpc: { type: Object, validator }
  },
  data() {
    return { gap: "0px" };
  },
  methods: {
    addClass: (obj, str) => {
      let arr = [];
      if (!obj) {
        return [];
      } else {
        if (obj.span) {
          arr.push(`${str}-span-${obj.span}`);
        }
        if (obj.offset) {
          arr.push(`${str}-offset-${obj.offset}`);
        }
        return arr;
      }
    }
  },
  computed: {
    colStyle() {
      let { gap } = this;
      return { marginLeft: gap };
    },
    colClass() {
      let { addClass, span, offset, align, ipad, spc, mpc, lpc } = this;
      return [
        span && `span-${span}`,
        offset && `offset-${offset}`,
        align && `align-${align}`,
        ...addClass(ipad, "ipad"),
        ...addClass(spc, "spc"),
        ...addClass(mpc, "mpc"),
        ...addClass(lpc, "lpc")
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
  @media (min-width: 768px) {
    @for $n from 1 through 24 {
      &.spc-span-#{$n} {
        width: $n/24 * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.spc-offset-#{$n} {
        margin-right: $n/24 * 100%;
      }
    }
  }
  @media (min-width: 992px) {
    @for $n from 1 through 24 {
      &.mpc-span-#{$n} {
        width: $n/24 * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.mpc-offset-#{$n} {
        margin-right: $n/24 * 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    @for $n from 1 through 24 {
      &.lpc-span-#{$n} {
        width: $n/24 * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.lpc-offset-#{$n} {
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