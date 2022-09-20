<template>
    <div>
        <h2>Welcome back, sign in to your Task App Account</h2>
        <form class="form" method="post">
            <label for="email">Email:
                <input v-model="email" type="email" placeholder="example@mail.com" required>
            </label>
            <label for="password">Password:
                <input v-model="password" type="password" placeholder="password" required>
            </label>
            <button type="button" @click.prevent="handleSignIn"> Sign In! </button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signIn']),
    handleSignIn() {
      this.signIn(this.email, this.password);
    },
  },
};
</script>
