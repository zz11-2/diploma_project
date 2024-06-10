<template>
  <div>
 
    <img class="background" src="../../assets/imgs/bj_user.jpg" alt="">
    <div class="column">

      <div class="Translation">
        <img :src="store.url" alt="">
      </div>
      <div class="column_box">
        <h1 class="name">admin</h1>
        <hr class="line">
        <p class="p">寂静海</p>
        <p class="personality">欢迎来到我的主页</p>
        <p class="personality">{{ number }}跳转个人信息页</p>
      </div>
    </div>
   
  </div>
</template>
<script setup>
import {userStore} from '@/store/user'
import {onMounted,ref,onBeforeUnmount} from 'vue'
import { useRouter } from 'vue-router';
const router= useRouter()
const number=ref(5)
const time=ref('')
const store=userStore()
//页面渲染页面下拉1000px
onMounted(()=>{
  window.scrollBy(0, 1000);
     time.value=setInterval(()=>{
      number.value--
      if(number.value===0){
      clearInterval(time)
      router.push({name:'userInformation'})
    }
    },1000)
   
})
onBeforeUnmount(()=>{
  clearInterval(time.value)
})
</script>
<style lang="scss" scoped>
.column {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 488px;
  left: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
background-color: black;
opacity: 0.7;
align-items: center;
border-radius: 10px;
  .name{
    color:white;
  }
  .Translation {
    width: 100px;
    height: 100px;
    // background-color: #f4f4f6;
    border-radius: 50%;
    box-shadow: 0px -2px 15px 1px #A0CFFF;
    overflow: hidden;
   img{
    width: 100%;
    height: 100%;
   }
  }
.p{
  font-weight: bold;
  color: #424545;
 
  // margin-left: -20px;
}
.personality{
  font-size: 18px;
  letter-spacing:10px;
color: #22818e;
//鼠标移动变成小手
cursor: pointer;

}
  .column_box {
    width: 300px;
    height: auto;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .line {
    width: 200px;
    border: 0.5px solid white;
    opacity: 0.7;
  //  margin-top: 10px;
  //  margin-left: -40px;
  }
}


.background {
  width:1400px;
  position: relative;
}

</style>