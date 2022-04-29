<template>
  <button
    @click="prepareActions()"
    class="custom__button"
  >
    {{this.name}}
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: [
      "name"
  ],
  methods: {
    prepareActions() {
      this.$emit('action')
    }
  }
}
</script>

<style lang="scss" scoped>
button.custom__button {
  background: #000;
  color: #fff;
  font-weight: 400;
  border: 2px solid #000;
  height: 3.6rem;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-family: 'Impact', sans-serif;
  letter-spacing: 2px;
  width: 100%;
}
</style>