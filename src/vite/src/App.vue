<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
</style>
