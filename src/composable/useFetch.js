import { ref } from 'vue'

const API_URL = 'https://www.themealdb.com/api/json/v1/1'

export function useFetch() {
  const meals = ref([])
  const meal = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Buscar recetas por nombre
  const searchMeals = async (name) => {
    try {
      loading.value = true
      error.value = null

      const response = await fetch(`${API_URL}/search.php?s=${encodeURIComponent(name)}`)
      const data = await response.json()

      meals.value = data.meals || []
    } catch (err) {
      error.value = 'Error al buscar recetas'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  // Obtener los detalles de una receta por ID
  const getMealById = async (id) => {
    try {
      loading.value = true
      error.value = null

      const response = await fetch(`${API_URL}/lookup.php?i=${id}`)
      const data = await response.json()

      meal.value = data.meals ? data.meals[0] : null
    } catch (err) {
      error.value = 'Error al obtener la receta'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    meals,
    meal,
    loading,
    error,
    searchMeals,
    getMealById
  }
}