<template>
  <div>
    <p-button @click="showToast('top')">Top</p-button>
    <p-button @click="showToast('middle')">Middle</p-button>
    <p-button @click="showToast('bottom')">Bottom</p-button>
    <p-button @click="autoCloseToast('bottom')">AutoClose</p-button>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Toast } from "../../../index.js";
Vue.use(Toast);
export default {
  components: { "p-button": Button },
  methods: {
    showToast(position) {
      this.$toast("你好啊，朋友！", {
        propsData: {
          closeButton: {
            text: "Yes",
            callback() {
              console.log("执行了");
            }
          },
          autoClose: false,
          position: position
        }
      });
    },
    autoCloseToast(position) {
      this.$toast("2秒后自动关闭！", {
        propsData: {
          autoClose: 2,
          position: position
        }
      });
    }
  },
  data() {
    return {
      content: `
methods: {
  showToast(position) {
    this.$toast("你好啊，朋友！", {
      propsData: {
        closeButton: {
          text: "Yes",
          callback() {
            console.log("执行了");
          }
        },
        autoClose: false,
        position: position
      }
    });
  },
  autoCloseToast(position) {
    this.$toast("2秒后自动关闭！", {
      propsData: {
        autoClose: 2,
        position: position
      }
    });
  }
}
  `.trim()
    };
  }
};
</script>

<style lang="scss" scoped>
</style>