<template>
    <div>
        <h2>Welcome back, sign in to your Task App Account</h2>
        <form class="form" method="post">
            <label for="email">Email:
                <input type="email" placeholder="example@mail.com" required>
            </label>
            <label for="password">Password:
                <input type="password" placeholder="password" required>
            </label>
            <button @click="handleSignIn"> Sign In! </button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignIn',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signIn']),
    handleSignIn() {
      const userData = {
        email: 'maria.cassandra@gmail.com',
        password: 'pruebasignup',
      };
      this.signIn(userData.email, userData.password);
    },
  },
};
</script>
