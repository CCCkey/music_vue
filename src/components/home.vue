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
					<div>
						<a href="musicPlay.html">
							<img src="../assets/img/300/20190803_012634.png">
							<p>立风</p>
							<p>火箭少女101</p>
						</a>						
					</div>						
					<div>																	
						<a href="musicPlay.html">
							<img src="../assets/img/300/20190803_012922.png">
							<p>KILL THIS LOVE</p>
							<p>BLACKPINK</p>
						</a>														
					</div>						
					<div>					
						<a href="musicPlay.html">
							<img src="../assets/img/300/20190803_014502.png">
							<p>Baby I Do</p>
							<p>ONER</p>
						</a>																				
					</div>						
					<div>
						<a href="musicPlay.html">
							<img src="../assets/img/300/20190803_020735.png">
							<p>大自在</p>
							<p>粒粒</p>
						</a>																																											
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
						<tr>
							<td>01</td>
							<td><img src="../assets/img/300/20190803_023047.png" ><p>You Need To Calm Down</p></td>
							<td>Taylor Swift</td>
							<td>02:51</td>
							<td><a href="musicPlay.html"><img src="../assets/img/48/play48.png" ></a></td>				
						</tr>
						<tr>
							<td>02</td>
							<td><img src="../assets/img/300/20190803_024104.png" ><p>别说爱我</p></td>
							<td>叶炫清</td>
							<td>04:57</td>
							<td><a href="musicPlay.html"><img src="../assets/img/48/play48.png"></a></td>									
						</tr>
						<tr>
							<td>03</td>
							<td><img src="../assets/img/300/20190803_024809.png"><p>AH YEAH</p></td>
							<td>WINNER (위너)</td>
							<td>02:57</td>
							<td><a href="musicPlay.html"><img src="../assets/img/48/play48.png" ></a></td>									
						</tr>
						<tr>
							<td>04</td>
							<td><img src="../assets/img/300/20190803_022100.png"><p>该不会忘了吧</p></td>
							<td>马晓晨</td>
							<td>03:36</td>
							<td><a href="musicPlay.html"><img src="../assets/img/48/play48.png" ></a></td>										
						</tr>	
					</table>
			</div>
		</div>
    <Footer></Footer>
  </div>  
</template>

<script>
export default {
	created(){
		
	},
  data () {
    return {
		new_music_list:null,
		music_list:null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    width:90%;
	  padding: 20px;
    margin: 0 auto;
}
.content-title{
	width: 220px;
	margin: 10px auto;
}


/* 新歌推送 */
.music-list {
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;/* 左右两端对齐 */
}
.music-list div img{
	width: 90%;
}
.music-list div p{
	color: black;
	font-size: 18px;
	line-height: 2;
}


/* 热门推荐 */
.tab-title {
	display:flex;
    margin-bottom: 20px;
    font-weight: 570;
}
.tab-title li {
	text-align:center;
	flex:1;
	font-size:20px;
	line-height:40px;
}
.tab-title li a {
    padding: 10px 20px;;
    color: black;
}
.tab-title a.active {
	border-bottom:3px solid black;
}
.cont {
	display:none;
	overflow:hidden;
}
table{
	width:90%;
	margin: 0 auto;
}
table td:nth-child(2){
	display: flex;
	align-items: center;
}
table td>img{
	max-width: 120px;	
	padding: 10px;
}
</style>
