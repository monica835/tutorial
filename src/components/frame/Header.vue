<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" id="title">FIRSTAPP</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-nav class="ml-auto" is-nav v-if="auth.user===null">
        <b-nav-item  v-show="$route.path === '/Register' || $route.path === '/Login'|| $route.path === '/' ? true: false" v-on:click="redirect('/Login')">Login</b-nav-item>
        <b-nav-item  v-show="$route.path === '/Register' || $route.path === '/Login'|| $route.path === '/' ? true: false" @click="redirect('/Register')" >Register</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<style scoped >
</style>
<script>
import Router from 'router'
import AUTH from 'services/auth'
export default  {
  data(){
    return{
      auth:AUTH
    }
  },
    methods: {
        redirect(route){
            Router.push(route)
        }
    }
}
</script>