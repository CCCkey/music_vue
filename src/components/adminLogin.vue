<template>
	<div class="ad_login">
		<!-- 后台登录页面的title -->
		<div class="form_title">
			<a class="logo"><img src="../assets/img/logo.png"></a>
			<h1 class="content_title">管理员登录</h1>
		</div>
		<!-- 后台登录页面的表单，使用element UI样式 -->
		<el-form label-width="80px" :model="formLabel">
			<el-form-item label="账号" required>
				<el-input v-model="formLabel.username" placeholder="请输入内容"></el-input>
			</el-form-item>
			<el-form-item label="密码" required>
				<el-input v-model="formLabel.password" placeholder="请输入密码" show-password></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click='submit'>登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
// 引入elementUI的样式文件
import 'element-ui/lib/theme-chalk/index.css'
import form from '@/components/form'
export default {
	// 组件的data属性
	data() {
		return {
			// 定义表单中输入框的值
			formLabel: {
				username: '',
				password: '',
			},
			loading: false // elementUI中的等待效果
		}
	},
	components: {
		"form-com": form,
	},
	methods: {
		submit() {
			this.loading = true
			// 发送axios请求请求后台登录接口
			this.$axios.post("/api/v1/admins/login", { admin_account: this.formLabel.username, admin_password: this.formLabel.password }).then((res) => {
				if (res.data.code == 0) {
					this.loading = false
					this.$store.dispatch('setStateAdmin', res.data.data[0]);
					this.$store.dispatch('setStateAdminToken', res.data.token);
					this.$router.push({ path: this.redirect || '/adminmanage' }) //跳转路由
				}
			}).catch(() => { // 如果请求失败
				this.loading = false
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ad_login {
	border: 1px solid #ccc;
	width: 400px;
	margin: 100px auto;
	padding: 30px;
	color: black;
}

.form_title {
	display: flex;
}

.content_title {
	padding-left: 50px;
	font-size: 35px;
}
</style>
