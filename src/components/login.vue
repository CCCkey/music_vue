<template>
	<div class="form_content">
		<form-com v-bind:message="formMsg" @fun="getFormData">
			<div class="form-title">
				<img src="../assets/img/logo.png">
				<h1 class="content-title">{{formMsg.title}}</h1>
			</div>
		</form-com>
	</div>
</template>

<script>
import form from '@/components/form'
export default {
	data() {
		return {
			formData: null,
			formMsg: {
				title: "登录",
				form_label_account: "用户名",
				form_label_pwd: "密码",
				showMore: false,
				showRegBtn: true
			}
		}
	},
	components: {
		"form-com": form,
	},
	methods: {
		login() {
			if (this.formData.user_account == '' || this.formData.user_password == '') {
				return false;
			}
			// 发送axios请求请求登录接口
			this.$axios.post("/api/v1/users/user/login", { user_account: this.formData.user_account, user_password: this.formData.user_password }).then((res) => {
				if (res.data.state == 200) {
					console.log(res.data)
					this.$router.push({ path: "/" })
				}
			})
		},
		getFormData(data) {
			this.formData = data;
			this.login();
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form_content {
	width: 400px;
	margin: 100px auto;
	padding: 30px;
	background-color: rgba(19, 35, 47, 0.6);
	border-radius: 10px;
}

.content-title {
	float: right;
	margin-right: 150px;
	margin-top: 20px;
	font-size: 35px;
}
</style>
