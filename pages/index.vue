<template>
  <div class="container">
    <h1>Counter</h1>
    <span class="counter" data-testid="counter">{{ counter }}</span>
    <div class="buttons">
      <button-increment @setIncrement="add()"></button-increment>
      <button-reset @setReset="reset()"></button-reset>
      <button-decrement @setDecrement="decrement()"></button-decrement>
    </div>
  </div>
</template>

<script>
import buttonReset from '../components/buttonReset.vue'
import buttonDecrement from '@/components/buttonDecrement.vue'
import buttonIncrement from '@/components/buttonIncrement.vue'

export default {
  name: 'IndexPage',
  components: { buttonDecrement, buttonIncrement, buttonReset },
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
    reset() {
      this.$store.commit('counter/reset')
    },
  },
}
</script>
<style>
.container {
  height: 100vh;
  width: 90vw;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container h1,
.counter {
  font-size: 4rem;
  color: rgb(16, 42, 66);
}
.btn {
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(62, 54, 78, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
}

.btn:focus {
  box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

.btn:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn:active {
  box-shadow: #d6d6e7 0 3px 7px inset;
  transform: translateY(2px);
}
</style>
