<template>
  <b-container fluid="md">
    <b-row>
      <b-col v-for="artist in artists" :key="artist.uri" sm="12" md="6">
        <artist-preview :artist="artist" />
      </b-col>
    </b-row>
  </b-container>
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
  async asyncData({ $axios, params, query }: Context) {
    try {
      const artists: object[] = await $axios.$get(
        `/api/genres/${params.genre}`,
        {
          params: {
            page: query.page
          }
        }
      );
      return { artists };
    } catch (e) {
      return { artists: [] };
    }
  },
  watchQuery: ['page']
});
</script>
