<template>
  <div class="collapseItem">
    <div class="tittle" @click="visible=!visible">{{tittle}}</div>
    <div class="content" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollapseItem",
  props: {
    tittle: {
      type: String,
      required: true
    }
  },
  data() {
    return { visible: false };
  }
};
</script>

<style lang="scss" scoped>
.collapseItem {
  > .tittle {
    border: 1px solid #ddd;
    min-height: 32px;
    display: flex;
    align-items: center;
    margin-top: -1px;
  }
  &:first-child {
    > .tittle {
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
  }
  &:last-child {
    > .tittle:last-child {
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }

  > .content {
    border: 1px solid #ddd;
    margin-top: -1px;
  }
}
</style>