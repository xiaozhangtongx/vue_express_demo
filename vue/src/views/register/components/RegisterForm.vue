<template>
  <div>
    <!-- 内容主体区域 -->
    <el-form :model="userInfo" :rules="userInfoRules" ref="userInfoRef" style="width: 96%">
      <!-- 账号 -->
      <el-form-item prop="phonenum">
        <el-input placeholder="请输入您的手机号" prefix-icon="el-icon-phone" ref="phonenum" v-model.number="userInfo.phonenum" @keyup.enter.native="focusNext('password')"></el-input>
      </el-form-item>

      <!-- 昵称 -->
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-s-custom" ref="password" @keyup.enter.native="focusNext('checkPass')" v-model="userInfo.username" placeholder="请给自己取个响亮的昵称吧！"> </el-input>
      </el-form-item>

      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input show-password type="password" prefix-icon="el-icon-lock" ref="password" @keyup.enter.native="focusNext('checkPass')" v-model="userInfo.password" placeholder="请输入你的密码">
        </el-input>
      </el-form-item>

      <!-- 确认密码 -->
      <el-form-item prop="checkPass">
        <el-input show-password type="password" prefix-icon="el-icon-lock" ref="checkPass" v-model="userInfo.checkPass" placeholder="请确认你的密码" @keyup.enter.native="register()"> </el-input>
      </el-form-item>
    </el-form>
    <!-- 内容底部区域 -->
    <span slot="footer" class="dialog-footer">
      <el-button @click="register()" type="primary">注 &nbsp;&nbsp;&nbsp; 册 </el-button>
    </span>
  </div>
</template>

<script>
  export default {
    data() {
      // 手机号验证规则
      let validatePhone = (rule, value, callback) => {
        if (value === '' || (value + '').length != 11) {
          callback(new Error('请输入正确的手机号码格式'))
        } else {
          callback()
        }
      }
      let validatePass = (rule, value, callback) => {
        if (value === '' || value.length != 6) {
          callback(new Error('请输入6位密码'))
        } else {
          if (this.checkPass != '') {
            this.$refs.userInfoRef.validateField('checkPass')
          }
          callback()
        }
      }
      let validatePass2 = (rule, value, callback) => {
        // console.log(value)
        if (value == '') {
          callback(new Error('请再次输入密码'))
        } else if (value != this.userInfo.password) {
          console.log(value)
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        // 用户注册表单信息
        userInfo: {
          phonenum: 12345678911,
          username: 'xiaozhangtx',
          password: '123456',
          checkPass: '123456',
        },
        // 验证规则
        userInfoRules: {
          phonenum: [{ validator: validatePhone, trigger: 'blur', required: true }],
          username: [{ message: '小主，请你给自己取个响亮的昵称吧', trigger: 'blur', required: true }],
          password: [{ validator: validatePass, trigger: 'blur', required: true }],
          checkPass: [{ validator: validatePass2, trigger: 'blur', required: true }],
        },
      }
    },
    methods: {
      // 用户注册
      register() {
        this.$refs.userInfoRef.validate(async (valid) => {
          if (!valid) return
          // 发起请求
          const res = await this.$store.dispatch('userRegister', this.userInfo)
          if (res == 'success') {
            this.$refs.userInfoRef.resetFields() // 重置表单项
            this.$router.replace('/login')
          } else {
            this.$refs.userInfoRef.resetFields() // 重置表单项
          }
        })
      },
      focusNext(nextRef) {
        this.$refs[nextRef].focus()
      },
    },
  }
</script>

<style scoped lang="less">
  .el-button {
    width: 96%;
  }
</style>
