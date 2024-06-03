<template>
    <div>
        <div>
            <p>锻炼宝典</p>
            <hr>
            <ul>
                <li v-for="item in Muscles" :key="item.id">
                <!-- {{console.log(item[id])        }} -->
                <!-- <ul>
                    <li v-for="(items,index) in item.classify" :key="index"></li>
                </ul> -->
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import Muscles from '@/resource/motion/muscles';
import { foodIdStore } from '@/store/foodId';
import {ref} from 'vue'
const {id}=foodIdStore()
const ids=ref(id)
console.log(ids.value);
</script>
<stype lang="scss" scoped>

</stype>

