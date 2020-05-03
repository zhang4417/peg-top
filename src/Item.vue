<template>
  <div @click="xxx" :class="addClass" class="item" :data-name="name">
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
    if (this.eventBus) {
      this.eventBus.$on("update:selected", name => {
        this.active = name === this.name;
      });
    }
  },
  mounted() {
    if (this.disabled === true) {
      this.$el.style.cursor = "not-allowed";
    }
  },
  methods: {
    xxx() {
      if (this.disabled === false) {
        this.eventBus&&this.eventBus.$emit("update:selected", this.name, this);
      }else{
        this.$emit('click',this)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$selected-color: blue;
.item {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  cursor: pointer;
  &.item-active {
    color: $selected-color;
  }
  &.item-disabled {
    background: #fff;
    color: #ddd;
  }
}
</style>