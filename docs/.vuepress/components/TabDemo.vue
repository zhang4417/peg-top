<template>
  <div>
    <p-tab :selected.sync="selectedTab" direction="horizontal">
      <p-head>
        <p-item name="math">数学</p-item>
        <p-item name="sports" :disabled="true">体育</p-item>
        <p-item name="arts">美术</p-item>
        <template v-slot:switch>
          <p-button>设置</p-button>
        </template>
      </p-head>
      <p-body>
        <p-pane name="math">Math</p-pane>
        <p-pane name="sports">Sports</p-pane>
        <p-pane name="arts">Arts</p-pane>
      </p-body>
    </p-tab>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import { Tab, Head, Item, Body, Pane, Button } from "../../../index.js";
export default {
  data() {
    return { selectedTab: "math" };
  },
  components: {
    "p-tab": Tab,
    "p-head": Head,
    "p-item": Item,
    "p-body": Body,
    "p-pane": Pane,
    "p-button": Button
  },
  data(){
    return {content:`
<p-tab :selected.sync="selectedTab" direction="horizontal">
  <p-head>
    <p-item name="math">数学</p-item>
    <p-item name="sports" :disabled="true">体育</p-item>
    <p-item name="arts">美术</p-item>
    <template v-slot:switch>
      <p-button>设置</p-button>
    </template>
  </p-head>
  <p-body>
    <p-pane name="math">Math</p-pane>
    <p-pane name="sports">Sports</p-pane>
    <p-pane name="arts">Arts</p-pane>
  </p-body>
</p-tab>
    `}
  }
};
</script>

<style lang="scss" scoped>
</style>