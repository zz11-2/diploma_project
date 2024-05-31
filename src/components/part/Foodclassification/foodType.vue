<template>
    <div>
        <ul>
            <li v-for="(item,index) in List[id]" :key="index"></li>
        </ul>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import List from '@/resource';
 const router= useRoute()
const params = router.params
const { id } = params
</script>
<style lang="scss" scoped>

</style>