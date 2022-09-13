<!-- eslint-disable max-len -->
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

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border: 1px solid #dddd;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
