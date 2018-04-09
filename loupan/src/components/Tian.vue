<template>
   <div>
       <div id="neirong-right">
        <div id="neirong-right-top">
          <span></span>
          联系我们 - CONTACT
        </div>
        <div id="neirong-right-lei">
          <div >
            <h5>Tom</h5> <img src="../assets/03_03.jpg" alt="" srcset="">
            <h6 class="lan">188 0000 0000  /  008-6666 6666</h6>
          </div>
          <div >
            <h5>Smith </h5> <img src="../assets/03_03.jpg" alt="" srcset="">
            <h6 class="lan">188 0000 0000  /  008-6666 6666</h6>
          </div>
          <div >
            <h5>Andy</h5> <img src="../assets/03_03.jpg" alt="" srcset="">
            <h6 class="lan">188 0000 0000  /  008-6666 6666</h6>
          </div>

        </div>
      </div>

       <div id="neirong-right">
        <div id="neirong-right-top">
          <span></span>
          在线表单 - FORM
        </div>
        <div id="neirong-right-lei">
          <div>
           <input type="text" placeholder="称呼">
          </div>
          <div >
            <input type="text" placeholder="邮箱">
          </div>
          <div >
            <input type="text" placeholder="电话">
          </div>
          <div >
            <textarea placeholder="内容"></textarea>
          </div>
          <div >
            <input type="chebox" placeholder="验证码">
          </div>
          <div >
            <button>提交</button>
          </div>
        </div>
      </div>


      <div id="neirong-right">
        <div id="neirong-right-top">
          <span></span>
          地址 - ADDRESS
          <button>阅读更多</button>
        </div>
        <div id="neirong-right-lei">
          <div >
            <h5>郵箱：info@realestate.com</h5>
            <h6>地址：上海市静安区南京西路时代大厦</h6>
          </div>
        </div>
        
      </div>
   </div>
</template>
<style>
.lan{
  color: #0000CD;
}
#neirong-right {
  margin-top: 15px;
  width: 100%;
  background-color: #f7f7f7;
  float: left;
}
#neirong-right-top {
  overflow: hidden;
}
#neirong-right-top span {
  width: 10px;
  height: 10px;
  background-color: black;
  display: inline-block;
  margin-top: 5px;
  margin-right: 8%;
  margin-left: 10%;
}
#neirong-right-top button {
  margin-left: 8%;
}
#neirong-right-lei {
  text-align: center;
}
#neirong-right-lei div {
  margin-left: 8%;
  text-align: left;
  margin-top: 5%;
  position: relative;
}

#neirong-right-lei div input {
  line-height: 35px;
  outline: none;
  border: none;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ccc;
}
#neirong-right-lei div textarea {
  border: none;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ccc;
}

#neirong-right-lei div button {
  background-color: #393939;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
}
#neirong-right-lei div img {
  position: absolute;
  left: 17%;
  top: 1%;
}
#bottom {
  text-align: center;
  line-height: 60px;
  margin-top: 50px;
  width: 100%;
  height: 60px;
  color: #ccc;
  background-color: #393939;
}
h4{
  line-height: 30px;
}

h6{
  line-height: 30px;
}
</style>

