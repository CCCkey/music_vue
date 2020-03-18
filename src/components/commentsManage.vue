<template>
	<div>
		<el-table :data="tableData" style="width: 100%;height: 580px">
			<el-table-column label="用户名" prop="user_account">
			</el-table-column>
			<el-table-column label="歌曲" prop="music_name">
			</el-table-column>
			<el-table-column label="评论内容" prop="content">
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
		<el-dialog title="修改评论信息" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="评论内容" :label-width="formLabelWidth">
					<el-input autocomplete="off" v-model="form.content"></el-input>
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
		this.getCommentList(this.currentPageNum)
	},
	watch: {
		currentPageNum(val, newval) {
			this.getCommentList(val)
		}
	},
	data() {
		return {
			tableData: [],
			search: '',
			dialogFormVisible: false,
			form: {
				id: null,
				content: null
			},
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
			console.log(index, row);
		},
		handleDelete(index, row) {
			console.log(index, row);
			this.$axios.delete("/api/v1/comments", {data:{ comment_id: row.id, token: this.admin_token }}).then((res) => {
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
			this.$axios.put("/api/v1/comments", { comment_id: this.form.id, content: this.form.content, token: this.admin_token }).then((res) => {
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
		getCommentList(currentPageNum) {
			this.$axios.get("/api/v1/comments?offset=" + currentPageNum + "&limit=10&token=" + this.admin_token).then((res) => {
				if (res.data.code == 0) {
					this.tableData = res.data.data.results;
					this.currentPageNum = res.data.data.currentPageNum;
					this.totalPages = res.data.data.totalPages;
				}
			}).catch(err => {
					console.log(err)
				})
		}
	},

}
</script>
<style scoped>
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
