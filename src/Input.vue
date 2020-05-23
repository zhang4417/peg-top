<template>
  <div class="wrapper" :class="{error:error}">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change',$event)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event)"
      @blur="$emit('blur',$event)"
    />
    <div class="error-content" v-if="error">
      <Icon name="error" fill="rgb(240, 71, 71)"></Icon>
      <span>{{error}}</span>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  name: "Input",
  components: { Icon },
  props: {
    value: {},
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  watch: {
    value() {
      console.log(this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$border-color: #999;
//$border-color: #c36eff;
$border-radius: 4px;
//$border-color-hover: #666;
$border-color-hover: #8c56b3;
$box-shadow-color: #c36eff;
$color: rgb(240, 71, 71);
.wrapper {
  font-size: $font-size;
  display: inline-block;
  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 2px $box-shadow-color;
    }
    &:disabled,
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    input {
      border-color: $color;
      &:focus {
        outline: none;
        box-shadow: inset 0 1px 2px rgba(255, 0, 0, 0.5);
      }
    }
    .error-content {
      display: flex;
      align-items: center;
      vertical-align: middle;
      color: $color;
    }
  }
}
</style>