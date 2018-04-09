<template>
     <div id="qxlp-right">
     <div id="neirong-right-top">
          <span></span>
          楼市动向-News
        </div>
        <div id="neirong-right-lei">
          <div v-for="i in arr">
            <h5>{{i.tit2}}</h5>
            <p>{{i.con2}}</p>
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
  props: {
    a: String
  },
  created() {
    this.$http.get("http://localhost:8000/news").then(e => {
      this.arr = e.body;
    });
  }
};
</script>

<style>


#qxlp-right{
    background-color: #f7f7f7;
}
#neirong-right-top{
  overflow: hidden;
  line-height: 30px;
}
#neirong-right-top span{
  width: 10px;
  height: 10px;
  background-color: black;
  display: inline-block;
  margin-top: 5px;
  margin-right: 4%;
  margin-left: 10%;
}
#neirong-right-lei{
  text-align: center;
}
#neirong-right-lei div{
  margin-left: 8%;
  text-align: left;
  margin-top: 5%;
  position: relative;
}
#neirong-right-lei div p{
    font-size: 12px;
}

</style>
