<template>
    <div>
        <div class="head">
            <div class="title">肌肉锻炼宝典</div>
            <div></div>
            <hr style="border: 1px solid black;">
            <div>
                <img  src="../../assets/imgs/jr3.jpg" alt="">
            </div>
        </div>
       <div >
        <ul class="content">
 <li v-for="item in Muscles" :key="item.id" @click="change(item)"><div>
    <p>{{ item.name }}</p>
    <p v-for="(items,index) in item.classify" :key="index">{{items.name}}
     
    </p>
 </div></li>
        </ul>
       </div>
       <div class="right-column">
        <p class="title">训练专题</p>
        <hr>
        <ul>
            <li>减肥</li>
            <li>有氧训练</li>
            <li>睡前运动</li>
            <li>燃脂运动</li>
        </ul>
       </div>
       <router-view />
    </div>
</template>
<script setup>

import Muscles from '@/resource/motion/muscles';
import { useRouter } from 'vue-router';
import { foodIdStore } from '@/store/foodId';
import {  ref } from 'vue';
const store=foodIdStore()
const router= useRouter()
const index=ref(store.id)

const change=(item)=>{

index.value=item.id
store.setId(index.value)
  console.log(store.id);

    router.push({name:'InformationColumn'})

}
</script>
<style lang="scss" scoped>
.head{
    margin-top: 20px;
    img{
        width: 700px;
        position: relative;
        top: 30px;
        left: -40px;
    }
}
.title{
    width: 120px;
    height: 30px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    background-color: #81ec81;
     /* 沿着X轴倾斜-10度 */
    transform: skew(-10deg);
    
    

}
.content{
    width:820px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: -689px;
    left:640px ;
    li{
        width: 186px;
        height: 160px;
        background-color: #fff;
        border-left: 2px solid #81ec81;
      text-align: center;
      margin: 20px;
      color: pink;
       /* 水平偏移10px，垂直偏移10px，模糊距离5px，阴影尺寸1px，阴影颜色黑色 */
      box-shadow: 10px 10px 5px 1px #F7F7F7;
    }
    li:hover{
        color:red ;
    }
}
.right-column{
    width: 400px;
    height: 280px;
    position: relative;
    // background-color: black;
    left: 950px;
    top:-510px;
    p{
        display: inline-block;
        width: 100px;
        height: 30px;
        transform: skew(-10deg);
        background-color: #81ec81;
        text-align: center;
        padding-top: 10px;
        border-left: 2px solid #155315;
        margin-left: 30px
    }
    ul{
        margin-left: -25px;
        display: flex;
        list-style: none;
        justify-content: space-around;
        flex-wrap: wrap;
        li{
            font-weight: bold;
            text-align: center;
            width: 120px;
            height: 50px;
            background-color: yellow;
            padding-top: 22px;
            border-radius: 15px;
            margin: 20px;
        }
    }
}
</style>