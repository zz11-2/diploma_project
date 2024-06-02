<template>
    <!-- 渲染点击后List的小类 -->
     <div class="box">
            <ul>
                <li v-for="item in List[store.id].type" :key="item.id" @click="Jump(item.id)">
                    <div>
                        <p class="name"> {{ item.name }}</p>
                        <p class="detail">热量:{{ item.heat }}千卡</p>
                    </div>
                </li>
            </ul>
        </div>
</template>
<script setup>
import List from '@/resource';
import { foodIdStore } from '@/store/foodId';
import { useRouter } from 'vue-router';
// import { ref } from 'vue'
const router=useRouter()
const store = foodIdStore()
const Jump = (id) => {
   
    //修改点击后小类的id以供后面详细数据渲染
    store.setfoodId(id)
    //点击后跳转详情页
    router.push({name:'foodBreakdown'})
}
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