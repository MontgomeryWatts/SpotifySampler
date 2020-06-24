<template>
  <div class="container">
    <artist-preview :artist="artist" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/types';
import ArtistPreview from '@/components/ArtistPreview.vue';

export default Vue.extend({
  name: 'ArtistPage',
  components: {
    ArtistPreview
  },
  async asyncData({ $axios, params, error }: Context) {
    try {
      const artist = await $axios.$get(`/api/artists/${params.id}`);
      return { artist };
    } catch (e) {
      error({ statusCode: 404, message: 'Artist not found' });
    }
  }
});
</script>
