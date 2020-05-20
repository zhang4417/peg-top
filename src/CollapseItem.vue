<template>
  <div class="collapseItem">
    <div class="tittle" @click="toggle">{{tittle}}</div>
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
    },
    name: {
      type: String
    }
  },
  data() {
    return { visible: false };
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", selected => {
        if (selected.indexOf(this.name) > -1) {
          this.open();
        } else {
          this.close();
        }
      });
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    toggle() {
      if (this.visible) {
        this.eventBus.$emit("update:removeName", this.name);
      } else {
        this.eventBus && this.eventBus.$emit("update:addName", this.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$title-background: #c36eff;
.collapseItem {
  > .tittle {
    border: 1px solid #ddd;
    min-height: 32px;
    display: flex;
    align-items: center;
    margin-top: -1px;
    background: $title-background;
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