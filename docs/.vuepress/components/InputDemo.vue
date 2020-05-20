<template>
  <div>
    <p-input v-model="value"></p-input>
    <p-input value="你好" disabled></p-input>
    <p-input value="你好" readonly></p-input>
    <p-input value="你好" error="输入错误"></p-input>
  </div>
</template>

<script>
import { Input } from "../../../index.js";
export default {
  components: { "p-input": Input }
};
</script>

<style lang="scss" scoped>
</style>