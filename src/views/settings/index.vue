<template>
  <div>
    <el-card>
      <div
        slot="header"
        class="clearfix"
      >
        <!-- 面包屑路径导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
          <el-breadcrumb-item>个人设置</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- /面包屑路径导航 -->
      </div>

      <el-form
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="用户头像">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img
              width="100"
              src="../layout/avatar.jpg"
              class="avatar"
            />
            <!-- <i class="el-icon-plus avatar-uploader-icon"></i> -->
          </el-upload>
        </el-form-item>
        <el-form-item label="用户昵称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="个人介绍">
          <el-input
            type="textarea"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户邮箱">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
          >保存修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'SettingsIndex',
  components: {},
  props: {},
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }

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
</style>
