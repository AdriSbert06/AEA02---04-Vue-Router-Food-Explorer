
<script setup>
  import { ref } from 'vue';
  const emit = defineEmits(['search']);
  const query = ref('')

  const search = () => {
      emit('search', query.value);
  }
</script>

<template>
  <div>
    <input
      v-model="query"
      type="text"
      placeholder="Buscar..."
    />
    <button @click="search">Buscar</button>
  </div>
</template>
