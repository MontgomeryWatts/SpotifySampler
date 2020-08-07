<template>
  <b-container fluid="md">
    <b-row>
      <b-col
        v-for="genre in genresPage.genres"
        :key="genre._id"
        sm="6"
        md="3"
        class="my-2"
      >
        <b-button :to="`/genres/${genre._id}`" size="sm" pill>
          {{ genre._id }}
          <b-badge variant="light">{{ genre.numArtists }}</b-badge>
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-pagination-nav
        v-model="page"
        :link-gen="linkGen"
        :number-of-pages="genresPage.numPages"
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

export default Vue.extend({
  name: 'GenreIndexPage',
  async asyncData({ $axios, query, error }: Context) {
    const pageQuery: number = Number(query.page);
    const page: number = isNaN(pageQuery) ? 1 : pageQuery;
    try {
      const genresPage: object = await $axios.$get('/api/genres', {
        params: {
          page
        }
      });
      return { page, genresPage };
    } catch (e) {
      error({
        statusCode: 500,
        message: 'Error occurred while loading genres. Try refreshing the page.'
      });
    }
  },
  watchQuery: ['page'],
  methods: {
    linkGen(pageNumber: Number): String {
      return `?page=${pageNumber}`;
    }
  },
  head(): object {
    return {
      title: 'Spotify Genres'
    };
  }
});
</script>
