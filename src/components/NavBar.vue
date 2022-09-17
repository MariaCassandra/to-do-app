<template>
  <div class="NavBarStyle">
    <nav v-if="user !== null">
    <router-link to="/">Home</router-link> |
    <router-link to="/auth" @click="handleSignOut">Sign Out</router-link> |
  </nav>
  </div>
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

<style scoped>

.NavBarStyle {
  background-color: #EA4C89;
}

nav {
  padding: 0.75rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
