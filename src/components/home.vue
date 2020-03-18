<template>
	<div class="hello">
		<Header></Header>
		<div id="wrapper">
			<!-- banner图 -->
			<div class="sowing">
				<img src="../assets/img/loop/20190804_025807.png">
			</div>

			<!-- 新歌推送 -->
			<div class="content">
				<!-- 标题图 -->
				<div class="content-title">
					<img src="../assets/img/title/new.png">
				</div>
				<!-- 内容 -->
				<div class="music-list">
					<div v-for="item in new_music_list">
						<router-link :to="'/musicPlay/' + item.id">
							<img :src="'http://localhost:3000/'+item.music_img_url">
							<p>{{item.music_name}}</p>
							<p>{{item.singer}}</p>
						</router-link>
					</div>
				</div>
			</div>

			<!-- 热门推荐 -->
			<div class="content">
				<!-- 标题图 -->
				<div class="content-title">
					<img src="../assets/img/title/hot.png">
				</div>
				<!-- 点击TOP -->
				<table>
					<tr v-for="(item,i) in click_music_list">
						<td>{{i + 1}}</td>
						<td>
							<img :src="'http://localhost:3000/'+item.music_img_url">
							<p>{{item.music_name}}</p>
						</td>
						<td>{{item.singer}}</td>
						<td>04:07</td>
						<td>
							<router-link :to="'/musicPlay/' + item.id">
								<img src="../assets/img/48/play48.png">
							</router-link>
						</td>
					</tr>
				</table>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
export default {
	created() {
		// 发送axios请求请求最新上传的歌曲列表接口
		this.$axios.get("/api/v1/musics/new?limit=4").then((res) => {
			if (res.data.state == 200) {
				this.new_music_list = res.data.data;
			}
		});
		// 发送axios请求请求推荐的歌曲列表接口
		this.$axios.get("/api/v1/musics/click?limit=4").then((res) => {
			if (res.data.state == 200) {
				this.click_music_list = res.data.data;
				console.log(this.click_music_list)
			}
		})
	},
	data() {
		return {
			new_music_list: null,
			click_music_list: null
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
	width: 90%;
	padding: 20px;
	margin: 0 auto;
}

.content-title {
	width: 220px;
	margin: 10px auto;
}

/* 新歌推送 */

.music-list {
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	/* 左右两端对齐 */
}

.music-list div img {
	width: 270px;
}

.music-list div p {
	color: black;
	font-size: 18px;
	line-height: 2;
}

/* 热门推荐 */

.tab-title {
	display: flex;
	margin-bottom: 20px;
	font-weight: 570;
}

.tab-title li {
	text-align: center;
	flex: 1;
	font-size: 20px;
	line-height: 40px;
}

.tab-title li a {
	padding: 10px 20px;
	;
	color: black;
}

.tab-title a.active {
	border-bottom: 3px solid black;
}

.cont {
	display: none;
	overflow: hidden;
}

table {
	width: 90%;
	margin: 0 auto;
}

table td:nth-child(2) {
	display: flex;
	align-items: center;
}

table td>img {
	max-width: 120px;
	padding: 10px;
}
</style>
