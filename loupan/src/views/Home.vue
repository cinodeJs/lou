<template>
  <div class="cont">
    <div class="io">
      <div id="img">
      <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS84MzY4MTYwYTk5NWQ4OTg4YWNmNmM5NjIxYWJiYzg5My0xODAweDYwMC5qcGc_p_p100_p_3D.jpg">
    </div>
   <div class="left">
      <div id="tu">
      <a href="http://localhost:8080/#/qxlp/1"><img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8zNTMyOGMwMzgzNDcxMjYzYjFjMzYzNThjYjVjOTc3OC02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"></a>
      <a href="http://localhost:8080/#/qxlp/2"><img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xZWM4Yzg2ODQ5MjVkMDVhODc4MDg4M2JhYzQxOThmOC02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"></a>
      <a href="http://localhost:8080/#/qxlp/3"><img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8yMmEyZTgzODY3ZDk2MzU3ZDA2YWU1N2VmYjE1NzNiZC00NzR4MTYxLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"></a>
      <a href="###"><img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xODUxNThhNTMyNzA3OTcwMDM0ZjUwZDFkZjAyMGQxZi02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"></a>
    </div>
    <List a="1" />
    <List a="2" />
    <List a="3" />
   </div>
    <div class="right">

      <News></News>
      <Tian></Tian>
      
    </div>
    </div>
    <footer class="footer">
      <p>地产REALSTATE  © 2020 All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
import List from "../components/List.vue";
import News from "../components/News.vue";
import Tian from "../components/Tian.vue";
export default {
  name: "app",
  components: {
    List,
    News,
    Tian
  }
};
</script>
<style>
.cont {
  width: 100%;
}
#img {
  width: 90%;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  margin-bottom: 5%;
}
#img img {
  width: 100%;
  font-size: 0;
  vertical-align: middle;
}
#tu {
  vertical-align: middle;
  margin-left: 12%;
  margin-right: 2%;
  height: 100%;
  box-sizing: border-box;
  margin-bottom: 4%;
  float: left;

}
#tu img {
  width: 50%;
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
