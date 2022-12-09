<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
  <section class="pt-2">
    <p class="pt-1 text-black text-base">Editar Pokémon</p>
    <ul class="h-32 text-left">
      <li class="mb-3" v-for="(pokemon,i) in pokemonList" :key="i">
        <a>{{ pokemon.nome }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import { listPokemons } from '@/services/PokemonService';

export default {
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

<style scoped>

ul{
  overflow:hidden; overflow-y:scroll
}

a{
  color:black!important;
  transition: 0.3s ease-in-out;
  font-size: 16px;
}

a:hover{
  color:orange!important;
  font-size: 18px;
}
</style>
