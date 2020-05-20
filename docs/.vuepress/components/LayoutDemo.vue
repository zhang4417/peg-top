<template>
  <div>
    <p-layout class="layout">
      <p-aside class="demo">aside</p-aside>
      <p-layout>
        <p-header class="demo">header</p-header>
        <p-content class="demo">content</p-content>
        <p-footer class="demo">footer</p-footer>
      </p-layout>
    </p-layout>
  </div>
</template>

<script>
import { Layout, Aside, Header, Content, Footer } from "../../../index.js";
export default {
  components: {
    "p-layout": Layout,
    "p-aside": Aside,
    "p-header": Header,
    "p-content": Content,
    "p-footer": Footer
  }
};
</script>

<style lang="scss" scoped>
.demo {
  min-height: 100px;
  border: 1px solid #bbb;
}

.layout {
  height: 100vh;
}
</style>