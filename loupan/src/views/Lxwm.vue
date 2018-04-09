<template>
	<div class="all">
		<div class="ti">首页 > 联系我们</div>
			<div class="main">
				<div class="l">
					<div class="t">
						<div></div><div>联系我们 - CONTACT</div>
					</div>
					<div class="q">
						<div class="li">
							<p>TOM</p>
							<p class="b">188 0000 0000  /  008-6666 6666</p>
						</div>
						<div class="li">
							<p>TOM</p>
							<p class="b">188 0000 0000  /  008-6666 6666</p>
						</div>
						<div class="li">
							<p>TOM</p>
							<p class="b">188 0000 0000  /  008-6666 6666</p>
						</div>
					</div>
					<div class="bom">
						<div class="ccon">{{con}}</div>
						<p>邮箱：info@realestate.com</p>
						<p>地址：上海市静安区南京西路时代大厦</p>
					</div>
				</div>
				<div class="r">
					<div class="ddd">
					<input type="text" placeholder="称呼">
					<input type="text" placeholder="邮箱">
					<input type="text" placeholder="电话">
					<input type="text" placeholder="内容">
					<input type="text" placeholder="验证码">
					<button>提交</button>
	    		</div>
	    		
			</div>
			
		</div>
		<div class="map">
	    			<img src="../assets/map_02.jpg" alt="">
	    </div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				con:'我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能设计出最具专业水准的网站。想创建一个简单的单页式站点，还是一个专业的公司网站，亦或是一个别具一格的博客？云建站可以满足您的所有需求。我们是响应式网站的倡导者，所有前端页面代码均采用HMLT5和CSS3实现。'
			}
		},
	}
</script>
<style>
	.map{
		width: 100%;
		height: 360px;
		float: left;
	}
  .map img{
    width: 100%;
  }
	.ddd{
		width: 80%;
		height: 370px;
		background: #f7f7f7;
		box-sizing: border-box;
		padding-left: 20px;
		padding-right: 20px;
	}
	.ddd>div{
		float: left;
	}
	.ddd>div:nth-of-type(1){
		width: 20px;
		height: 20px;
		background:#000;
	}
	.ddd>div:nth-of-type(2){
		width:150px;
		height: 20px;
		line-height: 20px;
		font-weight: bolder;
		font-size: 12px;
	}
	.ddd>input{
		width: 100%;
		height: 40px;
		outline: none;
		border:none;
		border-bottom:1px solid #ccc;
		background: none;
	}
	.ddd>button{
		width: 130px;
		height: 35px;
		background-color: #333;
		border: none;
		margin-top: 20px;
		float: left;
		color: white;
	}



	.bom{
		width: 100%;
		height: 190px;
		padding-top: 30px;
		box-sizing: border-box;
		float: left;
	}
	.bom>p{
		font-size: 12px;
		height: 24px;
		text-align: left;
		width: 100%;
	}
	.ccon{
		text-align: left;
		font-size: 12px;
		color: #000;
		line-height: 24px;
	}
	.all{
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	.ti{
		width: 100%;
		height: 80px;
		background-color: #f7f7f7;
		line-height: 80px;
		text-align: left;
		padding-left: 80px;
		box-sizing: border-box;
		margin-bottom: 20px;
	}
	.main{
		width: 1280px;
		margin:0 auto;
		overflow: hidden;
		padding-left: 80px;
	}
	.l{
		width: 63%;
		margin-right: 2%;
		float: left;
		background:white;
		/*padding-left:80px; */
	}
	.r{
		float: left;
		width: 35%;
		color: #f7f7f7;
	}
	.t{
		padding-top: 10px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.t>div:nth-of-type(1){
		width: 20px;
		height: 20px;
		background:#000;
		float: left;
	}
	.t>div:nth-of-type(2){
		width:200px;
		height: 20px;
		line-height: 20px;
		font-weight: bolder;
		font-size: 12px;
		float: left;
	}
	.t{
		height: 64px;
		border-bottom: 1px dashed #ccc;
	}
	.q{
		width: 100%;
		height: 106px;
		border-bottom: 1px dashed #ccc;
	}
	.li{
		width: 33%;
		height: 100%;
		padding: 30px 0px 25px;
		box-sizing: border-box;
		float: left;
	}
	.li>p{
		font-size: 14px;
		color: black;
		font-weight: bolder;
		text-align: left;
	}
	.b{
		font-weight: normal!important;
		color: blue!important;
	}
</style>