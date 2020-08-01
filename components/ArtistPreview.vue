<template functional>
  <b-media>
    <template v-slot:aside>
      <b-link :href="props.artist.uri">
        <b-img-lazy
          v-if="props.artist.images && props.artist.images.length > 0"
          :src="props.artist.images[props.artist.images.length - 1].url"
          height="150"
          width="150"
        />
        <b-img-lazy
          v-else
          height="150"
          width="150"
          src="~/assets/empty-artist-picture.png"
        />
      </b-link>
    </template>

    <b-link :to="`/artists/${props.artist._id}`" class="font-weight-bold">{{
      props.artist.name
    }}</b-link>
  </b-media>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import SimpleArtist from '@/types/SimpleArtist';

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
