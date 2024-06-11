<template>


<router-view></router-view>

 
</template>

<script setup>



</script>

<style lang="scss" >
body{
    margin: 0px;
}
/* 允许滚动但隐藏滚动条 */
html {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
html::-webkit-scrollbar { /* Chrome, Safari, Edge */
    display: none;
}
.Information .el-form-item__label {
  color: white;
}
</style>
