<template>
  <main v-if="meal" class="detail-page">

    <img :src= "meal.imatge" :alt="meal.name" class="recipe-image" />
    <h1>{{ meal.name }}</h1>

    <h2>Descripció:</h2>
    <p>{{ meal.desc }}</p>

    <h2>Ingredients:</h2>
    <ul class="ingredients-list">
      <li v-for="(ingredient, i) in meal.ingredients" :key="i">
        {{ ingredient }}
      </li>
    </ul>

    <h2>Pas a pas:</h2>
    <ol class="steps-list">
      <li v-for="(pas, i) in meal.passos" :key="i">
        {{ pas }}
      </li>
    </ol>
  </main>
  <p v-else>Recepta no trobada.</p>
</template>


<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { meals } from '../recepta.js'

const route = useRoute()

const meal = computed(() => meals.value.find((item) => item.id === Number(route.params.id)))
</script>

<style scoped>
.detail-page {
  max-width: 720px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.detail-page a {
  color: #28664d;
}

.detail-page h1 {
  margin: 1.25rem 0 0.5rem;
  color: #203d34;
}

.detail-page h2 {
  margin: 1.5rem 0 0.5rem;
  color: #203d34;
  font-size: 1.2rem;
}

.detail-page p {
  color: #47574f;
  line-height: 1.6;
}

/* Listas */
.ingredients-list,
.steps-list {
  padding-left: 1.5rem;
  color: #47574f;
  font-size: 1.1rem;
  line-height: 1.6;
}

.ingredients-list {
  list-style: disc;
}

.steps-list {
  list-style: decimal;
}

.ingredients-list li,
.steps-list li {
  margin-bottom: 0.5rem;
}

.steps-list li::marker {
  font-weight: 700;
  color: #358363;
}
</style>