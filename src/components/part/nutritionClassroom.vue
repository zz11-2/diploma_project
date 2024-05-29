<template>
<div class="app">
    <h3>食物成分表</h3>
    <input type="text" placeholder="输入食物名称,营养一键查询">
<img class="img" src="../../assets/imgs/bj.jpg" alt="">
</div>

</template>
<script setup>
import Algae from '@/food/algae';
const algae=Algae
console.log(algae);
</script>
<style lang="scss" scoped>
body{
    margin: 0px;
    padding: 0px;
}
.app{
 width: 100%;
 height: 2000px;
 background-color: yellow;   
}
.img{
    height:66vh;
    width:100%;
}

</style>