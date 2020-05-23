<template>
  <div>
    <p-input v-model="value"></p-input>
    <p-input value="disabled" disabled></p-input>
    <p-input value="readonly" readonly></p-input>
    <br />
    <p-input value="error" error="输入错误"></p-input>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import { Input } from "../../../index.js";
export default {
  components: { "p-input": Input },
  data() {
    return {
      content: `
<p-input v-model="value"></p-input>
<p-input value="disabled" disabled></p-input>
<p-input value="readonly" readonly></p-input>
<p-input value="error" error="输入错误"></p-input>
    `.trim()
    };
  }
};
</script>

<style lang="scss" scoped>
</style>