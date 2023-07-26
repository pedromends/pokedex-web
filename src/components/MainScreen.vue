<!-- eslint-disable max-len -->
<template>
    <main id="main-screen" class="flex justify-center grow-0 shrink-0 ml-7 w-auto ">
      <router-view class="w-[17rem] h-[12rem] absolute bottom-20 rounded-md bg-mainscreen bg-repeat-round opacity-90 border-neutral-800 border-8"/>
    </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'MainScreen',
  components: {
    // HelloWorld,
  },
};
</script>
