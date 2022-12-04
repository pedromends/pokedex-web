<!-- eslint-disable max-len -->
<template>
  <section id="pokedex" class="absolute top-32 w-100 h-101 flex justify-center align-middle bg-pokedex bg-no-repeat text-center">
    <MainScreen/>
  </section>
</template>

<script>
// @ is an alias to /src
import MainScreen from '@/components/MainScreen.vue';

export default {
  name: 'PokeDex',
  components: {
    MainScreen,
  },
};
</script>
