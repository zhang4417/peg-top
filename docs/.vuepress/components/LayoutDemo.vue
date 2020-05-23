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
    <pre><code>{{content}}</code></pre>
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
  },
  data() {
    return {
      content: `
<p-layout>
  <p-aside>aside</p-aside>
  <p-layout>
    <p-header>header</p-header>
    <p-content>content</p-content>
    <p-footer>footer</p-footer>
  </p-layout>
</p-layout>
    `.trim()
    };
  }
};
</script>

<style lang="scss" scoped>
.demo {
  min-height: 50px;
  border: 1px solid #bbb;
}

.layout {
  height: 50vh;
  color: #c36eff;
}
</style>