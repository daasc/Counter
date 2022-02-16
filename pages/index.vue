<template>
  <div>
    {{ counter }}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    counter() {
      return this.$store.state.counter.counter
    },
  },
}
</script>
