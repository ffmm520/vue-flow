<template>
  <div class="page-login">
    <div class="login-header">
      <a href="/" class="logo" />
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
        <h4 v-if="error" class="tips"><i />{{ error }}</h4>
        <p><span>账号登录</span></p>
        <el-input v-model="username" prefix-icon="el-icon-user" />
        <el-input
          v-model="password"
          prefix-icon="el-icon-unlock"
          type="password"
        />
        <el-button class="btn-login" type="success" size="mini" @click="login"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      checked: '',
      username: '',
      password: '',
      error: ''
    }
  },
  layout: 'blank',
  methods: {
    login() {}
  }
}
</script>

<style lang="scss">
@import '@/assets/css/login.scss';
</style>
