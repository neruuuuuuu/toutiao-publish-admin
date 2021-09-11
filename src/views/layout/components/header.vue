<template>
  <div>
    <!-- <el-dropdown>
      <div class="avatar-wrap">
        <img
          class="avatar"
          :src="user.photo"
          alt=""
        >
        <span>{{ user.name }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item @click.native="onLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
  </div>
</template>

<script>
// import { getUserProfile } from '@/api/user'
export default {
  name: 'AppHeader',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    // async loadUserProfile () {
    //   const data = await getUserProfile()
    //   console.log(data)
    // }
  },
  created () {
    // this.loadUserProfile()
  },
  mounted () { }
}
</script>

<style lang="less" scoped>
</style>
