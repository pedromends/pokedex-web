<template>
  <div id="app">
    <nav class="grid grid-rows-6 bg-black text-white">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/create-pokemon">Register Pokemon</router-link>
      <router-link to="/list-pokemon">List Pokemons</router-link>
      <router-link to="/edit-pokemon">Edit Pokemon</router-link>
      <router-link to="/delete-pokemon">Delete Pokemon</router-link>
    </nav>
    <section class="w-full h-screen bg-cyan-600 p-6">
      <router-view class="m-auto bg-red-600 w-2/5 h-2/4"/>
    </section>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
