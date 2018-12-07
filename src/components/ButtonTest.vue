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
      emitPlayEvent() {
        this.$emit('play-sound', this.text);
      }
    }
  }
</script>
<template>
  <div>
  <button @click="emitPlayEvent">
    {{ text }}
  </button>
  <div v-if="isVisible">
    Dropdown content
  </div>
</div>
</template>
