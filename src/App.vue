<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
input {
  border: none;
  outline: none;
}
button {
  border: none;
}
img{
  max-width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* 页头、页脚公共样式 */
#topbar,#bottom{
	width:100%;
	height:80px;
	color: white;
	background-color: black;
	display: flex;
	align-items: center;
	text-align: center;
}
#topbar a,#bottom a{ 
	color: white;
	letter-spacing: 0.1em;	
}
#topbar a:hover,#bottom a:hover{ 
	color: grey;
}
</style>
