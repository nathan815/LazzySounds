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
        buttonVisibilityChanged(payload) {
          console.log('button visiblility changed');
          console.log(payload);
        },
          playSound() {
            const path = require('./assets/mp3/oops.mp3');
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
          <button-test :text="file"></button-test>
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
