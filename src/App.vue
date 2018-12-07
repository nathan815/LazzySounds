<script>
  import Navbar from './Navbar';
  import ButtonTest from './components/ButtonTest';
  import SoundClipButton from './components/SoundClipButton';
  export default {
      components: { Navbar, ButtonTest, SoundClipButton },
      data() {
        return {
          hello: false,
          soundFiles: ["1","2","3","4","5","6","7","8","9","10"]
        }
      },
      methods: {
        buttonVisibilityChanged(payload) {
          console.log('button visiblility changed')
          console.log(payload);
        }
      }
  }
</script>
<template>
  <div id="app">
    <navbar />
    <button-test text="Hello world!!!" 
                 @visibility-change="buttonVisibilityChanged"
                 :visible="true" />
    <button-test text="ANother one" 
                 :visible="false" />

    <sound-clip-button v-for="file in soundFiles" v-bind:filename="file" />



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
