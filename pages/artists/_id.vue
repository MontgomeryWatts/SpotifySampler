<template>
  <b-container fluid="md">
    <h1>{{ artist.name }}</h1>
    <b-img-lazy
      v-if="artist.images && artist.images.length > 0"
      height="500"
      width="500"
      :src="artist.images[0].url"
    />
    <b-img-lazy
      v-else
      height="150"
      width="150"
      src="~/assets/empty-artist-picture.png"
    />
    <b-button
      v-for="genre in artist.genres"
      :key="genre"
      :to="`/genres/${genre}`"
      size="sm"
      pill
    >
      {{ genre }}</b-button
    >
    <b-row>
      <b-col v-for="album in artist.albums" :key="album._id" sm="12" md="4">
        <a :href="album.uri">
          {{ album.name }}
        </a>
        <b-img height="300" width="300" :src="album.image.url" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/types';
import FullArtist from '@/types/FullArtist';

export default Vue.extend({
  name: 'ArtistPage',
  async asyncData({ $axios, params, error }: Context) {
    try {
      const artist: FullArtist = await $axios.$get(`/api/artists/${params.id}`);
      return { artist };
    } catch (e) {
      error({ statusCode: 404, message: 'Artist not found' });
    }
  }
});
</script>
