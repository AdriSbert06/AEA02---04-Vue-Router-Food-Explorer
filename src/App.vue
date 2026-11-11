<template>
  <NavigatorBar />
   <RouterLink to="/" class="hover:text-green-600">Home</RouterLink> 

  <Home />
</template>

<script setup>
import NavigatorBar from './components/NavigatorBar.vue'
import Home from './views/Home.vue'
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>