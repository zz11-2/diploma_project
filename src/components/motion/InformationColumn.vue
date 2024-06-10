<template>
    <div class="tal">
        <p class="title_2">锻炼宝典</p>
        <hr />
        <ul>
            <li v-for="(item, index) in Muscles[store.id - 1]?.classify" :key="index">
                <div class="column">
                    <p v-if="item.type" class="name">{{ item.name }}训练</p>
                  <div class="column-head">
                    <!-- if判断没有数据该项不渲染 -->
                   <p v-if="item.type" class="type">训练动作"{{ item.type }}"</p>
                    
                  </div>
                    <div class="tal-box">
                        <img v-if="item.url" :src="item.url" alt="">
                        <div style=" width: 300px;height: 162px;margin: 40px;">
                            <p  class="Information" v-if="item.Information"><span style="font-weight: bold; margin-right: 5px;">动作要领:</span>{{ item.Information }}</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

    </div>


</template>
<script setup>
import Muscles from '@/resource/motion/muscles';
import { foodIdStore } from '@/store/foodId';

const store = foodIdStore()


</script>
<stype lang="scss" scoped>
.title_2{
    width: 120px;
    height: 30px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    background-color: #81ec81;
     /* 沿着X轴倾斜-10度 */
    transform: skew(-10deg);
    padding-top: 10px;
}
.tal {

    width: 800px;
    height: auto;
    position: absolute;
    top: 1075px;
    left: 48px;

    ul {
        list-style: none;

        li {
            width: 750px;
            height: auto;
            // background-color: #f0f2e9;
            border-bottom: 1px solid #f0f2e9;
        }
        }
        .column{
            .name{
                font-size: 20px;
                font-weight: bold;
                text-align: center;
                padding-top: 40px;
               
            }
            .column-head{
              .type{
                font-size: 18px;
                margin-left: 40px
              }
            }
        }
 .tal-box{
    display: flex;
    justify-content: space-around;
    img{
        width: 300px;
        height: 162px;
        margin: 40px;
    }
    .Information{
        font-size:10px;
       text-align: center;
       text-indent: 2em;
    }
 }
}
</stype>
