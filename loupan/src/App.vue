<template>
  <div id="app">
    <div id="nav">
    	<img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xMzNkM2NmMThmYzMxOGQwNTE5MWRjNzIwOTI3ZmFhNS5wbmc_p_p100_p_3D.png"/>
      <router-link to="/" id="a">首页</router-link> 
      <router-link to="/qxlp/1" id="a">全新楼盘</router-link>
      <router-link to="/qxlp/2" id="a">二手楼盘</router-link>
      <router-link to="/qxlp/3" id="a">全新商铺</router-link>
      <router-link to="/lsdt" id="a">楼市动态</router-link>
      <router-link to="/lxwm" id="a" class="a">联系我们</router-link>
      <span>008-6666 6666</span><button>咨询电话</button>
    </div>
    
    <router-view/>
		
    

		 
  </div>
</template>
<script>

</script>
<style>
*{
	padding: 0;
	margin: 0;
	border: 0;
	font-weight: normal;
	font-style: normal;
	text-decoration: none;
	list-style: none;
}
#nav{
	width: 1190px;
	margin: auto;
	overflow: hidden;
}
#nav img{
	width: 154px;
	height: 51px;
	margin: 22px 120px 22px 0px ;
	float: left;
}

#a{
	margin: 23px 20px;
    display: inline-block;
	float: left;
	font-size: 14px;
	color: #000;
	line-height: 50px;
}
#nav a.router-link-exact-active{
	margin: 23px 20px 22px 20px;
	border-bottom: 1px solid #000;
	
}
.a{
	margin-right: 10% !important;
}
#nav span{
	background: url(./images/dian.jpg);
	background-size: 18px 18px;
	background-repeat: no-repeat;
	padding-left: 25px;
	color: #888888;
	font-size: 16px;
}
#nav button{
	width: 86px;
	height: 31px;
	background-color: #3a79e8;
	border-radius: 5px;
	margin-top: 33px;
	margin-left: 15px;
  outline: none;
	color: #fff;
}
.footer{
  width: 100%;
  line-height: 80px;
  color: #8d9095;
  text-align: center;
  font-size: 12px;
  margin-top: 80px;
  background-color: #262626;
  float: left;
}
</style>









