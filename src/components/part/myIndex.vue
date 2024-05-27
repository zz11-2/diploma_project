<template>
<div class="app">
    <!-- <div class="head">
            <img class="logo" src="../../assets/imgs/logo.png" alt=""> 
            <ul class="ordinal">
               <li @click="go('myIndex')">首页</li>
                <li @click="go('nutritionClassroom')">营养课堂</li>
                <li>运动时刻</li>
                <li>好玩游戏</li>
                <li>我的</li>
            </ul>    
    </div> -->
    <!-- <headIndex />
  <router-view /> -->
      <div class="block text-center">
    
    <el-carousel height="66vh" width="100vh" >
      <el-carousel-item v-for="item in imgs" :key="item" style="background-color: white;" class="imgs-box">
       
        <img class="imgs" :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
 

    <div class="center">
      <div>
        <div class="center-top-letf">
      <p style="text-indent:2em;" ><span style="color:#99EF99;">生活茶颜</span><span>一个时代的发展史，往往是青年勇毅前行、逐梦扬帆的拼搏奋斗史。回望中国共产党走过的百年历程，在无数重大历史节点都有着一大批青年拼搏奋斗的身影。革命战争时期，有一大批青年选择身先士卒，拯救国家于危亡；社会主义建设时期，又有一大批青年选择砥砺奋进，为祖国发展添砖加瓦……当前，我国正处于实现中华民族伟大复兴的关键时期，广大新青年大有可为，以期能够在建功新时代中凝聚奋进力量，唱响青春之歌。</span></p>
        <p style="margin-top: 40px;text-indent: 2em;">一个时代的发展史，往往是青年勇毅前行、逐梦扬帆的拼搏奋斗史。回望中国共产党走过的百年历程，在无数重大历史节点都有着一大批青年拼搏奋斗的身影。革命战争时期，有一大批青年选择身先士卒，拯救国家于危亡；社会主义建设时期，又有一大批青年选择砥砺奋进，为祖国发展添砖加瓦……当前，我国正处于实现中华民族伟大复兴的关键时期，广大新青年大有可为，以期能够在建功新时代中凝聚奋进力量，唱响青春之歌。</p>
      </div>
      <div class="center-top-right">
        平台简介
      </div>
      </div>
     <div style="margin-top: 15%; background-color: #F3F5EB; width: 100%; height: 500px;">
      <div class="center-letf" >
      <p style="text-indent:2em;"  ><span style="color:#99EF99;">生活茶颜</span><span>一个时代的发展史，往往是青年勇毅前行、逐梦扬帆的拼搏奋斗史。回望中国共产党走过的百年历程，在无数重大历史节点都有着一大批青年拼搏奋斗的身影。革命战争时期，有一大批青年选择身先士卒，拯救国家于危亡；社会主义建设时期，又有一大批青年选择砥砺奋进，为祖国发展添砖加瓦……当前，我国正处于实现中华民族伟大复兴的关键时期，广大新青年大有可为，以期能够在建功新时代中凝聚奋进力量，唱响青春之歌。</span></p>
        <p style="margin-top: 40px;text-indent: 2em;">一个时代的发展史，往往是青年勇毅前行、逐梦扬帆的拼搏奋斗史。回望中国共产党走过的百年历程，在无数重大历史节点都有着一大批青年拼搏奋斗的身影。革命战争时期，有一大批青年选择身先士卒，拯救国家于危亡；社会主义建设时期，又有一大批青年选择砥砺奋进，为祖国发展添砖加瓦……当前，我国正处于实现中华民族伟大复兴的关键时期，广大新青年大有可为，以期能够在建功新时代中凝聚奋进力量，唱响青春之歌。</p>
      </div>
      <div class="center-right">
       主要方向
      </div>
     </div>
    </div>
    <div class="Tail"></div>

</div>
</template>
<script setup>
// import headIndex from './headIndex.vue';
// import {  useRouter } from 'vue-router';
// const router=useRouter()
// import { ref } from "vue";
 const imgs=[{url:require('../../assets/imgs/lb_1.jpg')},{url:require('../../assets/imgs/lb2.jpg')},{url:require('../../assets/imgs/lb3.jpg')},{url:require('../../assets/imgs/lb4.jpg')}]
// const go=(name)=>{
 
//   router.push({name})
// }
</script>
<style lang="scss" scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
@media only screen and (max-width: 431px) {
  .logo {
    max-width: 130px;
    max-height: 56.5px;
    
  }
  .ordinal{
    max-width: 200px;
    margin-top: 10px;
    margin-right:-61px;
    font-size: 20px
  }
}
@media only screen and (max-width:376px) {
 
 .ordinal{
   max-width: 200px;
   margin-top: 6px;
   margin-right:-80px;
   font-size: 20px
 }
}
@media only screen and (min-width: 767px) and (max-width: 840px) {
  .ordinal {
    
    max-width: 330px;
    margin-top: 14px;
    margin-right: -30px;
    font-size: 20px
  }
}
  @media only screen and (min-width: 841px) and (max-width: 1025px) {
  .ordinal {

    max-width: 330px;
    margin-top: 8px;
    margin-right: 50px;
    font-size: 20px;
  }
}
@media only screen and (min-width: 1301px) {
    .ordinal {
        margin-top: 12px;
    font-size: 20px;
    font-weight:bold;
    
  }
  .ordinal>li{
        display: inline-block;
        padding: 20px;
        border-bottom: 5px solid white;
       
    }
    .ordinal>li:hover{
        border-color:#3D774F ;
    }
}

body{
    margin: 0px;
    padding: 0px;
  
}
.app{
    width: 100%;
    height: auto;
    background-color:white;
   padding: 0px;
}
.head{
    width: 100%;
    height: 15vh;
    background-color: white;
    position: relative;
    .logo{
        width: 30%;
        position: absolute;
        top:50%;
        left:20%;
        transform: translate(-50%, -50%)
    }
    .ordinal{
        width: 65vh;
        list-style: none;
        position: absolute;
        display: flex;
        justify-content: space-between;
        top:42%;
        right:-9%;
        transform: translate(-50%, -50%);
        
       
        
    }
   
    .ordinal>li:hover{
        color:#3D774F ;
       
        
    }
    
}

.imgs{
  width:100%;
  height: 100%;
  object-fit: fill;
}
.center{
  width: 100%;
  height: 800px;
  .center-top-letf{
    width: 50%;
    height: 300px;
    margin-left: 10%;
    margin-top: 10%;
    font-size: 20px;
    color:#3D774F ;
  }
  .center-top-right{
    width:80px;
    height: 240px;
    border-left: 1px solid #3D774F;
    border-right:1px solid #3D774F;
    writing-mode: vertical-rl; // 文字从右到左垂直书写
    display: flex;
   justify-content: center; 
    align-items: center;
    letter-spacing: 28px; 
    font-size: 25px;
    color: #3D774F;
    position: absolute;
    left: 75%;
    top:100vh;
  }
  .center-letf{
    width: 50%;
    height: 300px;
    margin-left:30%;
  
    font-size: 20px;
    color:#3D774F ;
  }
  .center-right{
    width:80px;
    height: 240px;
    border-left: 1px solid #3D774F;
    border-right:1px solid #3D774F;
    writing-mode: vertical-rl; // 文字从右到左垂直书写
    display: flex;
   justify-content: center; 
    align-items: center;
    letter-spacing: 28px; 
    font-size: 25px;
    color: #3D774F;
    position: absolute;
    left: 10%;
    top:170vh;
  }
}
</style>