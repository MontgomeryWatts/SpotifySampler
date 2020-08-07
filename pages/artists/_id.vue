<template>
  <b-container fluid="md">
    <artist-profile :artist="artist" />

    <b-row class="mt-2">
      <b-col
        v-for="album in artist.albums"
        :key="album._id"
        sm="12"
        md="6"
        class="mb-2"
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
import ArtistProfile from '@/components/ArtistProfile.vue';
import AlbumPreview from '@/components/AlbumPreview.vue';

export default Vue.extend({
  name: 'ArtistPage',
  components: {
    ArtistProfile,
    AlbumPreview
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
