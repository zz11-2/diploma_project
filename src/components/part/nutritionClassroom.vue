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
            </div>
            <!-- <div>{{searchResults  }}</div> -->
        </div>
        <router-view />
    </div>
</template>

<script setup>
import List from '@/resource';
import {ref, watchEffect} from 'vue'
import { foodIdStore } from '@/store/foodId';
const {SearchResults,setSearchResults}=foodIdStore()
const searchString = ref('')
const searchResults = ref(SearchResults)

watchEffect(() => {
    searchResults.value = [] 
    List.forEach(foodItem => {
        // console.log(foodItem);
        foodItem.type.forEach(food => {
            // console.log(food.name);
            if(food.name.includes(searchString.value)&& (searchString.value)) {
                console.log(food.name);
                searchResults.value.push(food)
                setSearchResults(searchResults.value)
            }
        })
    })
   
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

</style>