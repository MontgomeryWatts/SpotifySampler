<template>
  <b-container fluid="md">
    <b-row>
      <b-col v-for="genre in genres" :key="genre" sm="6" md="4" class="my-2">
        <b-button :to="`/genres/${genre}`" size="sm" pill>
          {{ genre }}</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/types';

export default Vue.extend({
  name: 'GenreIndexPage',
  async asyncData({ $axios, error }: Context) {
    try {
      const genres: string[] = await $axios.$get('/api/genres');
      return { genres };
    } catch (e) {
      error({
        statusCode: 500,
        message: 'Error occurred while loading genres. Try refreshing the page.'
      });
    }
  }
});
</script>
