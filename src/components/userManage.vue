<template>
	<div>
		<el-table :data="tableData" style="width: 100%;height: 580px;">
			<el-table-column label="用户名" prop="user_account">
			</el-table-column>
			<el-table-column label="密码" prop="user_password">
			</el-table-column>
			<el-table-column label="邮箱" prop="email">
			</el-table-column>
			<el-table-column align="right">
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog title="修改用户信息" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="用户名" :label-width="formLabelWidth">
					<el-input autocomplete="off" v-model="form.user_account"></el-input>
				</el-form-item>
				<el-form-item label="密码" :label-width="formLabelWidth">
					<el-input autocomplete="off" v-model="form.user_password"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" :label-width="formLabelWidth">
					<el-input autocomplete="off" v-model="form.email"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="changeTable">确 定</el-button>
			</div>
		</el-dialog>
		<div class="pagination">
			<p @click="currentPageNum>0? currentPageNum-- : currentPageNum">&lt;</p>
			<p v-for="(item,i) in totalPages" :class=" currentPageNum == i + 1 ? 'active' : '' " @click="getCommentList(i + 1)">{{ i + 1}}</p>
			<p @click="currentPageNum < totalPages? currentPageNum++ : currentPageNum">&gt;</p>
		</div>
	</div>
</template>
<script>
import { Message, MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
export default {
	created() { // 生命周期
		this.admin_token = this.$store.getters.getState.admin_token;
		this.getUserList(this.currentPageNum)
	},
	watch: {
		currentPageNum(val, newval) {
			this.getUserList(val)
		}
	},
	data() {
		return {
			tableData: [],
			search: '',
			dialogFormVisible: false,
			form: {},
			formLabelWidth: '120px',
			admin_token: "",
			currentPageNum: 1,
			totalPages: null
		}
	},
	methods: {
		handleEdit(index, row) {
			this.form = row
			this.dialogFormVisible = true
		},
		handleDelete(index, row) {
			console.log(index, row);
			console.log(row.id)
			this.$axios.delete("/api/v1/users", {data:{ user_id: row.id, token: this.admin_token }}).then((res) => {
				if (res.data.code == 0) {
					Message({
						message: '删除成功',
						type: 'success',
						duration: 2 * 1000
					})
					this.$router.go(0);
				}
			})
		},
		changeTable() {
			this.$axios.put("/api/v1/users", { user_id: this.form.id, user_account: this.form.user_account, user_password: this.form.user_password, email: this.form.email, token: this.admin_token }).then((res) => {
				if (res.data.code == 0) {
					Message({
						message: '修改成功',
						type: 'success',
						duration: 2 * 1000
					})
					this.dialogFormVisible = false
				}
			})
		},
		getUserList(currentPageNum) {
			this.$axios.get("/api/v1/users?offset=" + currentPageNum + "&limit=10&token=" + this.admin_token).then((res) => {
				if (res.data.code == 0) {
					this.tableData = res.data.data.results;
					this.currentPageNum = res.data.data.currentPageNum;
					this.totalPages = res.data.data.totalPages;
				}
			}).catch(err => {
				console.log(err)
			})
		}
	}
}
</script>
<style>
.pagination {
	display: flex;
	justify-content: flex-end;
}

.pagination p {
	margin-right: 5px;
	padding: 3px 6px;
	border: 1px solid #ccc;
	cursor: pointer;
}

.active {
	color: blue;
}
</style>
