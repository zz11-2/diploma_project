<template>
    <div>
        <div class="head">
           <div class="left">
            <img src="../../assets/imgs/ht.png" alt="">
            <p>后台管理系统</p>
            <img style="width: 30px; height: 30px" src="../../assets/imgs/qb.png" alt="">
           </div>
           <div class="right">
            <img src="../../assets/imgs//tz.png" alt="">
            <div class="Translation">
        <img  style="width: 100%; height: 100%" :src="url" alt="">
      </div>
            <p>{{ name }}</p>
           </div>
        </div>

        <div class="center">
         <div class="center-left" @click="change('userManagement')">
            <img src="../../assets/imgs/yh.png" alt="">
            <p>用户管理</p>
         </div>
        
         <div class="center-left" @click="change('dataManagement')">
            <img src="../../assets/imgs/sj.png" alt="">
            <p>数据管理</p>
         </div>
        </div>
        <router-view />
    </div>
 </template>
 <script setup>
 import {ref} from 'vue'
  import {foodIdStore} from '@/store/foodId'
  import {rootAvatarAPI} from '@/apis/rootavatar'
import { useRouter } from 'vue-router';
  import {getInformationAPI} from '@/apis/getInformation'
  let name=ref()
  const router= useRouter()
  const url=ref()
   const store=foodIdStore()
   rootAvatarAPI(store.uid).then((response)=>{
      url.value = 'data:image/png;base64,' + response
  })
  getInformationAPI(store.uid).then((response)=>{
 name.value=response.uname
  })
  const change=(name)=>{
    router.push({name:name})
  }
 </script>
 <style lang="scss" scoped>
 .head{
    width: 1400px;
    height: 80px;
    background-color: #242F41;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-between;
    .right{
      width: 310px;
      height: 80px;
      display: flex;
      color: white;
      justify-content:space-around;
      align-items: center  ;
      img{
      width: 40px;
      height: 40px;
    }
    }
    .left{
      width: 310px;
      height: 80px;
      display: flex;
      color: white;
      justify-content:space-around;
      align-items: center  ;
      img{
      width: 40px;
      height: 40px;
    }
    }
   
 }
.center{
   width: 260px;
   height: 760px;
   background-color: #242F41;
   .center-left{
      width: 260px;
     height: 60px;
      color: white;
      display: flex;
    justify-content: center;
      img{
         width: 40px;
         height: 40px;
         margin-right: 20px;
      }
   }
}
.Translation {
    width: 60px;
    height: 60px;
    // background-color: #f4f4f6;
    border-radius: 50%;
    box-shadow: 0px -2px 15px 1px #A0CFFF;
    overflow: hidden;
   img{
    width: 100%;
    height: 100%;
   }
  }

 </style>