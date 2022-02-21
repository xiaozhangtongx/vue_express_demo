<template>
  <div>
    <el-button type="primary" @click="test">测试</el-button>
    <el-button type="danger" @click="logout">退出</el-button>
  </div>
</template>

<script>
  import { test } from '@/api/test'
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {
      // 测试
      async test() {
        let res = await test('/my/test')
        console.log(res)
      },
      // 退出登录
      async logout() {
        try {
          let res = await this.$store.dispatch('userLogout')
          if (res === 'success') {
            this.$router.replace('/login')
          }
        } catch (error) {
          console.error(error)
        }
      },
    },
  }
</script>

<style scoped lang="less"></style>
