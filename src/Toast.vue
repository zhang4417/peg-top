<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast" ref="toast">
      <div class="content">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default"></div>
      </div>
      <div v-if="closeButton" class="line" ref="line"></div>
      <div v-if="closeButton" @click="onCloseButton" class="closeButton">{{closeButton.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 1,
      validator(value) {
        return value === false || typeof value === "number";
      }
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback() {
            console.log("执行该回调");
          }
        };
      }
    },
    position: {
      type: String,
      default: "top"
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    toastClass() {
      return [`position-${this.position}`];
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoClose * 1000);
    }
    this.$nextTick(() => {
      this.$refs.line.style.height = `${
        this.$refs.toast.getBoundingClientRect().height
      }px`;
    });
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit("close");
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
$animation-duration: 0.3s;
.wrapper {
  position: fixed;
  left: 50%;
  &.position-top {
    top: 0;
    transform: translateX(-50%);
    > .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration linear;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    > .toast {
      animation: fade-in $animation-duration linear;
    }
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
    > .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration linear;
    }
  }
}
$font-size: 14px;
$background-color: rgba(0, 0, 0, 0.7);
$height: 40px;
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.toast {
  background: $background-color;
  color: white;
  font-size: $font-size;
  min-height: $height;
  line-height: 1.8;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  > .content {
    padding: 8px 8px;
  }
  > .line {
    height: 100%;
    border-right: 1px solid #ccc;
  }
  > .closeButton {
    cursor: pointer;
    padding: 8px 8px;
  }
}
</style>