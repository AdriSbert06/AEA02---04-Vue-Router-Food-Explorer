<template>
  <NavigatorBar />

  <Home />
</template>

<script setup>
//import ProductsList from './components/ProductList.vue';
import NavigatorBar from './components/NavigatorBar.vue';
import Home from './views/Home.vue';
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
