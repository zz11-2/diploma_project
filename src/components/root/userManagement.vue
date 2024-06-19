<template>
    <div class="center" >
     
        <table class="tab">
            <thead>
               <tr>
                <th>I D</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>操作</th>
               </tr> 
            </thead>
            <tbody>
                <tr  v-for="item in data" :key="item.uid">
                    <td>{{ item.uid }}</td>
                    <td>{{ item.uname }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.gender }}</td>
                    <td @click="change(item.uid)">删除</td>
                </tr>
            </tbody>
        </table>
    
    </div>
  </template>
  <script setup>
  import {getuserAPI} from '@/apis/getuser'
  import {ref,onMounted} from 'vue'
 import {deleteAPI} from '@/apis/delete'
  let data=ref()
  

 onMounted(()=>{
    getuserAPI().then((response)=>{
       
  data.value=response
 
console.log(response);
})
 })
const change= (id)=>{
deleteAPI(id).then(()=>{
  console.log('删除成功');
  window.location.reload()
})
}
  </script>
  <style lang="scss" scoped>
  .center{
    width: 1139px;
    height: 760px;
    background-color: hsla(0, 0%, 0%, 0.8);
    position: absolute;
    left:261px;
    top: 81px;
  }
  .tab{
    position: absolute;
    width: 800px;
    text-align: center;
    color: #36cfc9;
    top: 115px;
    left: 156px;
    border-top:1px solid white ;
    thead{
        font-size: 18px;
        font-weight: bold;
        border-bottom:1px solid white ;
    }
  }
  
  </style>