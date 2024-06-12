<template>
    <div class="Information">
       <div style="position: absolute;top: 40px; left: 40px;">
        <el-timeline style="max-width: 600px">
    <el-timeline-item 
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
  
      :size="activity.size"
      :hollow="activity.hollow"
      :timestamp="time"
      :class="el"
    >
      <p style="color: white; margin: 0px">
        {{ activity.activity }}
      </p>
    </el-timeline-item>
  </el-timeline>
       </div>
   <div style="width: 100%;display: flex; justify-content: space-around;">
    <div class="btn-animate btn-animate__vibrate" @click="jump">
      返回 
</div>

    </div>
    </div>
  </template>
<script  setup>
import { MoreFilled } from '@element-plus/icons-vue'
import {getClockAPI} from '@/apis/getclockdata'
import { useRouter } from 'vue-router';
import {foodIdStore} from '@/store/foodId'
import moment from 'moment'
import {reactive,ref} from 'vue'
// const list=ref([]) 
const store=foodIdStore()
const router=useRouter()
console.log(store.uid);


const activities =reactive ([
  {
    activity: '',
    date: '',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
    color: '#027efb',
  },
 
  
])
const time=ref()
time.value=moment(activities.date).format('YYYY-MM-DD HH:mm:ss')
getClockAPI(store.uid).then((response)=>{
  Object.assign(activities,{...response.reverse().slice(0,7)})
console.log(activities);
// list.value=response
})
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
   