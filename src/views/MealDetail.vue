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



<style scoped>
/* Página principal */
.detail-page {
  max-width: 1000px;
  margin: 50px auto;
  padding: 40px;
  background: #fffdf7;
  border-radius: 24px;
  box-shadow: 0 8px 35px rgba(50, 65, 45, 0.08);
  color: #354536;
}

/* Imagen de la receta */
.recipe-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 20px;
  display: block;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10);
}

/* Título */
.detail-page h1 {
  font-size: 2.8rem;
  font-weight: 800;
  color: #294b38;
  margin: 30px 0;
  text-align: center;
  letter-spacing: -1px;
}

/* Subtítulos */
.detail-page h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #64845b;
  margin-top: 35px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e4eadc;
}

/* Descripción */
.detail-page p {
  font-size: 1.05rem;
  line-height: 1.9;
  color: #59675a;
  text-align: justify;
}

/* Lista de ingredientes */
.ingredients-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

/* Cada ingrediente */
.ingredients-list li {
  background: #f0f4e9;
  padding: 15px 18px;
  border-radius: 12px;
  color: #405d43;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid #e3eadb;
}

/* Efecto al pasar el ratón */
.ingredients-list li:hover {
  background: #dfead5;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(50, 80, 45, 0.08);
}

/* Estados de carga y error */
p[v-if="loading"],
p[v-else-if="error"] {
  text-align: center;
  font-size: 1.1rem;
  padding: 30px;
  color: #64845b;
}

/* Responsive para móviles */
@media (max-width: 700px) {
  .detail-page {
    margin: 20px 12px;
    padding: 20px;
    border-radius: 16px;
  }

  .recipe-image {
    height: 260px;
  }

  .detail-page h1 {
    font-size: 2rem;
  }

  .detail-page h2 {
    font-size: 1.25rem;
  }

  .ingredients-list {
    grid-template-columns: 1fr;
  }

  .detail-page p {
    text-align: left;
    font-size: 0.95rem;
  }
}
</style>
