<template>
  <div class="card">
    <img :src="thumbnail" class="thumb" />

    <h3>{{ title }}</h3>
    <p class="description">{{ description }}</p>

    <div class="price">{{ price }} €</div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  thumbnail: String,
  price: Number,
  description: String
});
</script>

<style scoped>
.card {
  background: #fff;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.thumb {
  width: 100%;
  border-radius: 10px;
}

.price {
  font-weight: bold;
  color: #2c7;
}

.description {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
