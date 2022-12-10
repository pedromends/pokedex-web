<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <section class="pt-2" v-if="!editing">
      <p class="pt-1 text-black text-lg">Editar Pokémon</p>
      <ul class="h-32 mt-1 text-left">
        <li class="mb-3" v-for="(pokemon,i) in pokemonList" :key="i" @click="editarPokemon(pokemon)">
          <a>{{ pokemon.nome }}</a>
        </li>
      </ul>
    </section>
    <section class="pt-2" v-if="editing">
      <p class="text-black">Editando</p>
      <form class="flex flex-col gap-2" @submit="update()" enctype="multipart/form-data">
        <div class="pt-1 grow">
            <input class="w-40 pl-1 text-black rounded-md border-solid bg-white border-gray-900 border-2"
              placeholder="Nome"
              type="text" id="name" v-model="editingItem.nome"
            />
        </div>
        <div class="pb-1 grow">
            <input class="w-40 pl-1 text-black rounded-md border-solid bg-white border-gray-900 border-2"
              placeholder="Tipo" type="text" id="type" v-model="editingItem.tipo"
            />
        </div>
          <div class="pt-1 pb-1 flex justify-center items-center">
            <img alt="pokemon" class="w-14 " v-bind:src="`data:image/png;base64,${editingItem.imagem}`"/>
            <button type="submit" class="h-8 text-center pl-1 rounded-md border-solid text-black border-gray-900 border-2 custom-button" @click="update(editingItem)">Atualizar</button>
          </div>
      </form>
    </section>
  </div>
</template>

<script>
import { listPokemons, updatePokemon } from '@/services/PokemonService';

export default {
  data() {
    return {
      pokemonList: undefined,
      editing: false,
      editingItem: {},
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
    editarPokemon(pokemon) {
      this.editing = true;
      this.editingItem = {
        id: pokemon.id,
        nome: pokemon.nome,
        tipo: pokemon.tipo,
        imagem: pokemon.imagem,
      };
    },
    onImageUpload() {
      this.newPokemon = new FormData();
      const file = this.$refs.upPokeImage.files[0];
      this.newPokemon.append('imagem', file);
      this.submit();
    },
    update() {
      this.newPokemon.append('nome', this.pokeName);
      this.newPokemon.append('tipo', this.pokeType);

      updatePokemon(this.editingItem).then((response) => {
        console.log(JSON.stringify(response.data));
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        alert('Pokemon registrado com sucesso');
        this.pokeName = undefined;
        this.pokeType = undefined;
        this.pokeImg = undefined;
        this.newPokemon = undefined;
      });
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

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

.custom-button{
  transition: 0.25s ease-in-out;
}

.custom-button:hover{
  background-color: lightcoral;
}

</style>
