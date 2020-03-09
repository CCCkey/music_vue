<template>
  <div id="topbar">
    <!-- logo -->
    <div id="top_picture">
      <img src="../assets/img/logo.png" />
    </div>
    <!-- 导航 -->
    <div class="top_nav">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/musicPlay">发现音乐</router-link>
        </li>
      </ul>
    </div>
    <!-- 登录 -->
    <div class="user">
      <router-link to="/login">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*** 页头 ***/
#topbar{
	top: 0;
	position: sticky;
	opacity: .9;
}
/* logo */
#top_picture{
	flex: 1;
	height: 80px;
}#top_picture img{
	width: 80px;
	height: 80px;
	margin: 0 30%;
}
/* 导航 */
.top_nav{
	flex: 4;
}
.top_nav li {
  float: left;
  width: 20%;
}
/* 登录 */
.user {
	flex: 1;	
}.user a{
	margin: 0 30%;
	border: 1px solid white;
	border-radius: 25px;
	padding: 5px 0px;
	display: block;
}
</style>
