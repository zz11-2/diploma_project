<template>
    <div class="user">
     <div class="individual">
      <div class="img-box">
        <img class="img" :src="uStore.url" alt=""> 
      </div>
      <p>admin</p>
     </div>
     <div>
      <p>
        aaaaaaaaa
      </p>
     </div>
     <div>
       time
        </div>
        <div>
      <img class="vip" src="../../assets/imgs/vip (1).png" alt="">
      <div class="column">
       
        <div>
        开通VIP
      </div>
      <div>
        个人信息
      </div>
      <div>
        身材管理
      </div>
      <div>
        训练打卡
      </div>
      <div>
        起始页
      </div>
      </div>
    </div>
   <div style="display: none;">
    <input type="file" ref="fileUploader" class="" accept="image/*" />
    <button @click="uploadAvatar">上传头像</button>
   </div>
    </div>
   
</template>
<script setup>

import {  ref, watchEffect } from 'vue';
import  { avatarAPI } from '@/apis/avatar';
import {foodIdStore} from '@/store/foodId'
import {getavatarAPI} from '@/apis/getavatar';
import {userStore} from '@/store/user'

const uStore =userStore()
const store=foodIdStore()

let userId =ref('')
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
  if(!allowedExtensions.exec(file.name)){
    alert('无效的文件类型。请上传 JPG, JPEG, PNG, GIF 类型的文件。');
    return;
  }

  // 创建一个新的 FormData 对象，它可以让你通过 append 方法将一些键值对添加到这个 sendable 数据对象。在这个例子中，把名为 'avatar' 的字段设置为选中的文件。
  const formData = new FormData();
  formData.append('avatar', file);

   //获取房间ID并赋值给userId
   userId.value = store.uid;

  // 尝试调用 avatarAPI 方法，将 userId 和 formData 作为参数传递。这个方法可能会进行一些形式的网络请求，比如一个 fetch 调用，它将 formData 发送给服务器。
  // 值得注意的是，await 关键字表示这个函数调用可能需要一段时间来完成，我们需要等待它完成。
  try {
    const result = await avatarAPI(userId.value, formData); 
    console.log(result); //在控制台中显示结果
    watchEffect(()=>{
    getavatarAPI(store.uid)
    .then( (response)=> {
        console.log('收到的数据:', response);
        if (response) {
            
          uStore.seturl( 'data:image/png;base64,' + response )
         } else {
          console.log('未能从服务器获取到 avatar 数据');
        }
    })
    .catch((error)=> {
        console.log('获取 avatar 的请求失败:', error);
    });
   })
  } catch (error) {
    // 如果在尝试调用 avatarAPI 方法时出错，那么 catch 语句会捕获到这个错误，并在控制台中把错误信息打印出来。
    console.log(error);
  }
}
   
  
</script>
<style lang="scss" scoped>
.user{
  width: 100%;
  height: 1000px;
  background-image: url('../../assets/imgs/2.jpg')
}
.vip {
  width: 25px;
  height: 25px;
}
.img-box{
  width: 200px;
  height: 200px;
  border-radius:50%;
  border-radius: 50%;
  overflow: hidden;
  
  box-shadow: 0px -2px 15px 1px #A0CFFF;
  .img{
  width: 100%;
  height: 100%;
}
}
.column{
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  div{
    width: 225px;
    height: 125px;
    background-color: black;
    opacity: 0.5;
    color: white;
    margin: 20px;
    border-radius: 10px;
  }
}
.individual{
  display: flex;
}

</style>