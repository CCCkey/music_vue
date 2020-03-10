<template>
  <el-container>
    <el-header><img src="../assets/img/logo.png" alt=""></el-header>
    <el-container>
      <el-aside width="200px">
        <el-col>
          <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#b6d0ec" text-color="#000" active-text-color="#00f">
            <el-menu-item index="1">
              <span slot="title"><router-link to="/adminmanage/user">用户管理</router-link></span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title"><router-link to="/adminmanage/music">音乐管理</router-link></span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title"><router-link to="/adminmanage/comments">评论管理</router-link></span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #528ad4;
}

.el-header img {
  width: 64px;
}

.el-aside {
  background-color: #b6d0ec;
  text-align: center;
}

.el-menu {
  border: none;
}
</style>
