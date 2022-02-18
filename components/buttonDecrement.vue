<template>
  <button class="btn" data-testid="button-decrement" @click="toDecrement()">
    Decrement
  </button>
</template>
<script>
export default {
  name: 'ButtonDecrement',
  methods: {
    toDecrement() {
      this.$emit('setDecrement')
    },
  },
}
</script>
<style lang="scss"></style>
