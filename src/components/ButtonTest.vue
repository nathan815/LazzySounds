<script>
  export default {
    props: {
      text: String,
      visible: Boolean
    },
    data() {
      return {
        isVisible: this.visible,
      }
    },
    computed: {
    },
    methods: {
      toggle() {
        this.isVisible = !this.isVisible;
        this.$emit('visibility-change', this.isVisible);
      }
    }
  }
</script>
<template>
  <div>
  <button @click="toggle">
    {{ text }}
  </button>
  <div v-if="isVisible">
    Dropdown content
  </div>
</div>
</template>
