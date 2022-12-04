<template>
  <nav class="grid grid-rows-5 text-black">
    <!-- <router-link to="/">Home</router-link> -->
    <router-link to="/create-pokemon">Registrar Pokémon</router-link>
    <router-link to="/list-pokemon">Listar Pokémons</router-link>
    <router-link to="/edit-pokemon">Editar Pokémon</router-link>
    <router-link to="/delete-pokemon">Deletar Pokémon</router-link>
    <router-link to="/about">Sobre o aplicativo</router-link>
  </nav>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'MainMenu',
  components: {
    // HelloWorld,
  },
};
</script>
