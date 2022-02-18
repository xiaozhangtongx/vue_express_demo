<template>
  <div class="login">
    <div class="loginform">
      <h1>Hello !</h1>
      <h2>欢迎来到xxx系统</h2>
      <LoginForm />
    </div>
  </div>
</template>

<script>
  import LoginForm from '@/views/login/components/LoginForm'
  export default {
    name: '',
    data() {
      return {}
    },
    components: {
      LoginForm,
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .login {
    width: 100%;
    height: 100%;
    background-image: url('./images/BG.png');
    background-size: cover;
    .loginform {
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      top: 20vh;
      right: 6vw;
      width: 50vh;
      height: 55vh;
      padding: 2vh 5vh;
      color: #fff;
      background-image: url('./images/login_form.png');
      background-size: 50vh 55vh;
      transition: all 0.1s;
    }
  }
</style>
