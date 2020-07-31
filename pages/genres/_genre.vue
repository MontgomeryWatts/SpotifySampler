<template>
  <b-container fluid="md">
    <b-row>
      <b-col v-for="artist in artists" :key="artist.uri" sm="12" md="6">
        <artist-preview :artist="artist" />
      </b-col>
      <b-col offset="4">
        <b-pagination-nav
          :link-gen="linkGen"
          number-of-pages="10"
          use-router
          class="mt-4"
        />
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
      return { artists, page: query.page };
    } catch (e) {
      return { artists: [], page: query.page };
    }
  },
  watchQuery: ['page'],
  methods: {
    linkGen(pageNumber: Number): String {
      return `?page=${pageNumber}`;
    }
  }
});
</script>
