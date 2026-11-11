
<script setup>
import { ref, onMounted } from 'vue'
import { useFetch } from '../composable/useFetch'
import MealCard from '../components/MealCard.vue'

const search = ref('')

const {
  meals,
  loading,
  error,
  searchMeals
} = useFetch()

// Cargar recetas de pollo al entrar en Home
onMounted(() => {
  searchMeals('chicken')
})

// Buscar recetas
const searchRecipe = () => {
  if (search.value.trim()) {
    searchMeals(search.value)
  }
}
</script>

<template>
  <div class="home">

    
    <!-- Buscador -->
    <div class="search">
      <input
        v-model="search"
        placeholder="Cerca una recepta..."
        @keyup.enter="searchRecipe"
      />

      <button @click="searchRecipe">
        Buscar
      </button>
    </div>

    <p v-if="loading">Cargando recetas...</p>

    <p v-if="error">{{ error }}</p>

    <!-- Listado de tarjetas -->
    <div class="meals-container">
      <MealCard
        v-for="item in meals"
        :key="item.idMeal"
        :meal="item"
      />
    </div>

    <p v-if="!loading && meals.length === 0">
      No se han encontrado recetas.
    </p>

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
