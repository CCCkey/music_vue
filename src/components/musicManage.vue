<template>
	<div>
		<el-table :data="tableData" style="width: 100%;height: 580px;">
			<el-table-column label="歌曲名" prop="music_name">
			</el-table-column>
			<el-table-column label="歌手" prop="singer">
			</el-table-column>
			<el-table-column align="right">
				<template slot="header" slot-scope="scope">
					<img src="../assets/img/48/onemore.png" alt="" width="36px" @click="FormUpdateVisible = true">
				</template>
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog title="修改音乐信息" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="歌曲名" :label-width="formLabelWidth">
					<el-input autocomplete="off" v-model="form.music_name"></el-input>
				</el-form-item>
				<el-form-item label="歌手" :label-width="formLabelWidth">
					<el-input autocomplete="off" v-model="form.singer"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>
		<el-dialog title="新增音乐" :visible.sync="FormUpdateVisible">
			<form @submit.prevent="addMusic" ref="form">
				<div class="my_form_item">音乐名：<input type="text" name="music_name"></div>
				<div class="my_form_item">歌 手：<input type="text" name="singer"></div>
				<div class="my_form_item">音乐文件：<input type="file" ref="music_data"></div>
				<div class="my_form_item">歌词文件：<input type="file" ref="lyric_data"></div>
				<div class="my_form_item">封面文件：<input type="file" ref="music_img_data"></div>
				<div slot="footer" class="dialog-footer" style="padding-left:70%;">
					<el-button @click="FormUpdateVisible = false">取 消</el-button>
					<button class="btn" type="submit">确 定</button>
				</div>
			</form>
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
		this.getMusicList(this.currentPageNum)
	},
	watch: {
		currentPageNum(val, newval) {
			this.getMusicList(val)
		}
	},
	data() {
		return {
			tableData: [],
			search: '',
			dialogFormVisible: false,
			FormUpdateVisible: false,
			form: { music_name: "", singer: "" },
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
			this.$axios.delete("/api/v1/musics", { data: { music_id: row.id, token: this.admin_token } }).then((res) => {
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
			this.$axios.put("/api/v1/musics", { music_id: this.form.id, music_name: this.form.music_name, singer: this.form.singer, token: this.admin_token }).then((res) => {
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
		addMusic(event) {
			event.preventDefault();
			let formData = new FormData(this.$refs.form);
			formData.append("music_data", this.$refs.music_data.files[0])
			formData.append("lyric_data", this.$refs.lyric_data.files[0])
			formData.append("music_img_data", this.$refs.music_img_data.files[0])
			formData.append("token", this.admin_token)
			this.$axios.create()({
				url: '/api/v1/musics',
				method: 'post',
				data: formData,
				header: {
					"Content-Type": "multipart/form-data"
				}
			}).then((res) => {
				if (res.data.code == 0) {
					Message({
						message: '添加成功',
						type: 'success',
						duration: 2 * 1000
					})
					this.FormUpdateVisible = false
					this.$router.go(0)
				}
			})
		},
		getMusicList(currentPageNum) {
			this.$axios.get("/api/v1/musics?offset=" + currentPageNum + "&limit=10&token=" + this.admin_token).then((res) => {
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
<style scoped>
.my_form_item {
	width: 90%;
	height: 60px;
	padding-left: 5%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.my_form_item input {
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 80%;
	height: 38px;
	line-height: 38px;
	vertical-align: middle;
}

.btn {
	background-color: #409EFF;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 10px 15px;
	color: #fff;
}

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