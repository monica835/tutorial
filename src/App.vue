<template>   
  <div id="app">
    <SampleHeader></SampleHeader>
    <Appbody></Appbody>
    <SideBar v-show="$route.path === '/Dashboard' || $route.path === '/subjects'|| $route.path === '/Profile' ? true: false"></SideBar>
  </div>
</template>
<script>
import SampleHeader from 'components/frame/Header.vue'
import Appbody from 'components/frame/Body.vue'
export default {
  name: 'app',
  components: {
    SampleHeader,
    Appbody
  } 
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

