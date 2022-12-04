<!-- eslint-disable max-len -->
<template>
  <div id="app">
    <section class="w-full h-screen bg-green-500 flex justify-center">
      <div id="pokedex" class="absolute top-32 w-100 h-101 flex justify-center align-middle bg-pokedex bg-no-repeat bg-indigo-600">
        <div id="main-screen" class="flex justify-center grow-0 shrink-0 ml-7">
          <router-view class="w-[17rem] h-[12rem] absolute bottom-20 rounded-md bg-white border-neutral-800 border-8"/>
        </div>
      </div>
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
