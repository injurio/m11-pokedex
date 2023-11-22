<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/js/firebase.js'
import { collection, onSnapshot } from "firebase/firestore";

import ProductCard from '@/components/ProductCard.vue'

const pokemons = ref([])

async function getPokemons() {
  onSnapshot(collection(db, 'pokedexdata'), (querySnapshot) => {
    let pokemonsSnapshot = []
    querySnapshot.forEach((doc) => {
      let data = doc.data()
      let pokemon = {
        "name": data.name,
        "type1": data.type1,
        "type2": data.type2,
        "jpname": data.jpname,
        "evolution": data.evolution,
        "img_url": data.image_url
      }

      pokemonsSnapshot.push(pokemon)
    })
    pokemons.value = pokemonsSnapshot
  })
}

onMounted(async () => {
  console.log("Connecting to Firebase")
  await getPokemons()
})
</script>

<template>
  <div class="products">
    <ProductCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Adjust as needed for spacing */
}

.pokemon-card {
  flex-basis: calc(50% - 20px); /* Adjust width for two cards per row, minus some margin */
  margin: 10px; /* Adjust as needed for spacing */
  
}
</style>
