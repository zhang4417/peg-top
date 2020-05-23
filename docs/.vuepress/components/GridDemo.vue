<template>
  <div class="grid">
    <p-row>
      <p-col span="24" justify="start" align="end" :ipad="{span:11,offset:2}" :spc="{span:6,offset:4}" :mpc="{span:5,offset:4}" :lpc="{span:2,offset:4}">1</p-col>
      <p-col span="24" :ipad="{span:11}" :spc="{span:14}" :mpc="{span:15}" :lpc="{span:18}">2</p-col>
    </p-row>
    <p-row>
      <p-col span="24"></p-col>
    </p-row>
    <p-row>
      <p-col span="6" offset="3">1</p-col>
      <p-col span="6" offset="3">2</p-col>
      <p-col span="6">3</p-col>
    </p-row>
    <p-row gap="10px">
      <p-col span="5">1</p-col>
      <p-col span="5">2</p-col>
      <p-col span="5">3</p-col>
      <p-col span="5">4</p-col>
    </p-row>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import { Row, Column } from "../../../index.js";
export default {
  components: {
    "p-row": Row,
    "p-col": Column
  },
  data(){
    return {
      content:`
<p-row>
  <p-col span="24" justify="start" align="end" :ipad="{span:11,offset:2}" :spc="{span:6,offset:4}" :mpc="{span:5,offset:4}" :lpc="{span:2,offset:4}">1</p-col>
  <p-col span="24" :ipad="{span:11}" :spc="{span:14}" :mpc="{span:15}" :lpc="{span:18}">2</p-col>
</p-row>
<p-row>
  <p-col span="24"></p-col>
</p-row>
<p-row>
  <p-col span="6" offset="3">1</p-col>
  <p-col span="6" offset="3">2</p-col>
  <p-col span="6">3</p-col>
</p-row>
<p-row gap="10px">
  <p-col span="5">1</p-col>
  <p-col span="5">2</p-col>
  <p-col span="5">3</p-col>
  <p-col span="5">4</p-col>
</p-row>
      `.trim()
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
</style>