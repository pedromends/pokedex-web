<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <section class="pt-2" v-if="!editing">
      <p class="pt-1 text-black text-lg">Editar Pokémon</p>
      <ul class="h-32 mt-1 text-left">
        <li class="mb-3" v-for="(pokemon, i) in pokemonList" :key="i" @click="editarPokemon(pokemon)">
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
        <div class="w-full pt-1 pb-1 flex justify-between items-center content-center gap-3">
          <img alt="pokemon" class="w-14" v-bind:src="`data:image/png;base64,${editingItem.imagem}`"/>
          <div>
            <input placeholder="Imagem" accept="image/png, image/jpeg"
              class="w-14"
              type="file" ref='upPokeImage'
              @change="onImageUpload"
            />
          </div>
          <button class="h-4 text-center pl-1 text-xxxs rounded-md border-solid text-black border-gray-900 border-2 custom-button"
            @click="update(editingItem)" type="submit">Atualizar
          </button>
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
      updatedItem: undefined,
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
      this.updatedItem = new FormData();
      const file = this.$refs.upPokeImage.files[0];
      this.updatedItem.append('imagem', file);
    },
    update() {
      this.updatedItem.append('id', this.editingItem.id);
      this.updatedItem.append('nome', this.editingItem.nome);
      this.updatedItem.append('tipo', this.editingItem.tipo);

      updatePokemon(this.updatedItem).then((response) => {
        console.log(JSON.stringify(response.data));
      }).catch((error) => {
        console.log(JSON.stringify(error));
      }).finally(() => {
        alert('Pokemon registrado com sucesso');
        this.updatedItem = undefined;
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
  font-size: 14px;
}

a:hover{
  color:rgb(255, 166, 0)!important;
  font-size: 16px;
}

/* width */
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

.custom-button{
  transition: 0.25s ease-in-out;
}

.custom-button:hover{
  background-color: lightcoral;
}

</style>
