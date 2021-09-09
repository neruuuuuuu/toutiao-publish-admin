<template>
  <div class="login-container">
    <div class="login-form-wrap">
      <div class="login-head">头条后端</div>
      <el-form
        class="login-form"
        ref="form"
        :model="user"
      >
        <el-form-item>
          <el-input
            v-model="user.phone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="user.code"
            placeholder="请输入验证码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            @click="onSubmit"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        phone: '',
        code: ''
      },
      checked: false
    }
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  },
  created () { },
  mounted () { }
}
</script>

<style lang="less" scoped>
.login-container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(140, 67, 86);
  .login-form-wrap {
    background-color: #fff;
    padding: 20px 30px 10px;
    border-radius: 15px;
    .login-head {
      font-weight: bold;
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }
    .login-form {
      .login-btn {
        width: 100%;
      }
    }
  }
}
</style>
