<template functional>
  <div>
    <h1>{{ props.artist.name }}</h1>
    <img
      v-if="props.artist.images.length > 0"
      :src="props.artist.images[0].url"
    />
    <b-button
      v-for="(genre, index) in props.artist.genres"
      :key="`genre-${index}`"
      pill
    >
      {{ genre }}</b-button
    >
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Artist from '@/types/artist';

export default Vue.extend({
  name: 'ArtistPreview',
  props: {
    artist: {
      type: Object as PropType<Artist>,
      required: true
    }
  }
});
</script>
