<template functional>
  <b-container>
    <b-row>
      <b-card class="shadow my-1">
        <b-media vertical-align="center">
          <template v-slot:aside>
            <b-img
              src="~/assets/Spotify_Logo_RGB_Green.png"
              height="50"
              width="150"
              alt="Spotify Logo"
            ></b-img>
          </template>
          <p>
            Artist Sampler was inspired by Spotify Wrapped, a highly anticipated
            year-end event where Spotify reveals your most listened to artists
            and genres for the twelve months.
          </p>
          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </b-media>
      </b-card>
      <b-card class="shadow my-1">
        <b-media vertical-align="center">
          <template v-slot:aside>
            <b-img
              src="~/assets/MongoDB_Logo_FullColorBlack_RGB.png"
              height="50"
              width="150"
              alt="MongoDB Logo"
            ></b-img>
          </template>

          <h5 class="mt-0">Media Title</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </b-media>
      </b-card>
      <b-card class="shadow my-1">
        <b-media vertical-align="center">
          <template v-slot:aside>
            <b-img
              src="~/assets/nuxt-icon.png"
              height="150"
              width="150"
              alt="Nuxt Logo"
            ></b-img>
          </template>

          <h5 class="mt-0">Media Title</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </b-media>
      </b-card>
      <b-card class="shadow my-1">
        <b-media vertical-align="center">
          <template v-slot:aside>
            <b-img
              src="~/assets/AWS_logo.png"
              height="100"
              width="150"
              alt="AWS Logo"
            ></b-img>
          </template>

          <h5 class="mt-0">Media Title</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </b-media>
      </b-card>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>
