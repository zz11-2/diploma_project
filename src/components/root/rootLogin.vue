<template>
    <div class="app">
      <div class="login">
        <h3>管理员登录</h3>
        <form class="form" >
          <br />
          <label class="text" for="" >账&nbsp;号:</label>
          <input class="ipt" type="text" v-model="phone" />
  
          <br />
          <label class="text" for="" >密&nbsp;码:</label>
          <input class="ipt" type="password" v-model="password" />
  
          <br>
          <input class="submit" type="button" @click="change" value="登录" />
         
        </form>
        
  
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';

  import { loginAPI } from '@/apis/rootlogin';
  import {foodIdStore} from '@/store/foodId'

  const store=foodIdStore()
  const phone=ref('')
  const password=ref('')
  // const uStore=userStore()
  //设置图片显示 暗 亮

  
  
   //表单验证
   const change = ()=>{
      const pl=/^1[3-9]\d{9}$/;
      const pv=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{8,12}$/;
      if(pl.test(phone.value) && pv.test(password.value)){
          loginAPI(phone.value, password.value)
        .then(response=>{
          if(response.status){
   
           
          store.setuid(response.uid)
        
           window.location.href="http://localhost:8080/rootIndex"
          }else{
            alert(response.message)
          }
          
        })
  
      } else {
          alert('账号密码输入不正确');
      }
  }
  </script>
  <style lang="scss" scoped>
  .app {
    width: 100%;
    height: 100vh;
    /* 设置高度为视口的全高*/
   background-color: black;
  }
  
  h3 {
    margin-left: 30px
  }
  
  .login {
    width: 350px;
    height: 300px;
    background-color: white;
    position: absolute;
    left: 50%;
    /* 设置盒子在页面水平居中 */
    top: 50%;
    /* 设置盒子在页面垂直居中 */
    transform: translate(-50%, -50%);
    /* 使用 transform 属性进行位置微调 */
    padding: 20px;
    /* 添加内部填充使内容不紧贴边框 */
    border-radius: 20px;
  
    .ipt {
      width: 65%;
      height: 19px;
      border: 1px solid #B3B7C0;
      border-radius: 3px;
      margin-top: 14px;
    }
  
    .submit {
      width: 65%;
      /* 设置提交按钮宽度全满 */
      height: 25px;
      margin-top: 20px;
      margin-left: 13%;
      /* 添加上边距使按钮离其他内容有一定距离 */
      background-color: #0960BD;
      border-radius: 5px;
      border: 0px;
      color: white;
      text-align: center;
  
    }
  
    .submit:hover {
      opacity: 0.8;
    }
  }
  
  .form {
    width: 300px;
    margin-top: 24px;
    margin-left: 13%;
  
    .text {
      font-size: 14px;
    }
  
    .btn-box {
      width: 95%;
  
      margin-top: 20px;
      display: flex; //设置弹性盒模型
      justify-content: space-between; //设置
  
    }
  }
  
  .other {
    margin-left: 20px;
    margin-top: 10px;
    display: flex;
  
    justify-content: space-evenly;
  
    .block {
      width: 25%;
      border-top: 1px solid #B3B7C0;
      //设置span为行内块样式
      display: inline-block;
      margin-top: 17px;
  
    }
  
    p {
      color: #B3B7C0;
      font-size: 10px;
    }
  
  }
  
  .inco {
    margin-left: 40px;
    width: 80%;
    display: flex;
    justify-content: space-around;
  
    .wx {
      width: 20px;
      height: 20px;
  
    }
  }
  
  .btn {
    width: 30%;
    height: 20px;
    border: 0.5px solid #B3B7C0;
    background-color: white;
    color: #B3B7C0;
    font-size: 10px;
    border-radius: 5px;
  }
  
  //鼠标经过
  .btn:hover {
    border-color: #0960BD;
    color: #0960BD;
  }
  </style>