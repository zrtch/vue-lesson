<template>
  <div id="app">
    <img alt="Vue logo"
         src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <List />
    <proxy />
    <Authors />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import List from './components/list.vue'
import Proxy from './components/proxy.vue'
import Authors from './components/author.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    List,
    Proxy,
    Authors
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
