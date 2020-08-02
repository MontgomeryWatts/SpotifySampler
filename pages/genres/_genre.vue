<template>
  <b-container fluid="md">
    <b-row>
      <b-col
        v-for="artist in artistsPage.artists"
        :key="artist.uri"
        sm="12"
        md="6"
        class="my-2 pl-0 border-bottom"
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
import SimpleArtist from '@/types/SimpleArtist';

export default Vue.extend({
  name: 'GenrePage',
  components: {
    ArtistPreview
  },
  async asyncData({ $axios, params, query }: Context) {
    const pageQuery: number = Number(query.page);
    const page: number = isNaN(pageQuery) ? 1 : pageQuery;
    try {
      const artistsPage: object = await $axios.$get(
        `/api/genres/${params.genre}`,
        {
          params: {
            page
          }
        }
      );
      return { page, artistsPage, genre: params.genre };
    } catch (e) {
      return { page, artistsPage: [], genre: params.genre };
    }
  },
  data() {
    return {
      artists: [] as SimpleArtist[],
      page: 1 as number,
      genre: '' as string
    };
  },
  watchQuery: ['page'],
  computed: {
    capitalizedGenre(): string {
      return this.genre
        .split(' ')
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join(' ');
    }
  },
  methods: {
    linkGen(pageNumber: Number): String {
      return `?page=${pageNumber}`;
    }
  },
  head(): object {
    return {
      title: `${this.capitalizedGenre} Artists`
    };
  }
});
</script>
