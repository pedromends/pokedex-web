<template>
  <div id="app">
    <section class="w-full h-screen bg-green-500 relative">
      <router-view class="bg-red-600 w-2/6 h-2/4 absolute top-1/4 left-1/3"/>
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
