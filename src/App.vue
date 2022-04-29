<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');
body {
  margin: 0;
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
}
p {
  font-weight: 200;
  margin: 0;
}
@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
  html {
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
    left: 0;
  }
}
</style>

<script>
import {mobileDetection} from "@/utils/mobileDetection"
export default {
  name: "App",
  created() {
    let mobile = new mobileDetection()
    if (mobile.isMobile() === false) {
      this.$router.push("/mobile")
    }
  },
}
</script>