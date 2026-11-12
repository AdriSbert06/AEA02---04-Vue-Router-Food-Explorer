
<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const query = ref('')

const search = () => {
  emit('search', query.value)
}
</script>

<template>
  <div class="search-container">
    <input
      v-model="query"
      type="text"
      placeholder="Buscar..."
    />
    <button @click="search">Buscar</button>
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin: 20px 40px;
}

.search-container input {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
}

.search-container input:focus {
  border-color: #24543b;
}

.search-container button {
  padding: 10px 20px;
  background-color: #24543b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-container button:hover {
  background-color: #3d7655;
}
</style>
