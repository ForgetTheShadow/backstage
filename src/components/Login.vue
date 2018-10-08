<template>
  <div class="hello">
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    login(){
      // 发起ajax，验证用户名密码是否正确

      // 验证通过（用户，密码正确）
      // * 存入token
      // * 跳转页面（跳到首页）
      sessionStorage.setItem('token','10086');
      this.$router.push({
        path:'/home'
      })
    }
  }
}
</script>

<style scoped>

</style>
