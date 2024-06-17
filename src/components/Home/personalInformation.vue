<template>
    <div class="Information">
        <el-form :model="form" label-width="auto" style="max-width: 600px;margin-top: 30px; margin-left: 70px;" >
      <el-form-item label="姓名" >
        <el-input v-model="form.uname" />
      </el-form-item>
      <el-form-item label="性别" >
        <el-select v-model="form.gender">
          <el-option label="男" value="男" />
          <el-option label="女 " value="女" />
        </el-select>
      </el-form-item>
      <el-form-item label="个性化签名">
      <el-input v-model="form.personality" />
    </el-form-item>
      <el-form-item label="出生日期" >
        <el-col :span="11">
          <el-date-picker
            v-model="form.time"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="身高(cm)" >
      <el-input v-model.number="form.height" />
    </el-form-item>
    <el-form-item label="体重(kg)">
      <el-input v-model.number="form.weight" />
    </el-form-item>
   
    </el-form>
   <div style="width: 100%;display: flex; justify-content: space-around;">
    <div class="btn-animate btn-animate__vibrate" @click="jump">
      返回 
</div>
<div class="btn-animate btn-animate__vibrate"  @click="change">
   提交
</div>
    </div>
    </div>
  </template>
<script  setup>
import {getInformationAPI} from '@/apis/getInformation'
import { onMounted, reactive, watch  } from 'vue'
import moment from 'moment';  
import {InformationAPI} from '@/apis/Information'
import {foodIdStore} from '@/store/foodId'
import {userStore} from '@/store/user'
import { useRouter } from 'vue-router';

const store=foodIdStore()
const uStore=userStore()
const router=useRouter()
//表单数据
const form = reactive({
  uname: '',
  time: '',
  gender: '',
  height: '',
  weight: '',
  personality:'',
  age:0
})

onMounted(()=>{
  getInformationAPI(store.uid).then((response)=>{
  console.log(response);
  Object.assign(form,response)
})
})
uStore.setdata(form)
console.log(form.uname);
//时间
watch (() => {
 
 form.age= moment().year() - moment(form.time).year()
})
//填写完信息后提交数据库
const change=()=>{
    console.log(store.uid);
    InformationAPI(store.uid,form).then((response)=>{
      console.log(response);
      alert('修改成功')
      router.push({name:'userColumn'})
     
    })
}
//返回个人信息页
const jump=()=>{
  router.push({name:'userColumn'})
}
</script>
   <style lang="scss" scoped>
   .Information{
    position: absolute;
    top: 502px;
    left: 526px;
    width: 800px;
    height: 490px;
    background-color: hsla(0, 0%, 0%, 0.5);
   
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

@keyframes vibrate {
  60% {
    transform: scale3d(.8, .8, 1)
  }
  85% {
    transform: scale3d(1.1, 1.1, 1)
  }
  100% {
    transform: scale3d(1, 1, 1)
  }
}

@keyframes vibrate2 {
  to {
    opacity: 0;
    transform: scale3d(1, 1, 1)
  }
}

.btn-animate__vibrate {

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    bottom: -15px;
    right: -15px;
    background: inherit;
    z-index: -1;
    opacity: 0.5;
    transform: scale3d(.6, .4, 1);
  }

  &:hover {
    &::before {
      animation: vibrate2 .3s .3s forwards;
    }

    animation: vibrate .3s forwards;
  }
}
   </style>
   