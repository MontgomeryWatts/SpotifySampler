<template>
  <div>
    <artist-preview v-if="artist" :artist="artist" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/types';
import Artist from '@/types/Artist';
import ArtistPreview from '@/components/ArtistPreview.vue';

export default Vue.extend({
  components: {
    ArtistPreview
  },
  async asyncData({ $axios }: Context) {
    try {
      const artist: Artist = await $axios.$get('/api/artists/random');
      return { artist };
    } catch (e) {
      return { artist: null };
    }
  }
});
</script>
