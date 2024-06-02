<template>
    <div class="app">
<!-- 渲染大类食物导航栏 -->
        <p class="title">膳食研究与营养评估</p>
        <div class="column">
            <p class="type">常见食物分类</p>
            <ul class="list">
                <li v-for="(item, index) in List" :key="index" @click="change(index)">
                    <p :class="{ 'active': activeIndex === index }">{{ item.name }}</p>
                </li>
            </ul>
        </div>
        <div class="shade"></div>
        <div class="crumbs"> <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item
                    :to="{ path: '/navigation/nutritionClassroom/nutritionClasscenter' }" @click='empty()'>常见食物分类</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'/navigation/nutritionClassroom/CerealsProducts/foodType'}" @click="empty()">{{ List[store.id]?.name }}</el-breadcrumb-item>
                <el-breadcrumb-item v-if="List[store.id]?.type[store.foodId - 1]?.name">{{
                    List[store.id]?.type[store.foodId-1]?.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <hr style="position: relative;top: -9%;">
      <router-view />
       
    </div>
</template>
<script setup>
import List from '@/resource';
import { ArrowRight } from '@element-plus/icons-vue'
import { foodIdStore } from '@/store/foodId';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router=useRouter()
const store = foodIdStore()

//定义一个获取用户点击的类型的下标
const activeIndex = ref(store.id)
const change = (index) => {
    activeIndex.value = index

    //用户点击修改类
    store.setId(index)

    //小类的type修改为空
    store.setfoodId('')
   router.push({name:'foodType'})
}
//点击面包屑返回时设置小类id为空最后一层面包屑不显示
const empty=()=>{
    store.setfoodId('')
   
}
</script>

<style lang="scss" scoped>
.title {
    height: 25px;
    display: inline-block;
    font-size: 20px;
    border-left: 10px solid #727C67;
    padding-left: 15px;

}

.column {
    width: 1000px;
    height: 300px;
    position: relative;
    left: 5%;
    background-color: white;
    border: 1px solid #727C67;
    z-index: 2;

    .type {
        position: absolute;
        left: 80px;
        font-size: 24px;
        margin-top: 40px;

    }

    .list {
        margin-top: 80px;
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
            width: 200px;
            height: 40px;
            color: #ABA8A8;

            p {
                font-weight: bold;
                font-size: 20px;
                // color: #ABA8A8;
                text-align: center;
                text-decoration: none;

            }

          

            p:hover {
                text-decoration: underline;
            }
        }
    }
}

.shade {
    width: 1000px;
    height: 300px;
    background-color: #ABA8A8;
    opacity: 0.2;
    position: relative;
    left: 8%;
    top: -13%;
    z-index: 1;
}


.crumbs {
    position: relative;
    top: -10%;
}
.active  {
                color: red;
            }
</style>