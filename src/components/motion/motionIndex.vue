<template>
    <div>
        <div class="box">
            <div class="title">肌肉锻炼宝典</div>
            <div></div>
            <hr style="border: 1px solid black;">
            <div>
                <img style="width:700px ;" src="../../assets/imgs/jr3.jpg" alt="">
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
        <p>训练专题</p>
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
import { watchEffect,ref } from 'vue';
const {setId}=foodIdStore()
const router= useRouter()
const index=ref('')
const change=()=>{
    watchEffect((item)=>{
        index.value=item.id
        setId(index)
    })
  
    router.push({name:'InformationColumn'})
}
</script>
<style lang="scss" scoped>
.title{
    width: 120px;
    height: 30px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    background-color: yellow;
     /* 沿着X轴倾斜-10度 */
    transform: skew(-10deg);
    padding-top: 10px;
    

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
        border-left: 2px solid yellow;
      text-align: center;
      margin: 20px;
       /* 水平偏移10px，垂直偏移10px，模糊距离5px，阴影尺寸1px，阴影颜色黑色 */
      box-shadow: 10px 10px 5px 1px #F7F7F7;
     
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
        background-color: yellow;
        text-align: center;
        padding-top: 10px;
        border-left: 2px solid black;
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