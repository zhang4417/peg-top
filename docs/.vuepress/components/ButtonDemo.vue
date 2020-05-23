<template>
  <div>
    <div>
      <p-button :loading.sync="loading1">按钮</p-button>
      <p-button icon="setting" :loading.sync="loading2">按钮</p-button>
      <p-button loading>按钮</p-button>
      <p-button icon="setting" iconPosition="right" :loading.sync="loading3">按钮</p-button>
    </div>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import { Button } from "../../../index.js";
export default {
  components: {
    "p-button": Button
  },
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      content: `
<p-button :loading.sync="loading1">按钮</p-button>
<p-button icon="setting" :loading.sync="loading2">按钮</p-button>
<p-button loading>按钮</p-button>
<p-button icon="setting" iconPosition="right" :loading.sync="loading3">按钮</p-button>
      `.trim()
    };
  }
};
</script>

<style>
</style>