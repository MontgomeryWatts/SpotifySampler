<template functional>
  <b-container>
    <b-row>
      <b-card class="shadow my-1">
        <b-media vertical-align="center">
          <template v-slot:aside>
            <b-img-lazy
              src="~/assets/Spotify_Logo_RGB_Green.png"
              height="50"
              width="150"
              alt="Spotify Logo"
            />
          </template>
          <p>
            Artist Sampler was inspired by Spotify Wrapped, a highly anticipated
            year-end event where Spotify reveals your most listened to artists,
            songs, and genres for the past twelve months.
          </p>
          <p>
            I &mdash; like many &mdash; was confused when I saw genres I've
            never heard of like
            <nuxt-link to="/genres/escape room">escape room</nuxt-link> as one
            of my top 5 genres for the year. What exactly <i>is</i> escape room
            anyways? I had to know.
          </p>
          <p>
            Unfortunately, I couldn't find a concrete definition anywhere. But
            what I <i>could</i> find was other artists that Spotify classified
            as escape room through their
            <a
              href="https://developer.spotify.com/documentation/web-api/"
              target="_blank"
              >Web API</a
            >.
          </p>
          <p>
            As I dug deeper into the genres, I had a lot of fun seeing just how
            specific they got with genres or how silly they could be. The two
            best genre names that I've found are
            <nuxt-link to="/genres/kawaii future bass"
              >kawaii future bass</nuxt-link
            >
            and
            <nuxt-link to="/genres/atmospheric doom">atmospheric doom</nuxt-link
            >.
          </p>
          <p>
            Spotify doesn't expose this data in the app, and you can't search by
            genre either. So I decided to make an application.
          </p>
        </b-media>
      </b-card>
      <b-card class="shadow my-1">
        <b-media vertical-align="center">
          <template v-slot:aside>
            <b-img-lazy
              src="~/assets/MongoDB_Logo_FullColorBlack_RGB.png"
              height="50"
              width="150"
              alt="MongoDB Logo"
            />
          </template>
          <p>
            Music, as it turns out, is a highly related domain. Artists belong
            to genres and have albums, albums have artists and tracks, and
            tracks have artists and belong to albums. I wanted to be able to
            grab all of this information in a single database query, based only
            on a genre.
          </p>
          <p>
            I could take the SQL route and set up an artist table, an album
            table, a track table, a genre table, image tables, and mapping
            tables to put it all together. Then I'd still need to write a
            complicated query with multiple joins to gather all the data
            together.
          </p>
          <p>
            <i>Or</i> I could use MongoDB and model the data to my use case.
            MongoDB is a NoSQL database that stores data in JSON-like documents.
            By structuring the documents to include these one-to-many and
            many-to-many relationships I'm able to grab all the data I need with
            one simple query.
          </p>
        </b-media>
      </b-card>
      <b-card class="shadow my-1">
        <b-media vertical-align="center">
          <template v-slot:aside>
            <b-img-lazy
              src="~/assets/nuxt-icon.png"
              height="150"
              width="150"
              alt="Nuxt Logo"
            />
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
            <b-img-lazy
              src="~/assets/AWS_logo.png"
              height="100"
              width="150"
              alt="AWS Logo"
            />
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
