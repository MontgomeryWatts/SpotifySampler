<template functional>
  <b-media no-body>
    <b-media-aside vertical-align="center">
      <b-img-lazy
        v-if="props.artist.images && props.artist.images.length > 0"
        :src="props.artist.images[props.artist.images.length - 1].url"
        :alt="`${props.artist.name}'s profile picture`"
        rounded="circle"
        height="150"
        width="150"
      />
      <b-img-lazy
        v-else
        alt="Default profile picture"
        rounded="circle"
        height="150"
        width="150"
        src="~/assets/empty-artist-picture.png"
      />
    </b-media-aside>

    <b-media-body class="ml-4">
      <b-link
        :to="`/artists/${props.artist._id}`"
        class="font-weight-bold d-block"
        >{{ props.artist.name }}</b-link
      >
      <spotify-button
        :spotify-uri="`https://open.spotify.com/artist/${props.artist._id}`"
      />
    </b-media-body>
  </b-media>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import SpotifyButton from '@/components/SpotifyButton.vue';
import SimpleArtist from '@/types/SimpleArtist';

Vue.component('spotify-button', SpotifyButton);

export default Vue.extend({
  name: 'ArtistPreview',
  props: {
    artist: {
      type: Object as PropType<SimpleArtist>,
      required: true
    }
  }
});
</script>
