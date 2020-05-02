<template>
  <div @click="xxx" :class="addClass" class="item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Item",
  inject: ["eventBus"],
  props: {
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { active: false };
  },
  computed: {
    addClass() {
      return { "item-active": this.active, "item-disabled": this.disabled };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  },
  methods: {
    xxx() {
      if (this.disabled === false)
        this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid black;
  &.item-active {
    background: red;
  }
  &.item-disabled {
    background: #fff;
    color: #ddd;
  }
}
</style>