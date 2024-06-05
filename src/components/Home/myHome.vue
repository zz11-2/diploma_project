<template>
  <div>
 
    <img class="background" src="../../assets/imgs/bj_user.jpeg" alt="">
    <div class="column">

      <div class="Translation"></div>
      <div class="column_box">
        <h1 class="name">admin</h1>
        <hr class="line">
        <p class="p">欢迎来到我的主页欢迎来到我的主页欢迎来到我的主页</p>
        <p class="personality">欢迎来到我的主页</p>
      </div>
    </div>
    <div>
      <img class="vip" src="../../assets/imgs/vip (1).png" alt="">
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
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.column {
  width: 400px;
  height: 400px;
  position: relative;
  top: -600px;
  left: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
background-color: black;
align-items: center;

  .name{
    color:white;
  }
  .Translation {
    width: 100px;
    height: 100px;
    // background-color: #f4f4f6;
    border-radius: 50%;
    box-shadow: 0px -2px 15px 1px #A0CFFF;
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

.vip {
  width: 25px;
  height: 25px;
}

.background {
  width:1400px;
  position: relative;
}

</style>