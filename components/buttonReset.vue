<template>
  <button class="btn" data-testid="button-reset" @click="toReset()">
    Reset
  </button>
</template>
<script>
export default {
  name: 'ButtonReset',
  methods: {
    toReset() {
      this.$emit('setReset')
    },
  },
}
</script>
