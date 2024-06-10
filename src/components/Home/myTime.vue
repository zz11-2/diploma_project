<template>
    <div id="time-display">
      <p>{{ currentTime }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  export default {
    setup() {
      const currentTime = ref(getCurrentTime());
  
      function getCurrentTime() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
      }
      
      let timer = null;
  
      onMounted(() => {
        timer = setInterval(() => {
          currentTime.value = getCurrentTime();
        }, 1000);
      });
  
      onBeforeUnmount(() => {
        if (timer) {
          clearInterval(timer);
        }
      });
  
      return { currentTime };
    }
  }
  </script>
  
  <style scoped>
  #time-display {
  
    background-size: cover;
    text-align: center;
    color: black;
    font-size: 36px;
    height: 100px;
    line-height: 100px;
    margin: 0;
  }
  </style>