<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Pokemon } from './types/Pokemon';
import { fetchPokemons } from './services/pokemonService';
import PokemonCard from './components/PokemonCard.vue';
import SearchBar from './components/SearchBar.vue';

const pokemons = ref<Pokemon[]>([]);
const searchQuery = ref('');
const loading = ref(true);

const filteredPokemons = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return pokemons.value.filter(pokemon => 
    pokemon.name.toLowerCase().includes(query) ||
    pokemon.types.some(type => type.toLowerCase().includes(query))
  );
});

const handleSearch = (query: string) => {
  searchQuery.value = query;
};

onMounted(async () => {
  loading.value = true;
  pokemons.value = await fetchPokemons();
  loading.value = false;
});
</script>

<template>
  <div class="container">
    <header>
      <h1>Pokédex</h1>
      <p>First Generation - Original 151 Pokémon</p>
    </header>
    
    <SearchBar @search="handleSearch" />
    
    <div v-if="loading" class="loading">
      <p>Loading Pokémon data...</p>
    </div>
    
    <div v-else class="pokemon-grid">
      <PokemonCard 
        v-for="pokemon in filteredPokemons" 
        :key="pokemon.id" 
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<style>
:root {
  --primary-color: #FF5350;
  --secondary-color: #1B53BA;
}

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

header h1 {
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

header p {
  color: var(--secondary-color);
  font-size: 1.1rem;
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: var(--secondary-color);
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  header h1 {
    font-size: 2rem;
  }
}
</style>