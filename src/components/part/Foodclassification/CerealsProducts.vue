<template>
    <div class="app">

        <p class="title">膳食研究与营养评估</p>
        <div class="column">
            <p class="type">常见食物分类</p>
            <ul class="list">
                <li v-for="(item, index) in List" :key="index"><p>{{ item.name }}</p></li>
            </ul>
        </div>
        <div class="shade"></div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import List from '@/resource';

const router = useRoute()
let params = router.params
const { id } = params
console.log(id);
console.log(List[id].type);
</script>

<style lang="scss" scoped>
.title {
    height: 25px;
    display: inline-block;
    font-size: 20px;
    border-left: 10px solid #727C67;
    padding-left: 15px;

}
.column{
    width:1000px;
    height: 300px;
    position: relative;
    left: 5%;
    background-color: white;
   border: 1px solid #727C67;
   z-index: 2;

    .type{
 position: absolute;
 left: 80px;
 font-size: 24px;
 margin-top: 40px;
 
    }
    .list{
        margin-top: 80px;
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        justify-content: space-between;
        
        li{
            width: 200px;
            height: 40px;
          
            p{
            
                font-size: 20px;
           color: #ABA8A8;
            text-align: center;
            text-decoration: none;
           
            }
            p:hover{
                text-decoration: underline;
            }
        }
    }
}   
.shade{
    width:1000px;
    height: 300px;
    background-color: #ABA8A8;
    opacity: 0.2;
    position: relative;
    left: 8%;
    top: -13%;
    z-index: 1;
}
</style>