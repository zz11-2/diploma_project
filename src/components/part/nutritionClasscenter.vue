<template>
   <div class="center">
            <p class="p">常见食物分类</p>
            <ul class="list">
                <li  v-for="(item,index) in List" :key="index">
                <div class="box">
                   
                    <img class="img" @click="change( index)" :src="item.url" alt="">
                    <div class="shadow"></div>
                    <p  class="tilte">{{ item.name }}</p>
                </div>    
                </li>
             
            </ul>
        </div>
</template>
<script setup>
import rawData  from '@/resource';
import { foodIdStore } from '@/store/foodId';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
//引入store
   const store=foodIdStore()
const router=useRouter()
const List = reactive(rawData);
const change=(index)=>{
    //调用store中的setId方法传入点击id
    store.setId(index)
    router.push({name:'foodType'})
   
}   

</script>
<style lang="scss" scoped>
.center{
    .list{
        width: 100%;
        height: auto;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
    .p{
        height: 30px;
        margin-top: 40px;
        font-size: 20px;
        color: black;
        font-weight:bold;
        display: inline-block;
        border-left: 7px solid #6A765A;
        padding-left: 10px;
    
    }
    .box{
        width: 330px;
        height: 340px;
        margin:40px;
        float: left;
      
        .shadow{
            width: 300px;
            height: 300px;
            background-color: #F0F2E9;
            margin-top: -285px;
            margin-left: 20px;
                 }
        .img{
        width: 300px;
        height: 300px;
        }
       .tilte{
        font-size: 18px;
        font-weight: bold;
        color:#727C67 ;
        text-align: center;
       }
    }
  
}
</style>