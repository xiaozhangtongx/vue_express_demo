<template>
  <div class="register">
    <div class="registerform">
      <h2>欢迎注册本系统</h2>
      <RegisterForm />
    </div>
  </div>
</template>

<script>
  import RegisterForm from '@/views/register/components/RegisterForm'
  export default {
    name: '',
    data() {
      return {}
    },
    components: {
      RegisterForm,
    },
    methods: {},
  }
</script>

<style scoped lang="less">
  .register {
    width: 100%;
    height: 100%;
    background-image: url('./images/VCG41N1255030821.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .registerform {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 50vh;
      height: 55vh;
      padding: 4vh 7vh;
      color: rgb(0, 0, 0);
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 10px;
      background-size: 50vh 55vh;
      transition: all 0.1s;
      h2 {
        text-align: center;
      }
    }
  }
</style>
