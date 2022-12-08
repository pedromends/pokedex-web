<!-- eslint-disable max-len -->
<template>
  <v-carousel v-model="model" height="192" hide-delimiters>
    <v-carousel-item v-for="(pokemon, i) in pokemonList" :key="i">
      <p class="mt-3 text-lg">{{ pokemon.nome }}</p>
      <img alt="pokemon" class="w-32  ml-auto mr-auto" v-bind:src="`data:image/png;base64,${pokemon.imagem}`"/>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { listPokemons } from '@/services/PokemonService';

export default {

  name: 'PokeDex',
  components: {
  },
  data() {
    return {
      pokemonList: undefined,
    };
  },
  created() {
    listPokemons().then((response) => {
      this.pokemonList = response.data;
      console.log(this.pokemonList);
    }).catch((error) => {
      console.log('erro', error);
    });
  },
};
</script>
