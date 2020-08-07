<template functional>
  <b-button pill size="sm" :href="props.spotifyUri" class="spotify-green">
    <b-img-lazy
      src="~/assets/Spotify_Icon_RGB_White.png"
      height="20"
      width="20"
    />
    View on Spotify
  </b-button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SpotifyButton',
  props: {
    spotifyUri: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.spotify-green {
  background-color: #1db954;
  border-color: #1db954;
}
</style>
