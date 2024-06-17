<template>
 <div id="main">
      <div id="stage">
          <div id="snake">
              <div></div>
          </div>
          <div id="food">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
      <div id="score-panel">
          <div>SCORE:<span id="score">0</span></div>
          <div>LEVEL:<span id="level">1</span></div>
      </div>
      <div>
        <a @click="change">购买</a>
      </div>
  </div>
</template>
<script setup >
import {payAPI} from '@/apis/pay'
const change=()=>{
    payAPI('57ww4456f116613hgf11e34').then(res=>{
    console.log(res);
    window.location.href = res.result;
    })
}
</script>
<style lang="scss" scoped>
</style>
 