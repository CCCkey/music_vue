<template>
  <div class="form_content">
			<form id="form">
				<div class="form-title">
					<img src="../assets/img/logo.png">
					<h1 class="content-title">登录</h1>
				</div>
				<div class="form-group">
					<label for="account">帐号:</label>
					<input id="account" type="text" v-model="user_account" required/>
				</div>
				<div class="form-group">
					<label for="password">密码:</label>
					<input id="password" type="password" v-model="password" required/>
				</div>
				<input id="log_btn" type="button" value="登录" @click="login()"/>
				<router-link id="to_register" to="/register">注册</router-link>
			</form>
		</div>  
</template>

<script>
export default {
  data () {
    return {
		user_account:"",
		password:""
    }
  },
  methods: {
	  login(){

	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-title{
	float: right;
	margin-right: 150px;
	margin-top: 20px;
	font-size: 35px; 
}	
form{
	width: 400px;
	margin: 100px auto;
	padding: 30px;
	background-color: rgba(19, 35, 47, 0.6);
	border-radius: 10px;
}
.form-group{
	padding: 20px 0px;	
	display: flex;
}.form-group:after{
	content: "*";	
	color: red;
}
label{
	flex: 1;
	padding-top: 10px;
}
input{
	flex: 4;
	padding: 10px;
	border-radius: 25px;
	color: black;
}

#log_btn,#reg_btn{
	width: 60%;
	padding: 10px;
	border-radius: 25px;
	margin-top: 20px;
	color: white;
	background: linear-gradient(to left, hsla(333, 75%, 70%,0.7), hsla(242, 87%, 71%,0.7));
}
#log_btn:hover{
	background: linear-gradient(to left, hsla(242, 87%, 71%,0.7),hsla(333, 75%, 70%,0.7));
}
#to_register {
    margin-left: 100px;
	color: white;
}
</style>
