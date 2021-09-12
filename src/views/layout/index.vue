<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <app-aside class="aside-meru"></app-aside>
    </el-aside>
    <el-container>
      <el-header>
        <app-header class="layout-header"></app-header>
      </el-header>
      <el-main>Main
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from './components/aside.vue'
import AppHeader from './components/header.vue'
export default {
  name: 'LayoutIndex',
  components: { AppAside, AppHeader },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>

<style lang="less" scoped>
.layout-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .el-aside {
    .aside-meru {
      height: 100%;
    }
  }
}

.el-main {
  background-color: #e9eef3;
}
</style>
