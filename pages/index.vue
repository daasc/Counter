<template>
  <div>
    <button-increment @setIncrement="add()"></button-increment>
    <span data-testid="counter">{{ counter }}</span>
    <button-decrement @setDecrement="decrement()"></button-decrement>
  </div>
</template>

<script>
import buttonDecrement from '@/components/buttonDecrement.vue'
import buttonIncrement from '@/components/buttonIncrement.vue'
export default {
  name: 'IndexPage',
  components: { buttonDecrement, buttonIncrement },
  computed: {
    counter() {
      return this.$store.state.counter.counter
    },
  },
  methods: {
    add() {
      this.$store.commit('counter/increment')
    },
    decrement() {
      this.$store.commit('counter/decrement')
    },
  },
}
</script>
