<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
  <section class="pt-3">
    <form class="flex flex-col gap-5" @submit="submit()">
      <div class="pt-1 pb-1 grow">
          <input placeholder="Nome" class="w-40 pl-1 text-black rounded-md border-solid bg-white border-gray-900 border-4" type="text" id="name" v-model="pokeName"/>
      </div>
      <div class="pt-1 pb-1 grow">
          <input placeholder="Tipo" class="w-40 pl-1 text-black rounded-md border-solid bg-white border-gray-900 border-4" type="text" id="type" v-model="pokeType">
      </div>
      <div class="pt-1 pb-1 grow">
        <input placeholder="Imagem" class="w-40 text-xxs text-black rounded-md border-solid bg-white border-gray-900 border-4" type="file" @change="onFileChange"/>
      </div>
    </form>
  </section>
</template>

<script>
import Pokemon from '@/models/Pokemon';

export default {
  data() {
    return {
      pokeName: undefined,
      pokeType: undefined,
      pokeImg: undefined,
      newPokemon: undefined,
    };
  },
  methods: {
    onFileChange(e) {
      const { files } = e.target;
      if (!files.length) return;
      this.pokeImg = files;
      this.submit();
    },
    submit() {
      this.newPokemon = new Pokemon(this.pokeName, this.pokeType, this.pokeImg);
      console.log(this.newPokemon);
    },
  },
};
</script>
