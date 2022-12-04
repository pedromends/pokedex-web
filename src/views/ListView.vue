<template>
  <v-carousel v-model="model" height="192" hide-delimiters>
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <div>Slide {{ i + 1 }}</div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
  }),
};
</script>
