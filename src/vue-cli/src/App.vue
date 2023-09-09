<template>
  <NavbarVue></NavbarVue>
  <router-view></router-view>
</template>

<script>
import NavbarVue from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    NavbarVue
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
</style>
