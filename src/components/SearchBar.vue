<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');
const emit = defineEmits(['search']);

const handleSearch = () => {
  emit('search', searchQuery.value);
};
</script>

<template>
  <div class="search-bar">
    <input 
      type="text" 
      v-model="searchQuery"
      placeholder="Search animals..."
      @input="handleSearch"
    >
  </div>
</template>

<style scoped>
.search-bar {
  margin: 2rem 0;
}

input {
  width: 100%;
  max-width: 400px;
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

input:focus {
  border-color: #42b883;
}
</style>