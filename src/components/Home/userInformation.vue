<template>
  <div class="user">
    <div class="individual">
      <div class="img-box">
        <img class="img" :src="uStore.url" alt="">
      </div>
      <p class="name">{{ uStore.data.uname }}</p>
    </div>
    <div class="title">
      <p style="margin: 10px; color: burlywood;">个性签名:</p>
      <p style="text-align: center; margin-top: 2px;">
        {{ uStore.data.personality }}
      </p>
    </div>
    <div class="column-head">
      <div class="time">
        {{ dateTime }}
      </div>
      <div class="time">
       <p> 自律遇见更好的自己</p>
      </div>
    </div>
    <div>
      <img class="vip" src="../../assets/imgs/vip.png" alt="">
      <router-view />
    
    </div>
    <div style="display: none;">
     
    </div>
  </div>

</template>
<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import { userStore } from '@/store/user'
import {getInformationAPI} from '@/apis/getInformation'
import {foodIdStore} from '@/store/foodId'
const uStore = userStore()
const store=foodIdStore()



//时间模块
const dateTime = ref('');
const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

const updateDateTime = () => {
  const now = new Date();
  const weekDay = weekDays[now.getDay()];
  const year = now.getFullYear();
  const month = padding(now.getMonth() + 1);
  const day = padding(now.getDate());
  const hour = padding(now.getHours());
  const minute = padding(now.getMinutes());
  const second = padding(now.getSeconds());

  dateTime.value = ` ${year}-${month}-${day} ${weekDay} ${hour}:${minute}:${second}`;
};

const padding = (n) => (n < 10 ? '0' + n : n);

let intervalId;

onMounted(() => {
  updateDateTime();
  intervalId = setInterval(updateDateTime, 1000);
  getInformationAPI(store.uid).then((response)=>{
    uStore.setdata(response)
  })
});

onUnmounted(() => {
  clearInterval(intervalId);
});

</script>
<style lang="scss" scoped>


body {
  margin: 0px;
}

.user {
  width: 1390px;
  height: 1000px;
  background-image: url('../../assets/imgs/2.jpg')
}

.vip {
  width: 40px;
  height: 40px;
  position: relative;
  left: 316px;
  top: 258px;

}

.img-box {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border-radius: 50%;
  overflow: hidden;

  box-shadow: 0px -2px 20px 5px #F1E59D;

  .img {
    width: 100%;
    height: 100%;
  }
}


.individual {
 width:800px ;
  position: relative;
  display: flex;
  
  top: 300px;
  left: 100px;

  .name {
    margin-left: 58px;
    margin-top: 100px;
    color: white;
    font-size: 28px;
    font-family: 'Courier New', Courier, monospace;
  }
}


.column-head{
  width: 800px;
  display: flex;
  position: absolute;
  left: 531px;
  .time {
    margin: 20px;
  width: 390px;
  height: 150px;
  color: white;
  background-color: hsla(0, 0%, 0%, 0.5);
  font-size: 30px;
  flex-wrap: wrap;
  font-weight: bold;
  border-radius: 15px;
  text-align: center;
  padding-top: 40px;
}
}
.title{
  
  width: 400px;
  height: 100px;
  border-radius: 15px;
  color: white;
  background-color: hsla(0, 0%, 0%, 0.5);
  position: absolute;
  top: 600px;
  left: 50px;

}
</style>