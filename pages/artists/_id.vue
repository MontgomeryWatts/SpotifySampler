<template>
  <b-container fluid="md">
    <artist-preview :artist="artist" />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/types';
import Artist from '@/types/Artist';
import ArtistPreview from '@/components/ArtistPreview.vue';

export default Vue.extend({
  name: 'ArtistPage',
  components: {
    ArtistPreview
  },
  async asyncData({ $axios, params, error }: Context) {
    try {
      const artist: Artist = await $axios.$get(`/api/artists/${params.id}`);
      return { artist };
    } catch (e) {
      error({ statusCode: 404, message: 'Artist not found' });
    }
  }
});
</script>
