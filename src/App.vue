<script>
  import Navbar from './Navbar';
  export default {
      components: { Navbar }
  }
</script>
<template>
  <div id="app">
    <navbar />

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
