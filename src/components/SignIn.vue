<template>
    <div>
        <h2>Welcome back to Task App, please fill in your account details</h2>
        <form class="form" method="post">
            <label for="email">Email:
                <input type="email" placeholder="example@mail.com" required>
            </label>
            <label for="password">Password:
                <input type="password" placeholder="password" required>
            </label>
        </form>
        <button @click="handleSignIn"> Sign In! </button>
        <p>You don't have an account? Click here to create one!</p>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignIn',
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
