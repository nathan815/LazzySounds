<script>
  import Navbar from './Navbar';
  import ButtonTest from './components/ButtonTest';
  import mp3s from './loadFiles';
  export default {
      components: { Navbar, ButtonTest },
      data() {
        return {
          hello: false,
          files: mp3s
        }
      },
      methods: {
          playSound(fileName) {
            const path = require('./assets/mp3/' + fileName);
            var audio = new Audio(path);
            audio.play();
          }
      }
  }
</script>
<template>
  <div id="app">
    <navbar />
      <div :key="file" v-for="file in files">
          <button-test @play-sound="playSound" :text="file"></button-test>
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
