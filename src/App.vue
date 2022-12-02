<template>
  <div id="app">
    <nav class="grid grid-cols-6">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/create-pokemon">Register Pokemon</router-link>
      <router-link to="/list-pokemon">List Pokemons</router-link>
      <router-link to="/edit-pokemon">Edit Pokemon</router-link>
      <router-link to="/delete-pokemon">Delete Pokemon</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import url('./views/output.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
