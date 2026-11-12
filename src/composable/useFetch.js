
import { ref } from 'vue'

export function useFetch(initialUrl) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  async function refetch(url = initialUrl) {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Error al cargar los datos')
      }

      data.value = await response.json()

    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  refetch()

  return { data, error, loading, refetch }
}
