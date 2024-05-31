<template>
     <div>
        
       {{ List[store.id]?.type[foodId-1] }}
        </div>
</template>
<script setup>
import List from '@/resource';
import { foodIdStore } from '@/store/foodId';

const store = foodIdStore()
const {foodId}=store
console.log(List[store.id]?.type[foodId-1]);

</script>
<style lang="scss" scoped>
</style>