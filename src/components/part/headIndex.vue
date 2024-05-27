<template>
    
    <div class="head">
            <img class="logo" src="../../assets/imgs/logo.png" alt=""> 
            <ul class="ordinal">
               <li @click="go('myIndex')">首页</li>
                <li @click="go('nutritionClassroom')">营养课堂</li>
                <li>运动时刻</li>
                <li>好玩游戏</li>
                <li>我的</li>
            </ul>    
    </div>
    <router-view />
</template>
<script setup>
import {useRouter } from 'vue-router';
const router=useRouter()
// import { ref } from "vue";
 
const go=(name)=>{
 
  router.push({name})
}
</script>
<style lang="scss" scoped>
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
</style>