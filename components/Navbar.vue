<template>
  <b-navbar toggleable="sm" variant="dark" type="dark">
    <b-navbar-brand to="/">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/genres">Genres</b-nav-item>
        <b-nav-item @click="goToRandom">
          <b-icon-bootstrap-reboot />andom
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-nav-form @submit.prevent="searchArtist">
      <b-input-group>
        <b-form-input v-model="name" placeholder="Search Artists" />
        <b-input-group-append>
          <b-button type="submit">Search</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-nav-form>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  data() {
    return {
      name: '' as string
    };
  },
  methods: {
    async goToRandom(): Promise<void> {
      try {
        const artistId: string = await this.$axios.$get('/api/artists/random');
        this.$router.push(`/artists/${artistId}`);
      } catch (e) {}
    },
    searchArtist(): void {
      if (this.name) {
        this.$router.push({ path: '/artists', query: { name: this.name } });
        this.name = '';
      } else {
        this.$router.push('/artists');
      }
    }
  }
});
</script>
