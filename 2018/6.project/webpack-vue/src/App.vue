<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
     <!-- <router-link to="/home">点击进入不存在的路径</router-link> -->
     <router-link to="/Home">Home</router-link>
     <router-link to="/">Index</router-link>
     <router-view/>
    <br>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
