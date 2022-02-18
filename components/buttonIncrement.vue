<template>
  <button class="btn" data-testid="button-increment" @click="toIncrement()">
    Increment
  </button>
</template>
<script>
export default {
  name: 'ButtonIncrement',
  methods: {
    toIncrement() {
      this.$emit('setIncrement')
    },
  },
}
</script>
