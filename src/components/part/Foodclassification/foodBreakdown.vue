<template>
  <!-- 点击小类食物后详细信息的渲染 -->
     <div class="table">
     <div class="column">
      <p class="title"><span style="margin-left: 10px;">{{ (List[store.id].type[foodId-1]) ? List[store.id].type[foodId-1].name : List[store.id].type[foodId-3].name }}</span></p>
      <p  style="padding-top:-10px ;"><span>别名:</span></p>
      <p><span>热量:</span>{{(List[store.id].type[foodId-1]) ? List[store.id].type[foodId-1].name : List[store.id].type[foodId-3].heat}}千卡</p>
      <p><span>分类:</span>{{  (List[store.id].type[foodId-1]) ? List[store.id].type[foodId-1].name : List[store.id].type[foodId-3].classify }}</p>
     </div>
     <div class="information">
      <p><span style="margin-left: 14px;">营养信息</span></p>
      <div class="box">
        <div>
        <div style="border: 0px; padding-top: 0px;">营养素</div>
        <div>热量(千卡)</div>
        <div>脂肪(千卡)</div>
        <div>纤维素(克)</div>
      </div>
      <div >
        <div  style="border: 0px; padding-top: 0px;">含量(每100克)</div>
        <div>{{ (List[store.id].type[foodId-1]) ? List[store.id].type[foodId-1].name : List[store.id].type[foodId-3].heat }}</div>
        <div>{{ (List[store.id].type[foodId-1]) ? List[store.id].type[foodId-1].name : List[store.id].type[foodId-3].fat }}</div>
        <div>{{ (List[store.id].type[foodId-1]) ? List[store.id].type[foodId-1].name : List[store.id].type[foodId-3].cellulose }}</div>
      </div>
      <div>
        <div  style="border: 0px; padding-top: 0px;">营养素</div>
        <div>碳水化合物(克)</div>
        <div>蛋白质(克)</div>
        <div>维生素A(微克)</div>
      </div>
      <div>
        <div  style="border: 0px; padding-top: 0px;">含量(每100克)</div>
        <div>{{(List[store.id].type[foodId-1]) ? List[store.id].type[foodId-1].name : List[store.id].type[foodId-3].carbohydrates  }}</div>
        <div>{{ (List[store.id].type[foodId-1]) ? List[store.id].type[foodId-1].name : List[store.id].type[foodId-3].protein }}</div>
        <div>{{ (List[store.id].type[foodId-1]) ? List[store.id].type[foodId-1].name : List[store.id].type[foodId-3].vitamin_A }}</div>
      </div>
      </div>
     </div>
        </div>
</template>
<script setup>
import List from '@/resource';
import { foodIdStore } from '@/store/foodId';

const store = foodIdStore()
const {foodId}=store


</script>
<style lang="scss" scoped>
  .table{
    width: 1130px;
    height: 750px;
    border: 2px solid#788B66 ;
   position: relative;
   left: 3%;
   top: -6%;
   .column{
    .title{
      width: 1130px;
      height: 50px;
      font-weight: bold;
      display: inline-block;
      border-bottom: 2px solid #788B66;
      color: #788B66;
      margin-top: 0px;
      padding-top: 20px;
      font-size: 20px;
      background-color: #f0f2e9;
    }
    p{
      color: #788B66;
      font-size: 18px;
      border-bottom: 1px solid #788B66;
      padding-bottom: 24px;
    }
    span{
    
      margin-left: 44px;
      font-size: 20px;
      font-weight: bold;
      color: #788B66;
      
    }
   }
   .information{
    p{
      margin-top:-18px ;
      width: 1130px;
      height: 50px;
      color: #000;
      font-weight: bold;
      border-bottom: 2px solid #788B66;
      background-color: #f0f2e9;
      padding-top: 25px;
    }
    .box{
      display: flex;
      justify-content: space-around;
      text-align: center;
      div{
        width: 50%;
        height: 40px;
       
        padding-top: 10px;
        border-bottom: 1px solid #788B66;
      }
      
    }
   }
  }
</style>