<template>
    <div class="root-element">
        <h2>Welcome back to Task App, please fill in your account details</h2>
        <form class="form" method="post">
            <label for="email">Email:
                <input v-model ="userEmail" type="email" placeholder="example@mail.com" required>
            </label>
            <label for="password">Password:
                <input v-model="userPassword" type="password" placeholder="password" required>
            </label>
            <button type="submit" @click="handleSignIn"> Sign In! </button>
        </form>
        <p>You don't have an account? Click here to create one!</p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignIn',
  data() {
    return {
      userEmail: '',
      userPassword: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signIn']),
    handleSignIn() {
      this.signIn(this.userEmail, this.userPassword);
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>
