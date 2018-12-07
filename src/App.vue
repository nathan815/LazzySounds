<script>
  import Navbar from './Navbar';
  import mp3s from './loadFiles';
  import SoundClipButton from './components/SoundClipButton';
  
  export default {
      components: { Navbar, SoundClipButton },
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

  </div>
</template>

<style lang="scss">
  .board {
  }
  body {
    margin: 0;
    padding: 0;
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
