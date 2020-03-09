<template>
  <div class="form_content">
			<form class="form" action="#" method="post">
				<div class="form-title">
					<img src="../assets/img/logo.png">
					<h1 class="content-title">注册</h1>
				</div>
				<div class="form-group">
					<label for="name">帐号:</label>
					<input id="name" type="text"/>
				</div>               
				<div class="form-group">
					<label for="email">邮箱:</label>
					<input id="email" type="email"/>
				</div>
				<div class="form-group">
					<label for="password">密码:</label>
					<input id="password" type="password"/>
				</div>
				<div class="form-group">
					<label for="re_password">确认密码:</label>
					<input id="re_password" type="password"/>
				</div>
				<input id="reg_btn" type="submit" value="注册"/>
			</form>
		</div> 
</template>

<script>
export default {
  data () {
    return {
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

#reg_btn{
	width: 100%;
	padding: 10px;
	border-radius: 25px;
	margin-top: 20px;
	color: white;
	background: linear-gradient(to left, hsla(333, 75%, 70%,0.7), hsla(242, 87%, 71%,0.7));
}
#reg_btn:hover{
	background: linear-gradient(to left, hsla(242, 87%, 71%,0.7),hsla(333, 75%, 70%,0.7));
}

</style>
