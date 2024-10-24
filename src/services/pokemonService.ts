import axios from 'axios';
import type { Pokemon } from '../types/Pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemons(): Promise<Pokemon[]> {
  try {
    const pokemons: Pokemon[] = [];
    
    for (let i = 1; i <= 151; i++) {
      const response = await axios.get(`${BASE_URL}/pokemon/${i}`);
      const speciesResponse = await axios.get(`${BASE_URL}/pokemon-species/${i}`);
      
      const englishDescription = speciesResponse.data.flavor_text_entries.find(
        (entry: any) => entry.language.name === 'en'
      );

      pokemons.push({
        id: response.data.id,
        name: response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1),
        types: response.data.types.map((type: any) => 
          type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
        ),
        height: response.data.height / 10, // Convert to meters
        weight: response.data.weight / 10, // Convert to kg
        image: response.data.sprites.other['official-artwork'].front_default,
        description: englishDescription ? englishDescription.flavor_text.replace(/\\f|\\n/g, ' ') : ''
      });
    }
    
    return pokemons;
  } catch (error) {
    console.error('Error fetching pokemon data:', error);
    return [];
  }
}