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
      <input type="file" ref="fileUploader" class="" accept="image/*" />
      <button @click="uploadAvatar">上传头像</button>
    </div>
  </div>

</template>
<script setup>

import { ref, watchEffect, onMounted, onUnmounted } from 'vue';
import { avatarAPI } from '@/apis/avatar';
import { foodIdStore } from '@/store/foodId'
import { getavatarAPI } from '@/apis/getavatar';
import { userStore } from '@/store/user'

const uStore = userStore()
const store = foodIdStore()

let userId = ref('')
// 创建一个引用，它将指向我们想要与之交互的文件上传元素
const fileUploader = ref(null);

// 创建一个异步方法，用于处理头像上传
const uploadAvatar = async () => {
  // 从 fileUploader 引用的元素中获取选中的文件。files[0] 表示选中的第一个文件。
  const file = fileUploader.value.files[0];

  //如果没有选中的文件，显示一个警告，然后结束这个函数
  if (!file) {
    alert("未选择任何文件");
    return;
  }
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  if (!allowedExtensions.exec(file.name)) {
    alert('无效的文件类型。请上传 JPG, JPEG, PNG, GIF 类型的文件。');
    return;
  }

  // 创建一个新的 FormData 对象，它可以通过 append 方法将一些键值对添加到这个 sendable 数据对象
  const formData = new FormData();
  formData.append('avatar', file);

  //获取房间ID并赋值给userId
  userId.value = store.uid;

  try {
    const result = await avatarAPI(userId.value, formData);
    console.log(result);
    watchEffect(() => {
      getavatarAPI(store.uid)
        .then((response) => {
          console.log('收到的数据:', response);
          if (response) {

            uStore.seturl('data:image/png;base64,' + response)
          } else { 
            console.log('未能从服务器获取到 avatar 数据');
          }
        })
        .catch((error) => {
          console.log('获取 avatar 的请求失败:', error);
        });
    })
  } catch (error) {
    // catch捕获到这个错误
    console.log(error);
  }
}



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
});

onUnmounted(() => {
  clearInterval(intervalId);
});

</script>
<style lang="scss" scoped>
/* 允许滚动但隐藏滚动条 */
html {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
}

html::-webkit-scrollbar {
  /* Chrome, Safari, Edge */
  display: none;
}

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