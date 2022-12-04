<!-- eslint-disable max-len -->
<template>
  <div id="app">
    <section class="w-full h-screen bg-green-500 flex justify-center bg-poke bg-repeat-round text-[13px]">
      <Pokedex/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Pokedex from '@/views/Pokedex.vue';

export default {
  name: 'MainMenu',
  components: {
    Pokedex,
  },
};
</script>

<style lang="scss">

@font-face {
  font-family: "Pokefont";
  src: url("@/fonts/poke-font.ttf");
}

#app {
  font-family: Pokefont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
