<template>
  <div class="box">
    
    <div id="write">
      <p>首页>楼市动态</p>
    </div>
    
      <Dl></Dl>


    <footer class="footer">
      <p>地产REALSTATE  © 2020 All Rights Reserved.</p>
    </footer>
  </div>
</template>





<script>
import News from "../components/News.vue";
import Dl from "../components/Dl.vue";
export default {
   components: {
    News,
    Dl
  },

  data(){
    return{
      arr:[],
      b:"",
      c:""
    }
  },
  watch:{
     '$route'(){
       if(this.$route.params.fenlei==1){
         this.b="全新楼盘"
         this.c="/New Apartment"
       }else if(this.$route.params.fenlei==2){
         this.b="二手楼盘"
         this.c="/New Shops"
       }else if(this.$route.params.fenlei==3){
         this.b="全新商铺"
         this.c="/Second Hand"
       }
       this.$http.post('http://localhost:8000',{fenlei:this.$route.params.fenlei,one:0,two:9},{emulateJSON:true}).then(e=>this.arr=e.body)
     }
   },
  created(){
      if(this.$route.params.fenlei==1){
         this.b="全新楼盘"
         this.c="/New Apartment"
       }else if(this.$route.params.fenlei==2){
         this.b="二手楼盘"
         this.c="/New Shops"
       }else if(this.$route.params.fenlei==3){
         this.b="全新商铺"
         this.c="/Second Hand"
       }
      this.$http.post('http://localhost:8000',{fenlei:this.$route.params.fenlei,one:0,two:9},{emulateJSON:true}).then(e=>this.arr=e.body)
  }
}
</script>

<style>
.kk{
  font-size: 12px;
  line-height: 30px;
}


a{
  color: #262626;
}
.box{
  width: 100%;
  overflow: hidden;
}
.conn{
  width: 30%;
  margin-right: 20px;
  margin-bottom: 40px;
  float: left;
}
.conn img{
  width: 100%;
  font-size: 0;
  vertical-align: middle;
}
.dee{
  width: 91%;
  padding-left: 100px;
}
#write{
  width: 100%;
  line-height: 70px;
  color: #000000;
  font-size: 13px;
  padding-left: 100px;
  box-sizing: border-box;
  background-color: #ccc;
}
.tit{
  width: 100%;
  line-height: 60px;
  font-size: 12px;
  margin-left: 100px;
  overflow: hidden;
}
.zheng{
  width: 20px;
  height: 20px;
  margin-top:  20px;
  background-color: #000;
  float: left;
}
.tit h3{
  margin-left: 10px;
  font-weight: bold;
  float: left;
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
.left{
  float: left;
  width: 70%;
  overflow: hidden;
}
.right {
  width: 21%;
  box-sizing: border-box;
  float: left;
}
</style>