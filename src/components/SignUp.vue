<template>
    <div class="root-element">
        <h2>Sign Up here to create your own Task App Account</h2>
        <form class="form" method="post">
            <label for="email">Email:
                <input v-model="newUserEmail" type="email" placeholder="example@mail.com" required>
            </label>
            <label for="password">Password:
                <input v-model="newUserPassword" type="password" placeholder="password" required>
            </label>
            <label for="password">Repeat your password:
                <input v-model="repeatUserPassword" type="password" placeholder="password" required>
            </label>
            <button type="submit"  @click="handleSignUp">Create an account! </button>
        </form>
        <p>Do you have an account? Click here to Sign In!</p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'signUp',
  data() {
    return {
      newUserEmail: '',
      newUserPassword: '',
      repeatUserPassword: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      this.signUp(this.newUserEmail, this.newUserPassword);
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
