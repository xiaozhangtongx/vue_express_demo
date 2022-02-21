<template>
  <div>
    <el-form :model="userInfo" status-icon :rules="rules" ref="userInfo" class="demo-userInfo">
      <!-- 账号 -->
      <el-form-item prop="phonenum">
        <el-input placeholder="请输入您的账号" prefix-icon="el-icon-s-custom" v-model="userInfo.phonenum" autocomplete="off" @keyup.enter.native="focusNext('password')"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input
          placeholder="请输入您的密码"
          prefix-icon="el-icon-lock"
          type="password"
          show-password
          v-model="userInfo.password"
          autocomplete="off"
          ref="password"
          @keyup.enter.native="submitForm('userInfo')"
        >
        </el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="captcha" class="captcha">
        <el-input placeholder="请输入验证码" v-model="userInfo.captcha" class="captcha-num"> </el-input>
        <img class="captcha-img" src="http://localhost:9002/api/codeimg" ref="img_codeRef" alt="看不清？点击刷新" @click="changeCodeimg" />
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('userInfo')">登录</el-button>
        <el-button @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {
          phonenum: '12345678911',
          password: '123456',
          captcha: '',
        },
        rules: {
          phonenum: [{ required: true, message: '请输入您的账号', trigger: 'blur' }],
          password: [
            { required: true, message: '请输入您的密码', trigger: 'blur' },
            { len: 6, message: '请输入长度为6位的密码', trigger: 'blur' },
          ],
          captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
        },
      }
    },
    methods: {
      // 用户登录
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            try {
              let res = await this.$store.dispatch('userLogin', this.userInfo)
              if (res === 'success') {
                this.$router.push('/home')
              }
            } catch (error) {
              console.error(error)
            }
          }
        })
      },
      // 跳转到用户注册界面
      register() {
        this.$router.push('/register')
      },
      // 点击回车键跳转
      focusNext(nextRef) {
        this.$refs[nextRef].focus()
      },
      // 切换验证码
      changeCodeimg() {
        this.$refs.img_codeRef.src = `http://localhost:9002/api/codeimg?${Math.random()}`
      },
    },
  }
</script>

<style scoped lang="less">
  .captcha {
    display: flex;
    flex-direction: row;
    /deep/.el-form-item__content {
      display: flex;
      justify-content: space-between;
    }
    .captcha-num {
      width: 55%;
    }
    .captcha-img {
      width: 40%;
      cursor: pointer; // 变小手
    }
  }
</style>
