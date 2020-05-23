<template>
  <div>
    <p-popover position="left">
      <template v-slot:content>我是popover</template>
      <p-button>点击</p-button>
    </p-popover>
    <p-popover>
      <template v-slot:content>我是popover</template>
      <p-button>点击</p-button>
    </p-popover>
    <p-popover position="bottom">
      <template v-slot:content>我是popover</template>
      <p-button>点击</p-button>
    </p-popover>
    <p-popover position="right" trigger="hover">
      <template v-slot:content>我是popover</template>
      <p-button>覆盖</p-button>
    </p-popover>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import { Popover, Button } from "../../../index.js";
export default {
  components: { "p-popover": Popover, "p-button": Button },
  data(){
    return {content:`
<p-popover position="left">
  <template v-slot:content>我是popover</template>
  <p-button>点击</p-button>
</p-popover>
<p-popover>
  <template v-slot:content>我是popover</template>
  <p-button>点击</p-button>
</p-popover>
<p-popover position="bottom">
  <template v-slot:content>我是popover</template>
  <p-button>点击</p-button>
</p-popover>
<p-popover position="right" trigger="hover">
  <template v-slot:content>我是popover</template>
  <p-button>覆盖</p-button>
</p-popover>
    `}
  }
};
</script>

<style lang="scss" scoped>
</style>