<template>
  <div>
    <p-collapse :selected.sync="selectedArray">
      <p-collapse-item tittle="标题1" name="1">内容1</p-collapse-item>
      <p-collapse-item tittle="标题2" name="2">内容2</p-collapse-item>
      <p-collapse-item tittle="标题3" name="3">内容3</p-collapse-item>
    </p-collapse>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import { Collapse, CollapseItem } from "../../../index.js";
export default {
  components: { "p-collapse": Collapse, "p-collapse-item": CollapseItem },
  data() {
    return {
      selectedArray: ["1", "2"],
      content: `
<p-collapse :selected.sync="selectedArray">
<p-collapse-item tittle="标题1" name="1">内容1</p-collapse-item>
<p-collapse-item tittle="标题2" name="2">内容2</p-collapse-item>
<p-collapse-item tittle="标题3" name="3">内容3</p-collapse-item>
</p-collapse>
    `.trim()
    };
  }
};
</script>

<style lang="scss" scoped>
</style>