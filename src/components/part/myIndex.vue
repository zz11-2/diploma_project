<template>
<div class="app">
    <div class="head">
            <img class="logo" src="../../imgs/logo.png" alt=""> 
            <ul class="ordinal">
                <li>营养课堂</li>
                <li>运动时刻</li>
                <li>好玩游戏</li>
                <li>我的</li>
            </ul>    
    </div>
    <div class="center"></div>
    <div class="Tail"></div>
</div>
</template>
<scriptd>
</scriptd>
<style lang="scss" scoped>
@media only screen and (max-width: 431px) {
  .logo {
    max-width: 130px;
    max-height: 56.5px;
    
  }
  .ordinal{
    max-width: 200px;
    margin-top: 10px;
    margin-right:-61px;
    font-size: 20px
  }
}
@media only screen and (max-width:376px) {
 
 .ordinal{
   max-width: 200px;
   margin-top: 6px;
   margin-right:-80px;
   font-size: 20px
 }
}
@media only screen and (min-width: 767px) and (max-width: 840px) {
  .ordinal {
    
    max-width: 330px;
    margin-top: 14px;
    margin-right: -30px;
    font-size: 20px
  }
}
  @media only screen and (min-width: 841px) and (max-width: 1025px) {
  .ordinal {

    max-width: 330px;
    margin-top: 8px;
    margin-right: 50px;
    font-size: 20px;
  }
}
@media only screen and (min-width: 1301px) {
    .ordinal {
        margin-top: 12px;
    font-size: 30px;
    
  }
  .ordinal>li{
        display: inline-block;
        padding: 20px;
        border-bottom: 5px solid white;
       
    }
    .ordinal>li:hover{
        border-color:#3D774F ;
    }
}

body{
    margin: 0px;
    padding: 0px;
}
.app{
    width: 100%;
    height: 100vh;
    background-color: black;
    margin: 0px;
}
.head{
    width: 100%;
    height: 15vh;
    background-color: white;
    position: relative;
    .logo{
        width: 30%;
        position: absolute;
        top:50%;
        left:20%;
        transform: translate(-50%, -50%)
    }
    .ordinal{
        width: 60vh;
        list-style: none;
        position: absolute;
        display: flex;
        justify-content: space-between;
        top:42%;
        right:-9%;
        transform: translate(-50%, -50%);
        
       
        
    }
   
    .ordinal>li:hover{
        color:#3D774F ;
       
        
    }
    
}
.box{
    width: 100%;
    height: 2000px;
    background-color: yellow;
}
</style>