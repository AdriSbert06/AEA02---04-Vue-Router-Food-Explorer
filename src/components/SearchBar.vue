
<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const items = ref([
  'Manzana',
  'Plátano',
  'Naranja',
  'Fresa',
  'Pera'
])

const filteredItems = computed(() => {
  return items.value.filter(item =>
    item.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <div>
    <input
      v-model="search"
      type="text"
      placeholder="Buscar..."
    />
    <button @click="search = ''">Buscar</button>

    <ul>
      <li v-for="item in filteredItems" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
