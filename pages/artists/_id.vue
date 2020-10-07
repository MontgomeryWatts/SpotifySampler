<template>
  <b-container fluid="md">
    <b-row>
      <b-col md="4" sm="12">
        <b-img-lazy
          v-if="artist.images && artist.images.length > 0"
          fluid
          :src="artist.images[0].url"
          :alt="`${artist.name}'s profile picture`"
        />
        <b-img-lazy
          v-else
          fluid
          src="~/assets/empty-artist-picture.png"
          alt="Default profile picture"
        />
      </b-col>
      <b-col md="8" sm="12">
        <h1>{{ artist.name }}</h1>

        <spotify-button
          :spotify-uri="`https://open.spotify.com/artist/${artist._id}`"
        />
        <div class="mt-2">
          <b-button
            v-for="genre in artist.genres"
            :key="genre"
            :to="`/genres/${genre}`"
            class="m-1"
            size="sm"
            pill
          >
            {{ genre }}</b-button
          >
        </div>
      </b-col>
    </b-row>

    <b-row v-if="artist.albums" class="mt-2">
      <b-col cols="12" class="text-center border-bottom">
        <h1>Discography</h1>
      </b-col>
      <b-col
        v-for="album in artist.albums"
        :key="album._id"
        sm="12"
        md="6"
        class="py-2 border-bottom"
      >
        <album-preview :album="album" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/types';
import FullArtist from '@/types/FullArtist';
import AlbumPreview from '@/components/AlbumPreview.vue';
import SpotifyButton from '@/components/SpotifyButton.vue';

export default Vue.extend({
  name: 'ArtistPage',
  components: {
    AlbumPreview,
    SpotifyButton
  },
  async asyncData({ $axios, params, error }: Context) {
    try {
      const artist: FullArtist = await $axios.$get(`/api/artists/${params.id}`);
      return { artist };
    } catch (e) {
      error({ statusCode: 404, message: 'Artist not found' });
    }
  },
  data() {
    return {
      artist: {
        name: ''
      } as FullArtist
    };
  },
  head(): object {
    return {
      title: this.artist.name
    };
  }
});
</script>
