<!-- eslint-disable max-len -->
<template>
  <section class="pt-3">
    <form class="flex flex-col gap-5" @submit="submit()">

      <div class="pt-1 pb-1 grow">
        <label for="name">Nome
          <input class="rounded-md border-white-900 border-8" type="text" id="name" v-model="pokeName"/>
        </label>
      </div>

      <div class="pt-1 pb-1 grow">
        <label for="type">Tipo
          <input class="rounded-md" type="text" id="type" v-model="pokeType">
        </label>
      </div>

      <div class="pt-1 pb-1 grow">
        <label for="img">Imagem
          <input class="rounded-md" type="file" id="img" @change="onFileChange"/>
        </label>
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
    },
    submit() {
      this.newPokemon = new Pokemon(this.pokeName, this.pokeType, this.pokeImg);
    },
  },
};
</script>
