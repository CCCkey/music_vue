<template>
  <div>
    <Header></Header>
    <div class="main">
				<div class="music_info">					
					<img class="" src="../assets/img/300/20190803_014502.png">
					<div class="music_t">
						<p>可乐</p><br/>
            <p>歌手：赵紫骅</p>
					</div>					
				</div>
				<div class="comments">
					<div id="comments_list" >
						<h2>评论：</h2>
						<ul id="list" contenteditable="false">
							<li>
								<p>xxx:xxx</p>
								<p>2020-03-08</p>													
							</li>
							<li>
								<p>xxx:xxx</p>
								<p>2020-03-08</p>																	
							</li>
							<li>
								<p>xxx:xxx</p>
								<p>2020-03-08</p>																			
							</li>
							<li>
								<p>xxx:xxx</p>
								<p>2020-03-08</p>																											
							</li>
							<li>
								<p>xxx:xxx</p>
								<p>2020-03-08</p>																											
							</li>
							<li>
								<p>xxx:xxx</p>
								<p>2020-03-08</p>																											
							</li>
							<li>
								<p>xxx:xxx</p>
								<p>2020-03-08</p>																											
							</li>
						</ul>
					</div>
	
					<div class="add_comment" action="#" method="get">
						<textarea id="comment" type="text" placeholder="发表评论" required spellcheck="true" rows="3"></textarea>
						<button id="commit" type="button" @click="addComments()">确定</button>
					</div>
				</div>							
			</div>
      <Footer></Footer>
  </div>  
</template>

<script>
export default {
  data () {
    return {
			comments_list:null
    }
	},
	methods:{
		addComments(){

		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  padding-top: 50px;
  display: flex;
  justify-content: space-around;  
  overflow: hidden;
}
.music_info img{  max-width: 100%;}
.music_t { 	padding: 20px 0px 0px;}
.music_t span{  margin-top: 50px;}
.comments{position: relative;  width: 60%;}
#comments_list{
	position: relative;
	overflow: hidden;
}
#list{
	width: 103%;
	height: 280px;
	overflow: auto;
}
#comments_list li {   
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 60px;
  border-bottom: 1px solid #CCCCCC;
  padding-right: 40px;
}
#comments_list img{
  width: 24px;
  margin-right: 30px;
}
.add_comment textarea {
    width: 90%;
    border: 1px solid #CCCCCC;
    border-radius: 10px;
    padding: 15px;
    margin: 20px 0;
		outline: none;
}
.add_comment{
    position: relative;
    margin-bottom: 20px;
}
.add_comment button {
  padding: 10px 50px;
  outline: none;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
}

</style>
