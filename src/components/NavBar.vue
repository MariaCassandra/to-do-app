<template>
  <div class="NavBarStyle">
    <nav v-if="user !== null">
    <router-link to="/">Home</router-link> |
    <button @click="signOut">Sign Out</button> |
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

<style>
.NavBarStyle {
  background-color: #EA4C89;
}

button {
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
}

button:hover {
  background-color: #F082AC;
  cursor: pointer;
}
</style>
