<template>
  <div id="input__names">
    <p class="animate__animated animate__fadeInUp">Mindestens <b>3</b> Spieler!</p>
    <div class="name_container animate__animated animate__zoomIn" v-if="players.length !== 0">
      <div class="player__item" v-for="player in players" :key="player.id">
        {{player.name}}<span @click="removeUser(player.id)">X</span>
      </div>
    </div>
    <div class="input_container">
      <input type="name" placeholder="Trage hier einen Namen ein" v-model="userName" class="animate__animated animate__fadeInUp" style="animation-delay: .2s">
      <div class="add_button animate__animated animate__fadeInUp" style="animation-delay: .4s">
        <CustomButton
            :name="'+'"
            @action="addUser()"
        ></CustomButton>
      </div>
    </div>
    <div class="start__game animate__animated animate__fadeInUp" id="starting_game_btn" v-if="canStarted">
      <CustomButton
          :name="'Spiel starten'"
          @action="startGame()"
      ></CustomButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.name_container {
  margin-top: .8rem;
  background: #EFEFEF;
  display: flex;
  flex-wrap: wrap;
  padding: 0.9rem 0.9rem .2rem;

  .player {
    &__item {
      margin-bottom: .7rem;
      font-weight: 200;
      padding-left: 5px;
      padding-right: 5px;
      border: 1px solid #000;
      background: #fff;
      margin-right: .8rem;
      span {
        margin-left: .5rem;
        font-weight: 400;
      }
    }
  }
}
.input_container {
  display: flex;
  flex-direction: row;
  margin-top: 2.1rem;
  input {
    outline: none;
    font-size: 1rem;
    padding-left: 1rem;
    width: calc(100% - (1rem + 5.1rem));
    margin-right: 1rem;
  }
  .add_button {
    width: 5.1rem;
  }
}
.start__game {
  margin-top: 1.6rem;
}
</style>

<script>
import CustomButton from "@/components/Elements/CustomButton";

export default {
  name: "InputScreen",
  components: {
    CustomButton
  },
  data() {
    return {
      players: [

      ],
      userName: null,
      canStarted: false
    }
  },
  methods: {
    removeUser(userId) {
      this.players = this.players.filter((obj) => {
        return obj.id !== userId
      })
      this.checkCounting()
    },
    addUser() {
      let newUser = {
        id: Math.floor(Math.random() * 100),
        name: this.userName
      }
      this.players.push(newUser)
      this.userName = null
      this.checkCounting()
    },
    checkCounting() {
      if (this.players.length < 3) {
        if (this.canStarted === true) {
          document.getElementById("starting_game_btn").classList.add("animate__fadeOutDown")
        }
        setTimeout(() => {
          this.canStarted = false
        }, 800)
      } else {
        this.canStarted = true
      }
    },
    startGame() {
      this.$emit('finishedInput')
    }
  }
}
</script>