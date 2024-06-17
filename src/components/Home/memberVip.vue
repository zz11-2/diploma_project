<template>
  
  <div class="Information">
  <div class="box">
    <div>
        <p>月卡</p>
        <div>
            <img src="../../assets/imgs/qq.png" alt="">
            <p></p>
        </div>
    </div>
    <div>
        <p>季卡</p>
        <div>
            <img src="../../assets/imgs/qq.png" alt="">
            <p></p>
        </div>
    </div>
    <div>
       <p>年卡</p>
       <div>
        <img src="../../assets/imgs/qq.png" alt="">
        <p></p>
       </div>
    </div>
  </div>
   
    <div style="width: 100%;display: flex; justify-content: space-around;position: absolute; top: 400px;">
    <div class="btn-animate btn-animate__vibrate" @click="jump">
      返回 
</div>
<div class="btn-animate btn-animate__vibrate"  @click="change">
   购买
</div>
  </div>
 
    </div>
  </template>
<script  setup>
//返回个人信息页
import { useRouter } from 'vue-router';
const router=useRouter()
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
    background-color: hsla(0, 0%, 0%, 0.593);
   border-radius: 15px;
   z-index: 1;
.box{
    position: absolute;
    top: 50px;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    div{
width: 200px;
height: 260px;
background-color: white;
border-radius: 15px;
    }
}
   
   }
 

   .btn-animate {
  position: relative;
  width: 130px;
  height: 40px;
  line-height: 40px;
  border: none;
  border-radius: 5px;
  background: #9AC5FF;
  color: #fff;
  text-align: center;
  z-index: 2;
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
   