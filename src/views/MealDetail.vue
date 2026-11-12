<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from '../composable/useFetch'
import NavigatorBar from '../components/NavigatorBar.vue'

const route = useRoute()

const { data, error, loading, refetch } = useFetch(
  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.idMeal}`
)

const meal = computed(() => data.value?.meals?.[0] || null)

const ingredients = computed(() => {
  if (!meal.value) return []

  const result = []

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal.value[`strIngredient${i}`]
    const measure = meal.value[`strMeasure${i}`]

    if (ingredient && ingredient.trim()) {
      result.push(`${ingredient} - ${measure}`)
    }
  }

  return result
})

// Separar les instruccions
const passos = computed(() => {
  if (!meal.value?.strInstructions) return []

  return meal.value.strInstructions
    .split(/\r\n|\n/)
    .map(step => step.trim())
    .filter(step => step.length > 0)
})
</script>

<template>
  <NavigatorBar />

  <p v-if="loading">Carregant recepta...</p>

  <p v-else-if="error">{{ error }}</p>

  <main v-else-if="meal" class="detail-page">

    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="recipe-image"
    />

    <h1>{{ meal.strMeal }}</h1>

    <h2>Descripció:</h2>
    <p>{{ meal.strInstructions }}</p>

    <h2>Ingredients:</h2>
    <ul class="ingredients-list">
      <li v-for="(ingredient, i) in ingredients" :key="i">
        {{ ingredient }}
      </li>
    </ul>
  </main>

  <p v-else>Recepta no trobada.</p>
</template>


