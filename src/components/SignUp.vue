<template>
    <div>
        <h2>Sign Up here to create your own Task App Account</h2>
        <form class="form" method="post" @submit.prevent="handleSignUp">
            <label for="email">Email:
                <input v-model="newUserEmail" type="email" placeholder="example@mail.com" required>
            </label>
            <label for="password">Password:
                <input v-model="newUserPassword" type="password" placeholder="password" required>
            </label>
            <label for="password">Confirm your password:
                <input v-model="newUserPassword" type="password" placeholder="password" required>
            </label>
            <div v-if="passwordError">{{ passwordError }}</div>
            <button type="submit"  @click.prevent="handleSignUp">Create an account! </button>
        </form>
        <p>Do you have an account? Click here to Sign In!</p>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'signUp',
  data() {
    return {
      newUserEmail: '',
      newUserPassword: '',
    };
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      if (this.newUserEmail && this.newUserPassword) {
        this.signUp(this.newUserEmail, this.newUserPassword);
      }
    },
  },
};
</script>
