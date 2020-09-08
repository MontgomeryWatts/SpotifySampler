<template>
  <b-container fluid="md">
    <b-row>
      <b-col
        v-for="artist in artistsPage.artists"
        :key="artist.uri"
        sm="12"
        md="6"
        class="my-2 pl-0"
      >
        <artist-preview :artist="artist" />
      </b-col>
    </b-row>
    <b-row>
      <b-pagination-nav
        v-model="page"
        :link-gen="linkGen"
        :number-of-pages="artistsPage.numPages"
        hide-ellipsis
        use-router
        class="mt-4 d-block mx-auto"
      />
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/types';
import ArtistPreview from '@/components/ArtistPreview.vue';

export default Vue.extend({
  name: 'ArtistsPage',
  components: {
    ArtistPreview
  },
  async asyncData({ $axios, query }: Context) {
    const pageQuery: number = Number(query.page);
    const page: number = isNaN(pageQuery) ? 1 : pageQuery;
    const name = query.name;
    try {
      const artistsPage: object = await $axios.$get(`/api/artists`, {
        params: {
          page,
          name
        }
      });
      return { page, artistsPage, name };
    } catch (e) {
      return { page, artistsPage: {}, name: '' };
    }
  },
  data() {
    return {
      name: '' as string
    };
  },
  watchQuery: ['page', 'name'],
  methods: {
    linkGen(pageNumber: Number): String {
      let link = `?page=${pageNumber}`;
      if (this.name) {
        link += `&name=${this.name}`;
      }
      return link;
    }
  }
});
</script>
