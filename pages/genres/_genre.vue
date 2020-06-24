<template>
  <div>
    <artist-preview
      v-for="artist in artists"
      :key="artist.uri"
      :artist="artist"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/types';
import ArtistPreview from '@/components/ArtistPreview.vue';

export default Vue.extend({
  name: 'GenrePage',
  components: {
    ArtistPreview
  },
  async asyncData({ $axios, params }: Context) {
    try {
      const artists: object[] = await $axios.$get(
        `/api/genres/${params.genre}`
      );
      return { artists };
    } catch (e) {}
  }
});
</script>
