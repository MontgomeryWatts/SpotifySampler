<template>
  <div class="container">
    <h1>Hi {{ name }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ArtistPage',
  async asyncData({ $axios, params }) {
    console.log(params);
    const artist = await $axios.$get(`/api/artists/${params.id}`);
    return { name: artist.name };
  }
};
</script>
