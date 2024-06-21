<template>
  <div>
    <div class="user">
      <div class="user-head">
        <div class="box">
          <img v-if="url" :src="url" alt="">
        </div>
        <div>
          <p>{{ store.data.uname }}</p>
        </div>
        <el-popconfirm v-if="ustore.uid" confirm-button-text="Yes" cancel-button-text="No" :icon="InfoFilled"
          icon-color="#626AEF" title="是否退出登录?" @confirm="confirmEvent" @cancel="cancelEvent">
          <template #reference>
            <el-button>退出登录</el-button>
          </template>
        </el-popconfirm>
        <button class="btn" @click="change" v-if="!ustore.uid">登录</button>
      </div>
    </div>
    <div class="head">

      <img class="logo" src="../../assets/imgs/logo.png" alt="">
      <ul class="ordinal">
        <li @click="go('myIndex')">首页</li>
        <li @click="go('nutritionClasscenter')">营养课堂</li>
        <li @click="go('motionIndex')">运动时刻</li>
        <!-- <li @click="go('gameIndex')">好玩游戏</li> -->
        <li @click="go('myHome')">我的</li>
      </ul>
    </div>
  </div>
  <router-view />
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { userStore } from '@/store/user'
import { foodIdStore } from '@/store/foodId'
import { getavatarAPI } from '@/apis/getavatar'
import { getInformationAPI } from '@/apis//getInformation'
import { useRouter } from 'vue-router';
import { InfoFilled } from '@element-plus/icons-vue'
const router = useRouter()
const store = userStore()
const ustore = foodIdStore()
const url = ref()
//退出登录
const confirmEvent = () => {
  store.setdata('')
  ustore.setuid('')
  router.push({ name: 'Login' })
}



//获取用户头像
getavatarAPI(ustore.uid).then((response) => {
  url.value = 'data:image/png;base64,' + response
  // console.log(url.value);
  store.seturl(url.value)
})
  .catch((error) => {
    console.log(error);
  })
const change = () => {
  router.push({ name: 'Login' })
}


const go = (name) => {
  if (ustore.uid) {
    router.push({ name })
    return
  } else {
    alert('请先登录')
  }
}

onMounted(() => {
  getInformationAPI(ustore.uid).then((response) => {
    console.log(response);
    store.setdata(response)
    console.log(store.data);
  })
})

</script>
<style lang="scss" scoped>


.head {
  width: 1000px;
  height: 100px;
  background-color: white;
  position: relative;

  .logo {
    width: 30%;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%)
  }
  .ordinal {
    width: 400px;
    list-style: none;
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 25px;
    left: 1040px;
    transform: translate(-50%, -50%);
    font-size: 23px;
    cursor:default;
  }

  .ordinal>li:hover {
    color: #3D774F;
    border-bottom: 1px solid black;
  }

}

.user {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid black;

  .user-head {
    margin-top: 15px;
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    left: 1000px;
  }

  .box {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.btn {
  width: 70px;
  height: 30px;
  border: 0px;
  // background-color:;
  color: #0960BD;
  border-radius: 5px;
}
</style>