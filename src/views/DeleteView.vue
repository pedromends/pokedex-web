<!-- eslint-disable max-len -->
<template>
  <section class="pt-2">
    <p class="pt-1 text-black text-lg">Deletar Pokémon</p>
    <ul class="h-32 mt-1 text-left">
      <li class="mb-3" v-for="(pokemon,i) in pokemonList" :key="i">
        <v-dialog
          v-model="dialog"
          width="500"
          >
          <template v-slot:activator="{ on, attrs }">
            <a v-bind="attrs" v-on="on" @click="deleteFlow(pokemon.id)" @keypress="deleteFlow(pokemon.id)">
              {{ pokemon.nome }}
            </a>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Deletado com sucesso
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="flowToHome"
                >
                Ok
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </li>
    </ul>
  </section>
</template>

<script>

import { listPokemons, deletePokemon } from '@/services/PokemonService';

export default {
  data() {
    return {
      pokemonList: undefined,
      dialog: false,
    };
  },
  created() {
    listPokemons().then((response) => {
      this.pokemonList = response.data;
    }).catch((error) => {
      console.log('erro', error);
    });
  },
  methods: {
    deleteFlow(id) {
      // exibir pop-up
      deletePokemon((id)).then((response) => {
        console.log(JSON.stringify(response.data));
      }).catch((error) => {
        console.log(error);
      });
    },
    flowToHome() {
      this.dialog = false;
      this.$router.push('/');
    },
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
  color:rgb(255, 166, 0)!important;
  font-size: 18px;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 10px;
}
</style>
