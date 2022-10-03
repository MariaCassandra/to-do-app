<template>
  <div class="authView">
    <div v-if="showsignin">
     <SignIn />
     <br>
     <button @click="showSignUp"> I don't have an account!</button>
    </div>
    <div v-if="showsignup">
      <SignUp />
      <br>
      <button @click="showSignIn"> I already have an account!</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import userStore from '@/store/user';
import SignUp from '@/components/SignUp.vue';
import SignIn from '@/components/SignIn.vue';

export default {
  name: 'AuthView',
  components: {
    SignUp,
    SignIn,
  },
  data() {
    return {
      showsignin: true,
      showsignup: false,
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    showSignIn() {
      this.showsignin = !this.showsignin;
      this.showsignup = !this.showsignup;
    },
    showSignUp() {
      this.showsignup = !this.showsignup;
      this.showsignin = !this.showsignin;
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
  justify-items: center;
  padding: 3rem;
}
</style>
