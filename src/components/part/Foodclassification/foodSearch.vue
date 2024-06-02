<template>
    <div>
        <p @click="change">返回大分类</p>
        <p>营养课堂数据库搜索<span>{{ searchString}}</span></p>
        <!-- <p>共有{{searchResults.value.length }}数据</p> -->
        <hr>
    
        
     <div class="box">
            <ul>
                <li  v-for="(item,index) in searchResult" :key="item.id" @click="Jump(item,index)">
                    <div>
                        <p class="name"> {{ item.name }}</p>
                        <p class="detail">热量:{{ item.heat }}千卡</p>
                        
                       
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
</template>
<script setup>
import { ref,onUnmounted } from 'vue';
import { foodIdStore } from '../../../store/foodId';
const {searchString,searchResults,setfoodId,settype,setsearchString}=foodIdStore()
import { useRouter } from 'vue-router';
const router=useRouter()

const searchResult=ref(searchResults)

const Jump = (item,index) => {

    //修改点击后的id以供后面详情页的渲染(搜索出来的数据)
    setfoodId(item.id)

  //修改点击后的type以供后面详情页渲染(搜索后食物类型)
    settype(searchResult.value[index].classify)
   
    //跳转值详情页
    router.push({name:'searchBreakdown'})
    
}
//点击返回大类
const change=()=>{
    router.push({name:'nutritionClasscenter'})
}
//组件销毁后搜索字段修改为空
onUnmounted(()=>{

    setsearchString('')
})
</script>
<style lang="scss" scoped>
.box {
    position: relative;
    top: -8%;

    ul {
        width: 1200px;
        height: auto;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }

    ul>li {
        display: inline-block;
        width: 300px;
        height: 188px;
        background-color: #f0f2e9;
        margin: 20px;

    }

    .name {
        font-size: 16px;
        font-weight: bold;
        margin: 30px;
    }

    .detail {
        color: #B5B7B5;
        margin-left: 30px;
    }
}

</style>