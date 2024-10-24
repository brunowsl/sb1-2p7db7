<script setup lang="ts">
import type { Pokemon } from '../types/Pokemon';

defineProps<{
  pokemon: Pokemon;
}>();
</script>

<template>
  <div class="pokemon-card">
    <div class="pokemon-number">#{{ pokemon.id.toString().padStart(3, '0') }}</div>
    <img :src="pokemon.image" :alt="pokemon.name">
    <div class="pokemon-info">
      <h2>{{ pokemon.name }}</h2>
      <div class="types">
        <span 
          v-for="type in pokemon.types" 
          :key="type"
          :class="['type-badge', type.toLowerCase()]"
        >
          {{ type }}
        </span>
      </div>
      <div class="stats">
        <p><strong>Height:</strong> {{ pokemon.height }}m</p>
        <p><strong>Weight:</strong> {{ pokemon.weight }}kg</p>
      </div>
      <p class="description">{{ pokemon.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.pokemon-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  margin: 1rem;
  max-width: 300px;
  position: relative;
}

.pokemon-card:hover {
  transform: translateY(-5px);
}

.pokemon-number {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.pokemon-card img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: #f0f0f0;
  padding: 1rem;
}

.pokemon-info {
  padding: 1rem;
}

.pokemon-info h2 {
  margin: 0;
  color: #2c3e50;
}

.types {
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.type-badge {
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.normal { background-color: #A8A878; }
.fire { background-color: #F08030; }
.water { background-color: #6890F0; }
.electric { background-color: #F8D030; }
.grass { background-color: #78C850; }
.ice { background-color: #98D8D8; }
.fighting { background-color: #C03028; }
.poison { background-color: #A040A0; }
.ground { background-color: #E0C068; }
.flying { background-color: #A890F0; }
.psychic { background-color: #F85888; }
.bug { background-color: #A8B820; }
.rock { background-color: #B8A038; }
.ghost { background-color: #705898; }
.dragon { background-color: #7038F8; }
.dark { background-color: #705848; }
.steel { background-color: #B8B8D0; }
.fairy { background-color: #EE99AC; }

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