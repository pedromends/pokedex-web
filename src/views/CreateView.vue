<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
  <section class="pt-3">
    <form class="flex flex-col gap-5" @submit="submit()" enctype="multipart/form-data">
      <div class="pt-1 pb-1 grow">
          <input class="w-40 pl-1 text-black rounded-md border-solid bg-white border-gray-900 border-4"
            placeholder="Nome"
            type="text" id="name" v-model="pokeName"
          />
      </div>
      <div class="pt-1 pb-1 grow">
          <input placeholder="Tipo" class="w-40 pl-1 text-black rounded-md border-solid bg-white border-gray-900 border-4" type="text" id="type" v-model="pokeType">
      </div>
      <div class="pt-1 pb-1 grow">
        <input placeholder="Imagem" accept="image/png, image/jpeg"
          class="w-40 text-xxs text-black rounded-md border-solid bg-white border-gray-900 border-4"
          type="file" ref='upPokeImage'
          @change="onImageUpload"
        />
      </div>
    </form>
  </section>
</template>

<script>
// import Pokemon from '@/models/Pokemon';
import { createPokemon } from '@/services/PokemonService';

export default {
  data() {
    return {
      pokeName: undefined,
      pokeType: undefined,
      pokeImg: undefined,
      newPokemon: new FormData(),
    };
  },
  methods: {
    onImageUpload() {
      const file = this.$refs.upPokeImage.files[0];
      this.newPokemon.append('imagem', file);
      this.submit();
    },
    submit() {
      this.newPokemon.append('nome', this.pokeName);
      this.newPokemon.append('tipo', this.pokeType);

      createPokemon(this.newPokemon).then((response) => {
        console.log(JSON.stringify(response.data));
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        this.pokeName = '';
        this.pokeType = '';
      });
    },
  },
};
</script>
