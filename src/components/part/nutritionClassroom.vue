<template>
    <div class="app">
        <div class="head">
            <div class="search-box">
                <p class="title">食物成分表</p>
                <input 
                    class="search" 
                    type="text" 
                    placeholder="输入食物名称,营养一键查询" 
                    v-model="searchString"
                />
                <img @click="change()" src="../../icon/search.png" alt="">
            </div>
            <!-- <div>{{searchResults  }}</div> -->
        </div>
        <router-view />
    </div>
</template>

<script setup>
import List from '@/resource';
import {onUnmounted, ref, watchEffect} from 'vue'
import { foodIdStore } from '@/store/foodId';
import { useRouter } from 'vue-router';
const {SearchResults,setSearchResults,setsearchString,settype}=foodIdStore()
const searchString = ref('')
const searchResults = ref(SearchResults)
const router=useRouter()

setsearchString(searchString)
//用watchEffect监听响应式数据变化
watchEffect(() => {
    searchResults.value = [] 
    //遍历List数组
    List.forEach(foodItem => {
       
        // console.log(foodItem);
        foodItem.type.forEach(food => {
            
          //判断各类type中name字段是否包含搜索关键字
            if(food.name.includes(searchString.value)&& (searchString.value)) {
                console.log(food.classify);
                
                searchResults.value.push({...food,type:food.classify})
                //将筛选出的数据添加进SearchResults进行管理
                setSearchResults(searchResults.value)
            //修改对应的type
                settype(foodItem.name);
                
            }
        })
    })
   
})

const  change= ()=>{
    //搜索关键字不为空跳转进搜索到数据的页
    if(searchString.value){

        router.push({name:'foodSearch'})
      
    }

}
onUnmounted(()=>{
    window.location.reload()
})
</script>


<style lang="scss" scoped>
body {
    margin: 0px;
    padding: 0px;
}

.app {
    width: 1280px;
    height: 2000px;
    background-color: white;
    position: relative;
    left: 3%;
}

.head {
    width: 100%;
    height: 60vh;
    background-image: url('../../assets/imgs/bj.jpeg');
    background-position: bottom;
    position: relative;
    
    .search-box {
        position: absolute;
        top: 30%;
        left: 42%;
        color: #11f85ae4;
        font-size: 40px;
        line-height: 10px;
        text-align: center;
    }
    
    .search{
        width: 350px;
        height: 30px;
        border-radius: 15px;
        border-color: #26af51e4;
    }
}
img{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 315px;
    top: 93px;
}
</style>