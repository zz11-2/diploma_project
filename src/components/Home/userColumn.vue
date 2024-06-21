<template>
      <div class="column">
<div >

  <input style="position: absolute;width: 225px; height: 125px; opacity: 0;"  type="file" ref="fileUploader"  accept="image/*" />
  

  <img style="width: 45px;height: 45px;" src="../../assets/imgs/tx.png" alt="">
  修改头像
  <button   style="position: absolute; top: 110px; left: 180px;color: white;background-color: transparent; border: 0px; font-size: 10px; font-weight: bold;" @click="uploadAvatar">确认修改</button>
</div>
<div @click="change('personalInformation')">
  <img src="../../assets/imgs/jbxx.png" alt=""  style="width: 45px; height: 35px;">
  个人信息
</div>
<div @click="change('bodyMass')">
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
<div @click="change('dataDetection')">
  <img src="../../assets/imgs/sjjc.png" alt="">
  数据监测
</div>
<div @click="del">
  <img src="../../assets/imgs/zs.png" alt="">
  注销账号
</div>
<div @click="opened">
  <img src="../../assets/imgs/ktvip.png" alt="">
 VIP
 <el-popover
    placement="top-start"
    title="温馨提示"
    :width="20"
    trigger="hover"
    content="本站会员一次开通有效期30天"
  >
    <template  #reference>
      <img style="width: 10px;height: 10px;position: absolute;top:445px;left: 476px" src="../../assets/imgs/wh.png">
    </template>
  </el-popover>
</div>

<div @click="change('rootLogin')">
  <img src="../../assets/imgs/root.png" alt="">
  管理员
</div>
</div>
</template>
<script setup>
import{deleteAPI} from '@/apis/delete'
import { ElMessage, ElMessageBox } from 'element-plus'
import { avatarAPI } from '@/apis/avatar';
import { foodIdStore } from '@/store/foodId'
import { getavatarAPI } from '@/apis/getavatar';
import { ref,watchEffect, reactive, onMounted } from 'vue';
import {ClockAPI} from '@/apis/clock'
import { useRouter } from 'vue-router';
import { userStore } from '@/store/user'
// import {getpayAPI} from '@/apis/getpay'
import { useRoute } from 'vue-router';
import {payAPI} from '@/apis/pay'
import {payInformationAPI} from '@/apis/payInformation'

// import {getinfoAPI} from '@/apis/getinfo'
const route=useRoute()
const uStore = userStore()

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
//修改头像
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
    return ;
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
const del=()=>{
  
  ElMessageBox.confirm(
    '确认后注销账号?',
    '',
    {
      confirmButtonText: '确认注销',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '账号已注销',
      })
      deleteAPI(store.uid)
  router.push({name:'Login'})
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消成功',
      })
    })
}
//订单详细信息
const list=reactive({
     uid:store.uid,
     productInfo:'会员',
  //  charset :route.query.charset, //字符编码
     out_trade_no : route.query.out_trade_no, //对外交易单号
     method : route.query.method,//阿里支付的在线接口
     total_amount:route.query.total_amount,//交易金额
     startTime:route.query.timestamp,//时间戳
     trade_no:route.query.trade_no,//阿里支付生成的交易流水号
     productPrice:6,
     productCode:'FAST_INSTANT_TRADE_PAY',
     subject:'生活茶颜会员',
     body:'会员有效期30天'
}) 
let newDateString=''
if(list && list.startTime){
  const time = new Date((list.startTime).replace(/-/g, '/'));
time.setDate(time.getDate() + 30);
const newYMD = time.getFullYear() + '-' + (time.getMonth()+1).toString().padStart(2, '0') + '-' + time.getDate().toString().padStart(2, '0');
const newHMS = time.getHours().toString().padStart(2, '0') + ':' + time.getMinutes().toString().padStart(2, '0') + ':' + time.getSeconds().toString().padStart(2, '0');

 newDateString = newYMD + ' ' + newHMS;

}
// 会员结束时间

console.log(list.out_trade_no);
const data=reactive({
  productInfo:'会员',
  productPrice:6,
  startTime:list.startTime,
  endTime:newDateString,
  out_trade_no:list.out_trade_no,
  productCode:'FAST_INSTANT_TRADE_PAY',
     subject:'生活茶颜会员',
     body:'会员有效期30天'
  
})



const opened=()=>{
  const orderId= Math.floor(Math.random() * 90000000) + 10000000
  payAPI(orderId).then(res=>{
    console.log(res);
    window.location.href = res.result;
    })
  
}

onMounted(()=>{
  if(data.endTime){
    payInformationAPI(store.uid,data).then((response)=>{
    console.log(response);
    console.log(data);
   }).catch(()=>{
      console.log('订单已存在');
   })
 
  }
 
})
</script>
<style lang="scss" scoped>
.column {

width: 800px;
height: 330px;
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
    width: 40px;
    height: 40px;
    
  }
}
}

</style>