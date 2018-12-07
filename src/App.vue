<script>
  import Navbar from './Navbar';
  import ButtonTest from './components/ButtonTest';
  import mp3s from './loadFiles';
  import SoundClipButton from './components/SoundClipButton';
  
  export default {
      components: { Navbar, ButtonTest, SoundClipButton },
      data() {
        return {
          hello: false,
          files: mp3s,
        }
      },
      methods: {
          playSound(fileName) {
            const path = require('./assets/mp3/' + fileName + '.mp3');
            const audio = new Audio(path);
            audio.play();
          }
      }
  }
</script>
<template>
  <div id="app">
    <navbar />

    <div class="board">
        <sound-clip-button v-for="file in files" :key="file" v-bind:filename="file" @play-sound="playSound" />
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #111;
}
a {
  color: #fff;
}
</style>
