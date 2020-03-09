<template>
  <div id="bottom">
    <div class="left">
	<a href="javascript:;">服务条款</a>
	<a href="javascript:;">隐私策略</a>
	<a href="javascript:;">广告服务</a>
	<a href="javascript:;">客服中心</a>
</div>
<div class="right">
	<p>Copyright@xxxxxxxxxxx<a href="#wrapper">返回顶部</a></p>	
</div>
  </div>  
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*** 页脚 ***/
.left,.right{
	flex: 1;	
}
.left a,.right a {
	padding: 0 10px;
}
.left a:not(:last-child){/* 最后一个a元素不加右边框 */
	border-right:1px white solid ;
}
</style>
