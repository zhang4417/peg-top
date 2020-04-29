<template>
  <div class="toast" :class="toastClass">
    <slot></slot>
    <div v-if="closeButton" class="line"></div>
    <div v-if="closeButton" @click="onCloseButton" class="closeButton">{{closeButton.text}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    closeDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default: {
        text: "关闭",
        callback() {
          console.log("执行该回调");
        }
      }
    },
    position: {
      type: String,
      default: "top"
    }
  },
  computed: {
    toastClass() {
      return [`position-${this.position}`];
    }
  },
  mounted() {
    if (this.autoClose === true) {
      setTimeout(() => {
        this.close();
      }, this.closeDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onCloseButton() {
      this.close();
      this.closeButton.callback();
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$background-color: rgba(0, 0, 0, 0.7);
$height: 40px;
.toast {
  background: $background-color;
  color: white;
  font-size: $font-size;
  height: $height;
  line-height: 1.8;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  align-items: center;
  padding: 2px 16px;
  > .line {
    height: 100%;
    margin: 0 16px;
    border: 1px solid #ccc;
  }
  > .closeButton {
    cursor: pointer;
  }
  &.position-top {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &.position-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.position-bottom {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>