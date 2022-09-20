<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/auth" @click="handleSignOut">Sign Out</router-link> |
  </nav>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'NavBar',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser', 'signOut']),
  },
  async created() {
    try {
      await this.fetchUser();
      console.log(this.user);
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>

nav {
  background-color: #EA4C89;
  padding: 0.75rem;
  width: 100%;
  height: 10%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
