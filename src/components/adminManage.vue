<template>
  <el-container>
    <el-header><img src="../assets/img/logo.png" alt=""><span class="admin" v-show="admin_name">{{admin_name}}</span></el-header>
    <el-container>
      <el-aside width="250px">
        <el-col>
          <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#ebf0f5" text-color="#000" active-text-color="#00f">
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
import 'element-ui/lib/theme-chalk/index.css';
import { Message, MessageBox } from 'element-ui'
export default {
   // 组件的data属性
  data () {
    return {
     admin_name:""
    }
  },
  created() {
			if(this.$store.getters.getState.admin_info != null){
			// 获取状态管理中的用户名
				this.admin_name = this.$store.getters.getState.admin_info.admin_account
      }
		}
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
  background-color: #ebf0f5;
  text-align: center;
  height: 630px;
  padding-top: 15px
}

.el-menu {
  border: none;
  font-size: 16px;
}
.el-menu a{
  font-size: 16px;
}
.el-main {
  padding: 20px 70px 0;
}
.admin {
  float: right;
  border: 1px solid #fff;
  padding: 6px;
  border-radius: 4px;
  margin-top: 15px;
}
</style>
