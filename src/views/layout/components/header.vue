<template>
  <div class="header-container">
    <h1> lalala</h1>
    <el-dropdown>
      <div class="avatar-wrap">
        <img
          class="avatar"
          src="../avatar.jpg"
          alt="加载失败"
        >
        <span>{{ user.name }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item @click.native="onLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { getUserProfile } from '@/api/user'
export default {
  name: 'AppHeader',
  components: {},
  props: {},
  data () {
    return {
      user: null
    }
  },
  watch: {},
  computed: {},
  methods: {
    async loadUserProfile () {
      const { data } = await getUserProfile()
      console.log(data)
      this.user = data.data
    }
  },
  created () {
    this.loadUserProfile()
  },
  mounted () { }
}
</script>

<style lang="less" scoped>
.header-container {
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 20px;
    color: #000;
    font-weight: bold;
  }
  .avatar {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
}
</style>
