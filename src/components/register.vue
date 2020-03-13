<template>
	<div class="form_content">
		<form class="form" action="#" method="post">
			<div class="form-title">
				<img src="../assets/img/logo.png">
				<h1 class="content-title">注册</h1>
			</div>
			<div class="form-group">
				<label for="name">帐号:</label>
				<input id="name" type="text" required v-model="user_account" />
			</div>
			<div class="form-group">
				<label for="email">邮箱:</label>
				<input id="email" type="email" required v-model="email" />
			</div>
			<div class="form-group">
				<label for="password">密码:</label>
				<input id="password" type="password" required v-model="user_password" />
			</div>
			<div class="form-group">
				<label for="re_password">确认密码:</label>
				<input id="re_password" type="password" v-model="re_password" />
			</div>
			<input id="reg_btn" type="button" value="注册" @click="register()" />
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user_account: "",
			user_password: "",
			email: "",
			re_password: ""
		}
	},
	methods: {
		register() {
			if (this.user_account == '' || this.user_password == '' || this.email == '') {
				return false;
			}
			// 发送axios请求请求后台登录接口
			this.$axios.post("/api/v1/users/user/register", { user_account: this.user_account, user_password: this.user_password, email: this.email }).then((res) => {
				if (res.data.state == 200) {
					alert("注册成功！");
					this.$router.push({ path: "/login" })
				}
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-title {
	float: right;
	margin-right: 150px;
	margin-top: 20px;
	font-size: 35px;
}

form {
	width: 400px;
	margin: 50px auto;
	padding: 30px;
	background-color: rgba(19, 35, 47, 0.6);
	border-radius: 10px;
}

.form-group {
	padding: 20px 0px;
	display: flex;
}

.form-group:after {
	content: "*";
	color: red;
}

label {
	flex: 1;
	padding-top: 10px;
}

input {
	flex: 4;
	padding: 10px;
	border-radius: 25px;
	color: black;
}

#reg_btn {
	width: 100%;
	padding: 10px;
	border-radius: 25px;
	margin-top: 20px;
	color: white;
	background: linear-gradient(to left, hsla(333, 75%, 70%, 0.7), hsla(242, 87%, 71%, 0.7));
}

#reg_btn:hover {
	background: linear-gradient(to left, hsla(242, 87%, 71%, 0.7), hsla(333, 75%, 70%, 0.7));
}
</style>
