<template>
  <div>
    <!-- 内容主体区域 -->
    <el-form :model="newPwdForm" :rules="newPwdFormRules" ref="newPwdFormRef" style="width: 96%">
      <!-- 账号 -->
      <el-form-item prop="phonenum">
        <el-input placeholder="请输入您的手机号" prefix-icon="el-icon-phone" ref="phonenum" v-model.number="newPwdForm.phonenum" @keyup.enter.native="focusNext('password')"></el-input>
      </el-form-item>

      <!-- 昵称 -->
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-s-custom" ref="password" @keyup.enter.native="focusNext('checkPass')" v-model="newPwdForm.username" placeholder="请给自己取个响亮的昵称吧！"> </el-input>
      </el-form-item>

      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input show-password type="password" prefix-icon="el-icon-lock" ref="password" @keyup.enter.native="focusNext('checkPass')" v-model="newPwdForm.password" placeholder="请输入你的密码">
        </el-input>
      </el-form-item>

      <!-- 确认密码 -->
      <el-form-item prop="checkPass">
        <el-input show-password type="password" prefix-icon="el-icon-lock" ref="checkPass" v-model="newPwdForm.checkPass" placeholder="请确认你的密码" @keyup.enter.native="register()"> </el-input>
      </el-form-item>
    </el-form>
    <!-- 内容底部区域 -->
    <span slot="footer" class="dialog-footer">
      <el-button @click="register()" type="primary">注 &nbsp;&nbsp;&nbsp; 册 </el-button>
    </span>
  </div>
</template>

<script>
  import { register } from '@/api/user'
  export default {
    data() {
      var validatePhone = (rule, value, callback) => {
        if (value === '' || (value + '').length != 11) {
          callback(new Error('请输入正确的手机号码格式'))
        } else {
          callback()
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '' || value.length != 6) {
          callback(new Error('请输入6位密码'))
        } else {
          if (this.checkPass != '') {
            this.$refs.newPwdFormRef.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        // console.log(value)
        if (value == '') {
          callback(new Error('请再次输入密码'))
        } else if (value != this.newPwdForm.password) {
          console.log(value)
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        // 对话框显示
        registerDialogVisible: false,
        // 修改密码表单项
        newPwdForm: {
          phonenum: 12345678911,
          username: 'xiaozhangtx',
          password: '123456',
          checkPass: '123456',
        },
        // 验证规则
        newPwdFormRules: {
          phonenum: [{ validator: validatePhone, trigger: 'blur', required: true }],
          username: [{ required: true, message: '小主，请你给自己取个响亮的昵称吧', trigger: 'blur' }],
          password: [{ validator: validatePass, trigger: 'blur', required: true }],
          checkPass: [{ validator: validatePass2, trigger: 'blur', required: true }],
        },
      }
    },
    methods: {
      // 注册
      register() {
        this.$refs.newPwdFormRef.validate(async (valid) => {
          console.log(this.newPwdForm)
          if (!valid) return
          // 发起请求
          const { data: res } = await register('/api/register', this.newPwdForm)
          if (res.code == 200) {
            this.$refs.newPwdFormRef.resetFields() // 重置表单项
            this.$router.replace('/login')
            return this.$message.success(res.message)
          } else {
            this.$refs.newPwdFormRef.resetFields() // 重置表单项
            return this.$message.error(res.message)
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
