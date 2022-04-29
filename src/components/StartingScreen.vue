<template>
  <div id="StartingScreen">
    <p class="animate__animated" :class="{'animate__fadeOutLeft': this.inputWillShow}">Willkommen bei <b>Wahrheit</b> oder <b>Pflicht</b>!</p><br>
    <p class="animate__animated" :class="{'animate__fadeOutLeft': this.inputWillShow}" style="animation-delay: .2s">
      Trage unten im Feld die Namen der Personen ein, die mitspielen werden.<br>
      Die Mitspieler werden zufällig mit deren Aufgaben oder Fragen konfrontiert.<br>
      Wird diese Aufgabe abgelehnt oder nicht beantwortet muss die Person sein Glas austrinken.
      <br><br>
      <b>Vorsicht!</b>
      <br>
      Nach dem Spiel werdet ihr nicht nüchtern sein!
    </p>
    <div class="age_check_box animate__animated" :class="{'animate__fadeOutLeft': this.inputWillShow}" style="animation-delay: .4s">
      <input type="checkbox" @change="checkAge($event)" v-model="checkedInput">
      <p>Hiermit bestätigen wir, dass wir das 18. Lebensjahr vollendet haben.</p>
    </div>
    <div class="start_game_button animate__animated animate__fadeInUp" v-if="startButtonShow" id="start_input_button" :class="{'animate__fadeOutLeft': this.inputWillShow}" style="animation-delay: .6s">
      <CustomButton
        :name="'loslegen'"
        @action="startInputName()"
      ></CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/Elements/CustomButton";

export default {
  name: "StartingScreen",
  components: {
    CustomButton
  },
  data() {
    return {
      checkedInput: false,
      startButtonShow: false,
      inputWillShow: false,
    }
  },
  methods: {
    checkAge() {
      this.$nextTick(() => {
        switch (this.checkedInput) {
          case true:
            this.startButtonShow = true
            break;
          case false:
            document.getElementById("start_input_button").classList.add("animate__fadeOutDown")
            setTimeout(() => {
              this.startButtonShow = false
            }, 1000)
            break;
        }
      })
    },
    startInputName() {
      this.inputWillShow = true
      setTimeout(() => {
        this.$emit('finishedAge')
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
#StartingScreen {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .start_game_button {
    width: 100%;
  }
  .age_check_box {
    margin-top: 3rem;
    margin-bottom: 4.2rem;
    border: 2px solid #000;
    width: calc(100% - (1.3rem * 2));
    display: flex;
    flex-direction: row;
    text-align: left;
    align-items: center;
    line-height: 1rem;
    padding: 1.3rem;
    input[type="checkbox"] {
      margin-right: 1.4rem;
      transform: scale(1.5);
      border: 2px solid #000;
      color: #fff;
      &:checked {
        background: transparent;
        color: #fff;
        position: relative;
        &:after {
          position: absolute;
          margin: auto 0;
          left: 0;
          top: 0;
          box-shadow: inset 0px 0px 0px 1px #000;
          --padding-left: 3px;
          --padding-bottom: 5px;
          overflow-x: visible;
          z-index: 99;
          width: calc(100% - var(--padding-left));
          padding-left: var(--padding-left);
          height: calc(100% - var(--padding-bottom));
          padding-bottom: var(--padding-bottom);
          background: #fff;
          content: "x";
          color: #000;
        }
      }
    }
  }
}
</style>