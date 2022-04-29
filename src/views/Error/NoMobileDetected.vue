<template>
  <div id="no_mobile">
    <img src="/img/logo.svg" alt="Wahrheit oder Pflicht">
    <h1>Diese App kann nur auf einem<br>Mobilegerät aufgerufen werden.</h1>
  </div>
</template>

<style lang="scss" scoped>
#no_mobile {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  img {
    width: 15rem;
  }
}
</style>

<script>
import {mobileDetection} from "@/utils/mobileDetection";

export default {
  name: "NoMobileDetected",
  created() {
    let mobile = new mobileDetection()
    if (mobile.isMobile() === true) {
      this.$router.push("/")
    }
  }
}
</script>