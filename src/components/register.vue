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
				title: "注册",
				form_label_account: "用户名",
				form_label_email: "邮箱",
				form_label_pwd: "密码",
				form_label_repwd: "确认密码",
				showMore: true,
				showRegBtn: false
			}
		}
	},
	components: {
		"form-com": form,
	},
	methods: {
		register() {
			if (this.formData.user_account == '' || this.formData.user_password == '' || this.formData.email == '') {
				return false;
			}
			// 发送axios请求请求注册接口
			this.$axios.post("/api/v1/users/user/register", { user_account: this.formData.user_account, user_password: this.formData.user_password, email: this.formData.email }).then((res) => {
				if (res.data.state == 200) {
					alert("注册成功！");
					this.$router.push({ path: "/login" })
				}
			})
		},
		getFormData(data) {
			this.formData = data
			this.register()
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form_content {
	width: 400px;
	margin: 50px auto;
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
