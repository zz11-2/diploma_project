<template>
      <div class="column">

<div>
  开通VIP
</div>
<div @click="change('personalInformation')">
  <img src="../../assets/imgs/jbxx.png" alt=""  style="width: 40px;">
  个人信息
</div>
<div>
  <img src="../../assets/imgs/scgl.png" alt="">
  身材管理
</div>

  <div>
    <img src="../../assets/imgs/dk.png" alt="" >
    训练打卡
  <el-button style="width:225px; height: 125px; opacity: 0; position: absolute;"  plain @click="open">
 
  </el-button>

</div>


<div @click="change('myIndex')">
  <img src="../../assets/imgs/cs.png" alt="">
  起始页
 
</div>
<div>
  <img src="../../assets/imgs/sjjc.png" alt="">
  数据监测
</div>
</div>
</template>
<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue';
import {ClockAPI} from '@/apis/clock'
import { useRouter } from 'vue-router';
import {foodIdStore} from '@/store/foodId'
const store=foodIdStore()
const router = useRouter()
const Information=ref()
const change = (name) => {
  console.log(111);
  router.push({ name })
}
//打卡信息


const open = () => {
  ElMessageBox.prompt('请输入你今天的运动项目', '打卡', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    
    inputErrorMessage: 'Invalid Email',
  })
    .then(({ value }) => {
      Information.value=value
      ElMessage({
        type: 'success',
        message: `打卡成功,今天的运动是:${value}`,        
      })
      ClockAPI(store.uid,Information.value)
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '打卡失败',
      })
    })
}

</script>
<style lang="scss" scoped>
.column {

width: 800px;
display: flex;
flex-wrap: wrap;
position: absolute;
top: 475px;
left: 531px;

div {
  width: 225px;
  height: 125px;
  background-color: hsla(0, 0%, 0%, 0.5);
  /* 半透明的黑色 */
  color: white;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  img{
    width: 30px;
    height: 30px;
    
  }
}
}

</style>