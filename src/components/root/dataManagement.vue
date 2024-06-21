<template>
    <div class="center" >
       <div class="info">
        <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="食物名称">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="食物类型">
      <el-select v-model="form.classify" placeholder="请选择食物的类别">
        <el-option label="菌藻类" value="菌藻类" />
        <el-option label="谷类及制品" value="谷类及制品" />
        <el-option label="蛋类及制品" value="蛋类及制品" />
        <el-option label="水果类及制品" value="水果类及制品" />
        <el-option label="干豆类及制品" value="干豆类及制品" />
        <el-option label="畜肉类及制品" value="畜肉类及制品" />
        <el-option label="乳类及制品" value="乳类及制品" />
        <el-option label="坚果种子类" value="坚果种子类" />
        <el-option label="薯类、淀粉及制品" value="薯类、淀粉及制品" />
        <el-option label="禽肉类及制品" value="禽肉类及制品" />
        <el-option label="鱼虾蟹贝类" value="鱼虾蟹贝类" />
        <el-option label="蔬菜类及制品" value="蔬菜类及制品" />
        <el-option v-for="(item,index) in data" :key="index"  :label="item.name" 
        :value="item.name" />
      </el-select>
    </el-form-item>
    <el-form-item label="热量">
      <el-input v-model="form.heat" />
    </el-form-item>
    <el-form-item label="脂肪">
      <el-input v-model="form.fat" />
    </el-form-item>
    <el-form-item label="纤维素">
      <el-input v-model="form.cellulose" />
    </el-form-item>
    <el-form-item label="碳水化合物">
      <el-input v-model="form.carbohydrates" />
    </el-form-item>
    <el-form-item label="蛋白质">
      <el-input v-model="form.protein" />
    </el-form-item>
    <el-form-item label="维生素A">
      <el-input v-model="form.vitamin_A" />
    </el-form-item>
  </el-form>
  <div @click="change" class="btn-animate btn-animate__around">
    <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"></rect>
    </svg>
    提交
</div>
       </div>
    
    </div>
  </template>
  <script setup>
  import { reactive } from 'vue'
  import {setfoodAPI} from '@/apis/setfood'
  import {gettypeAPI} from '@/apis/gettype'
// do not use same name with ref
const form = reactive({
  name: '',
  heat: '',
  classify: '',
  fat:'',
  cellulose: '',
  carbohydrates: '',
  protein: '',
  vitamin_A: '',
})
const data = reactive([])
gettypeAPI().then((response) => {
  response.forEach(item => data.push(item));
  console.log(data);
})
const change=()=>{
    setfoodAPI(form).then((response)=>{
        console.log(response)
        console.log(form);
        window.location.reload()
    }).catch((error)=>{
        console.log(error);
    })

}
  </script>
  <style lang="scss" scoped>
  .center{
    width: 1139px;
    height: 760px;
    background-color: hsla(0, 0%, 0%, 0.8);
    position: absolute;
    left:261px;
    top: 81px;
  }
 .info{
  width: 100%;
  position: absolute;
  left: 231px;
  top: 125px;
 }
   .btn-animate {
  position: relative;
  width: 130px;
  height: 40px;
  line-height: 40px;
  border: none;
  border-radius: 5px;
  background: #027efb;
  color: #fff;
  text-align: center;
}


.btn-animate__around {
  background: transparent;
  color: white;
  position: absolute;
  top: 415px;
  left: 261px;
  & > svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    & > rect {
      fill: none;
      stroke: #027efb;
      stroke-width: 3;
      stroke-dasharray: 422, 0;
      transition: all .5s linear;
    }
  }

  &:hover {
    font-weight: 600;

    & > svg {
      & > rect {
        stroke-width: 5;
        stroke-dasharray: 15, 260;
        stroke-dashoffset: 50%;
        transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
}
  </style>