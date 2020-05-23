<template>
  <div>
    <button-group>
      <p-button icon="left">上一页</p-button>
      <p-button>当前页</p-button>
      <p-button icon="right" icon-position="right">下一页</p-button>
    </button-group>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import { ButtonGroup, Button } from "../../../index.js";
export default {
  components: { "button-grop": ButtonGroup, "p-button": Button },
  data() {
    return {
      content: `
<button-group>
<p-button icon="left">上一页</p-button>
<p-button>当前页</p-button>
<p-button icon="right" icon-position="right">下一页</p-button>
</button-group>`.trim()
    };
  }
};
</script>

<style lang="scss" scoped>
</style>