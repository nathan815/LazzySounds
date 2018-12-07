<script>
  import Navbar from './Navbar';
  import ButtonTest from './components/ButtonTest';
  export default {
      components: { Navbar, ButtonTest },
      data() {
        return {
          hello: false
        }
      }
  }
</script>
<template>
  <div id="app">
    <navbar />
    <button-test text="Hello world!!!" :visible="true" />
    <button-test text="ANother one" :visible="false" />
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
