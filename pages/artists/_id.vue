<template>
  <div class="container">
    <h1>Hi {{ name }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/types';

export default Vue.extend({
  name: 'ArtistPage',
  async asyncData({ $axios, params, error }: Context) {
    try {
      const artist = await $axios.$get(`/api/artists/${params.id}`);
      return { name: artist.name };
    } catch (e) {
      error({ statusCode: 404, message: 'Artist not found' });
    }
  }
});
</script>
