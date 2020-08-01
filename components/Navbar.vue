<template>
  <b-navbar toggleable="sm" variant="dark" type="dark">
    <b-navbar-brand to="/">SpotifyDB</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/genres">Genres</b-nav-item>
        <b-nav-item @click="goToRandom">
          <b-icon-bootstrap-reboot />andom
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  methods: {
    async goToRandom(): Promise<void> {
      try {
        const artistId: string = await this.$axios.$get('/api/artists/random');
        this.$router.push(`/artists/${artistId}`);
      } catch (e) {}
    }
  }
});
</script>
