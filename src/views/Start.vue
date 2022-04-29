<template>
  <div id="start">
    <div class="logo-container">
      <img src="/img/logo_cropped.svg" alt="Wahrheit oder Pflicht" id="start__logo">
    </div>
    <div class="start__content">
      <StartingScreen
        @finishedAge="finishedAge()"
        v-if="!ageFinished"
      ></StartingScreen>
      <InputScreen
        v-if="ageFinished && !inputFinished"
        @finishedInput="finishedInput()"
      ></InputScreen>
    </div>
  </div>
</template>

<script>
import StartingScreen from "@/components/StartingScreen";
import InputScreen from "@/components/InputScreen";

export default {
  name: "Start",
  components: {
    StartingScreen,
    InputScreen
  },
  data() {
    return {
      ageFinished: false,
      inputFinished: false,
    }
  },
  methods: {
    finishedAge() {
      this.ageFinished = true
    },
    finishedInput() {
      this.inputFinished = true
      document.getElementById('start__logo').style.transform = "rotate(90deg) translateY(-7.9rem)"
      document.getElementById('start__logo').style.marginTop = "2.9rem"
      document.getElementById('start__logo').style.width = "6.5rem"
    }
  }
}
</script>

<style lang="scss" scoped>
#start {
  width: 100vw;
  display: flex;
  flex-direction: column;
  .logo-container {
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  img#start__logo {
    width: 11rem;
    margin-top: 3.5rem;
    transition: all .3s ease;
  }
  .start__content {
    padding: 0 1.3rem;
    margin-top: 3rem;
  }
}
</style>