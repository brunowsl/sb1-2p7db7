import { Animal } from '../types/Animal';

export const animals: Animal[] = [
  {
    id: 1,
    name: "Lion",
    scientificName: "Panthera leo",
    type: "Mammal",
    habitat: "Savanna",
    diet: "Carnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
    description: "Known as the king of the jungle, lions are the only cats that live in groups."
  },
  {
    id: 2,
    name: "Emperor Penguin",
    scientificName: "Aptenodytes forsteri",
    type: "Bird",
    habitat: "Antarctica",
    diet: "Carnivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Emperor_Penguin_Manchot_empereur.jpg",
    description: "The largest of all penguin species, known for their incredible survival in extreme cold."
  },
  {
    id: 3,
    name: "Red Kangaroo",
    scientificName: "Macropus rufus",
    type: "Mammal",
    habitat: "Australian Outback",
    diet: "Herbivore",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Kangaroo_Australia_01_11_2008_-_retouch.jpg",
    description: "The largest of all kangaroo species, known for powerful jumping ability."
  }
];