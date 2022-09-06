<template>
    <div class="root-element">
        <h2>Sign Up here to create your own Task App Account</h2>
        <form class="form" method="post">
            <label for="email">Email:
                <input type="email" placeholder="example@mail.com">
            </label>
            <label for="password">Password:
                <input type="password" placeholder="password">
            </label>
            <label for="password">Repeat your password:
                <input type="password" placeholder="password">
            </label>
            <button type="submit">Create an account! </button>
        </form>
        <p>Do you have an account? Click here to Sign In!</p>
    </div>
</template>

<script>
export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
    };
  },
};
</script>
