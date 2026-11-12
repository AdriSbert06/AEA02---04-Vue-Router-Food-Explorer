<script setup>
import { computed } from 'vue'
import { useFetch } from '../composable/useFetch'
import MealCard from '../components/MealCard.vue'
import NavigatorBar from '../components/NavigatorBar.vue'
import SearchBar from '../components/SearchBar.vue'

const { data, error, loading, refetch } = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')

const meals = computed(() => data.value?.meals || [])

function searchMeals(input) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(input)}`
  refetch(url)
}
</script>

<template >
  <div class="flex justify-between">
    <NavigatorBar />
    <SearchBar @search="searchMeals" />
  </div>
  

  <div class="home">
    <!-- <button @click="refetch()" class="refresh">Refresca</button> -->

    <!-- <p v-if="loading">Cargando recetas...</p> -->

    <p v-if="error">{{ error }}</p>

    <div class="meals-container">
      <MealCard
        v-for="item in meals"
        :key="item.idMeal"
        :meal="item"
      />
    </div>

    <!-- <p v-if="!loading && meals.length === 0">
      No se han encontrado recetas.
    </p> -->

  </div>
</template>

<style scoped>
.search {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin: 20px;
}

.meals-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
