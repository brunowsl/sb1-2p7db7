<script setup lang="ts">
import { Animal } from '../types/Animal';

defineProps<{
  animal: Animal;
}>();
</script>

<template>
  <div class="animal-card">
    <img :src="animal.image" :alt="animal.name">
    <div class="animal-info">
      <h2>{{ animal.name }}</h2>
      <p class="scientific-name"><i>{{ animal.scientificName }}</i></p>
      <div class="stats">
        <p><strong>Type:</strong> {{ animal.type }}</p>
        <p><strong>Habitat:</strong> {{ animal.habitat }}</p>
        <p><strong>Diet:</strong> {{ animal.diet }}</p>
      </div>
      <p class="description">{{ animal.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.animal-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  margin: 1rem;
  max-width: 300px;
}

.animal-card:hover {
  transform: translateY(-5px);
}

.animal-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.animal-info {
  padding: 1rem;
}

.animal-info h2 {
  margin: 0;
  color: #2c3e50;
}

.scientific-name {
  color: #666;
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.stats {
  margin: 1rem 0;
}

.stats p {
  margin: 0.3rem 0;
  font-size: 0.9rem;
}

.description {
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
}
</style>