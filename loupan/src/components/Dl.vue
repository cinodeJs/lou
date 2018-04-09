<template>
  <div id="box">
     <div id="lsdt-box">
       <div id="lsdt-box-left">
          <div class="ss">
            <span></span>
            楼市动向-News
          </div>
          <div v-for="i in arr" id="xian">
            <router-link :to="/newsdetail/+i.id">
            <dl>
              <dt><img :src="i.img" alt=""></dt>
              <dd>{{i.tit}}</dd><br>
              <p class="shijian">{{i.time}}</p><br>
              <div>{{i.con}}</div>
            </dl>
            </router-link>
          </div>
        </div>
        <div id="lsdt-box-right">
          <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS9kODI5YzJiMjZiYjc0MmViNmQ1NWZiOTc4ZWEwODU4YS5qcGc_p_p100_p_3D.jpg 

" alt="">
        </div>
     </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.$http.get("http://localhost:8000/news").then(e => {
      this.arr = e.body;
    });
  }
};
</script>


<style>
#lsdt-box{
  width: 100%;
  overflow: hidden;
}
#lsdt-box-left{
  margin-left: 7%;
  width: 48%;
  float: left;
}
#lsdt-box-left span{
  width: 15px;
  height: 15px;
  background-color: black;
  display: inline-block;
}
#lsdt-box-right{
  margin-top: 5%;
  width: 45%;
  height: 600px;
  float: left;
}
#lsdt-box-right img{
  height: 600px ;
  display: block;
}
.ss{
  font-size: 12px;
  color: black;
  font-weight: bold;
  margin-top: 10%;

}
#xian{
  overflow: hidden;
  margin-top: 25px;
}
#xian dl{
  overflow: hidden;
  line-height: 24px;
}
#xian dl div{
  margin-top: 4px;
  /* margin-left: 5px; */
  font-size: 10px;
  color: #999999;
}
#xian dt{
  float: left;
  overflow: hidden;
  margin-right: 5px;
}
#xian dt img{
  display: block;
}
#xian dd{
  display: inline-block;
}
.shijian{
  float: left;
  color: #7379ec;
  font-size: 10px;
}
</style>

18:19:52
， 2018/4/7 18:19:52

