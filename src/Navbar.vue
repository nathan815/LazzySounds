<script>
  export default {

  }
</script>
<template>
  <div id="nav">
    <a href="/" class="logo">LazzySounds</a>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
.logo {
  font-size: 25px;
}
ul li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
