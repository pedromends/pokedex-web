<!-- eslint-disable -->
<template>
  <div>
    <section class="pt-2" v-if="!editing">
      <p class="pt-1 text-black text-lg">Editar Pokémon</p>
      <ul class="h-32 mt-1 text-left">
        <li class="mb-3" v-for="(pokemon, i) in pokemonList" :key="i" @click="editarPokemon(pokemon)">
          <a>{{ pokemon.name }}</a>
        </li>
      </ul>
    </section>
    <section class="pt-2" v-if="editing">
      <p class="text-black">Editando</p>
      <div class="flex flex-col gap-2" enctype="multipart/form-data">
        <div class="pt-1 grow">
          <input class="w-40 pl-1 text-black rounded-md border-solid bg-white border-gray-900 border-2" placeholder="Nome"
            type="text" id="name" v-model="editingItem.name" />
        </div>
        <div class="pb-1 grow">
          <input class="w-40 pl-1 text-black rounded-md border-solid bg-white border-gray-900 border-2" placeholder="Tipo"
            type="text" id="type" v-model="editingItem.type" />
        </div>
        <div class="w-full pt-1 pb-1 flex justify-center items-center content-center gap-5">
          <img alt="pokemon" class="w-14" v-bind:src="`data:image/png;base64,${editingItem.img}`" />
          <div>
            <input placeholder="Imagem" accept="image/*" class="w-14 text-black" type="file" ref='upPokeImage'
              @change="onImageUpload" />
          </div>
          <button
            class="h-6 text-center pl-1 text-xxxs rounded-md border-solid text-black border-gray-900 border-2 custom-button"
            @click="update()">Atualizar
          </button>
        </div>
      </div>
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
      updatedItem: new FormData(),
    };
  },
  created() {
    listPokemons().then((response) => {
      this.pokemonList = response.data;
      console.log(response.data)
    }).catch((error) => {
      console.log('erro', error);
    });
    this.updatedItem.set('img', 1);
  },
  methods: {
    editarPokemon(pokemon) {
      this.editing = true;
      this.editingItem = {
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
        img: pokemon.img,
      };
      console.log(this.editingItem);
    },
    onImageUpload() {
      const file = this.$refs.upPokeImage.files[0];
      this.updatedItem.set('img', file);
    },
    update() {
      // por enquanto é preciso atualizar a imagem todas as vezes
      this.updatedItem.set('id', this.editingItem.id);
      this.updatedItem.set('name', this.editingItem.name);
      this.updatedItem.set('oldimg', this.editingItem.img);
      this.updatedItem.set('type', this.editingItem.type);

      for (const value of this.updatedItem.values()) {
        console.log(value);
      }
      updatePokemon(this.updatedItem).then((response) => {
        console.log(JSON.stringify(response.data));
      }).catch((error) => {
        console.log(JSON.stringify(error));
      }).finally(() => {
        this.updatedItem = undefined;
        this.$router.push('/');
      });
    },
  },
};

</script>

<style scoped>
ul {
  overflow: hidden;
  overflow-y: scroll
}

a {
  color: black !important;
  transition: 0.3s ease-in-out;
  font-size: 14px;
}

a:hover {
  color: rgb(255, 166, 0) !important;
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

.custom-button {
  transition: 0.25s ease-in-out;
}

.custom-button:hover {
  background-color: lightcoral;
}
</style>
