
<script setup>
defineProps({
  meal: Object,
  idMeal: Number,
  strMeal: String,
  strCategory: String,
  strArea: String,
  strCountry: String,
  strInstructions: String,
  strMealThumb: String
});
</script>

<template>
  <div class="meal-card">
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
    />

    <h3>{{ meal.strMeal }}</h3>

    <p>{{ meal.strArea }} - {{ meal.strCategory }}</p>

    <RouterLink :to="`/meal/${meal.idMeal}`">
      Receptes
    </RouterLink>

  </div>
</template>

<style scoped>
.meal-card {
  background: white;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.meal-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
}

.meal-card h3 {
  font-size: 16px;
  margin: 8px 0;
}

.meal-card p {
  font-size: 14px;
}
</style>
