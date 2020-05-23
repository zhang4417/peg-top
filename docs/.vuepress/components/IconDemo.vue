<template>
  <div>
    <p-row>
      <p-col span="8" justify="center" align="center">
        <p-icon name="setting"></p-icon>
      </p-col>
      <p-col span="8" justify="center" align="center">
        <p-icon name="loading"></p-icon>
      </p-col>
      <p-col span="8" justify="center" align="center">
        <p-icon name="right"></p-icon>
      </p-col>
    </p-row>
    <p-row>
      <p-col span="8" justify="center" align="center">
        <p-icon name="left"></p-icon>
      </p-col>
      <p-col span="8" justify="center" align="center">
        <p-icon name="upper"></p-icon>
      </p-col>
      <p-col span="8" justify="center" align="center">
        <p-icon name="down"></p-icon>
      </p-col>
    </p-row>
    <p-row>
      <p-col span="8" justify="center" align="center">
        <p-icon name="thumbsUp"></p-icon>
      </p-col span="8" justify="center" align="center">
      <p-col span="8" justify="center" align="center">
        <p-icon name="tips"></p-icon>
      </p-col>
      <p-col span="8" justify="center" align="center">
        <p-icon name="error"></p-icon>
      </p-col>
    </p-row>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import { Icon, Row, Column } from "../../../index.js";
export default {
  components: { "p-icon": Icon, "p-row": Row, "p-col": Column },
  data() {
    return {
      content: `
<p-icon name="setting"></p-icon>
<p-icon name="loading"></p-icon>
<p-icon name="right"></p-icon>
<p-icon name="left"></p-icon>
<p-icon name="upper"></p-icon>
<p-icon name="down"></p-icon>
<p-icon name="thumbsUp"></p-icon>
<p-icon name="tips"></p-icon>
<p-icon name="error"></p-icon>
    `.trim()
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
</style>