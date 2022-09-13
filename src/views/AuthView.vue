<template>
  <div class="authView">
    <h1>Hi there! Choose the sign up or login option</h1>
    <SignUp />
    <br>
    <SignIn />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import SignUp from '@/components/SignUp.vue';
import SignIn from '@/components/SignIn.vue';

export default {
  name: 'AuthView',
  components: {
    SignUp,
    SignIn,
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp', 'signIn']),
    handleSignUp() {
      const userData = {
        email: this.emailValue,
        password: this.passwordValue,
      };
      this.signUp(userData.email, userData.password);
    },
    handleSignIn() {
      const userData = {
        email: 'maria.cassandra@gmail.com',
        password: 'pruebasignup',
      };
      this.passwordError = this.password.length > 6 ? '' : 'Password should have more than 6 characters';
      if (!this.passwordError) {
        console.log(this.emailValue);
        console.log(this.passwordValue);
      }
      this.signIn(userData.email, userData.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      } else {
        this.$router.push({ path: '/auth' });
      }
    },
  },
};
</script>

<style>
.authView {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
