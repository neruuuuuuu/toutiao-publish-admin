<template>
  <div class="login-container">
    <div class="login-form-wrap">
      <div class="login-head">头条后台</div>
      <el-form
        class="login-form"
        ref="login-form"
        :model="user"
        :rules="formRules"
      >
        <el-form-item prop="mobile">
          <el-input
            v-model="user.mobile"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="user.code"
            placeholder="请输入验证码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            @click="onLogin"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { setItem } from '@/utils/storage'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: '',
        agree: false
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码格式', trigger: 'blur' }
        ],
        agree: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请同意用户协议'))
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    onLogin () {
      this.$refs['login-form'].validate((valid) => {
        if (valid) {
          this.login()
        }
      })
    },
    async login () {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      try {
        const data = await login(this.user)
        console.log(data)
        loading.close()
        this.$message({
          message: '登陆成功',
          type: 'success'
        })
        setItem('user', data.data)
        console.log(data.data)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        loading.close()
        console.log(error)
        this.$message({
          message: '登陆失败',
          type: 'error'
        })
      }
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
  background: rgb(136, 173, 166);
  .login-form-wrap {
    background-color: #fff;
    padding: 20px 30px 10px;
    border-radius: 15px;
    box-shadow: 10px 8px 10px rgb(67, 67, 67);
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
