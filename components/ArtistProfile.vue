<template functional>
  <b-media no-body>
    <b-media-aside>
      <b-img-lazy
        v-if="props.artist.images && props.artist.images.length > 0"
        height="500"
        width="500"
        :src="props.artist.images[0].url"
        :alt="`${props.artist.name}'s profile picture`"
      />
      <b-img-lazy
        v-else
        height="500"
        width="500"
        src="~/assets/empty-artist-picture.png"
        alt="Default profile picture"
      />
    </b-media-aside>
    <b-media-body class="pl-2">
      <h1>{{ props.artist.name }}</h1>

      <spotify-button :spotify-uri="props.artist.uri" />
      <div class="mt-2">
        <b-button
          v-for="genre in props.artist.genres"
          :key="genre"
          :to="`/genres/${genre}`"
          class="m-1"
          size="sm"
          pill
        >
          {{ genre }}</b-button
        >
      </div>
    </b-media-body>
  </b-media>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import SpotifyButton from '@/components/SpotifyButton.vue';
import FullArtist from '@/types/FullArtist';

Vue.component('spotify-button', SpotifyButton);

export default Vue.extend({
  name: 'ArtistProfile',
  props: {
    artist: {
      type: Object as PropType<FullArtist>,
      required: true
    }
  }
});
</script>
