<template>
    <div class="Information">
       <div>
        <p style="text-align: center;">BMI</p>
        <p style="text-indent: 2em;">
          BMI，是Body Mass Index的缩写，即身体质量指数，是国际上常用的衡量人体肥胖程度的重要标准。BMI是通过我们人体体重与身高这两个数值来获取的，可有效评判一个人的健康营养状况。
        </p>
        <p style="text-indent: 2em;">
          BMI指数除了能表达营养状态外，在不同的人群中还有不同的意义，对于糖尿病的风险预测和控糖效果都有一定意义。
        </p>
       <p style="text-indent: 2em;">
        对于普通人，当你的BMI指数越高，那么发生糖尿病的风险也会越高。如果你的BMI≥24kg/m2时，就算是糖尿病的高危人群了。
       </p>
       <p style="text-indent: 2em;">
        对于糖前期人群，糖前期即指出现血糖异常但未达到糖尿病诊断标准。如果BMI达到或接近24kg/m2，医生会马上建议你进行饮食控制、运动锻炼甚至药物治疗，以减轻你的体重。有很多大型研究都证明了，减轻体重对降低糖尿病的风险有很大的帮助。如果你的BMI指数显示超重，即使没有任何症状，也应每年去医院进行糖尿病的筛查。
       </p>
       </div>
       <div style="text-align: center;">
       <p> 根据您上传的个人信息计算</p>
       <p>{{ ustore.data.weight }}÷{{ ustore.data.height }}&nbsp;&nbsp;={{ sum }}</p>
       <p style="color: white; position: absolute; font-size: 8px; top: 351px; left: 404px;">2</p>
       </div>
   <div style="width: 100%;display: flex; justify-content: space-around;">
    <div class="btn-animate btn-animate__vibrate" @click="jump">
      返回 
</div>

    </div>
    </div>
  </template>
<script  setup>
 '@/apis/Information'
// import {foodIdStore} from '@/store/foodId'
import {userStore} from '@/store/user'
import { useRouter } from 'vue-router';
import {ref} from 'vue'
// const store=foodIdStore()
const ustore=userStore()
const router=useRouter()
const sum=ref()
sum.value=(ustore.data.weight/((ustore.data.height/100) * (ustore.data.height/100))).toFixed(1)
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
   div{
    p{
      color: white;
    }
   }
   }

   .btn-animate {
   margin-top: 20px;
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
   