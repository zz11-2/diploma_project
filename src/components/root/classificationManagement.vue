<template>
    <div class="center">
        <div class="box">
            <p class="talel">分类管理</p>
            <p>类名:</p> <input class="ipt" type="text" v-model="ipt.name">
            <el-upload class="upload-demo" drag :on-success='hand' action='http://localhost:3000/root/type' multiple
                style="width: 400px; position: absolute;top: 280px;left: 320px;">
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        jpg/png files with a size less than 500kb
                    </div>
                </template>
            </el-upload>
            <button @click="change">提交 </button>
        </div>
    </div>
</template>
<script setup>
import { settypeAPI } from '@/apis/settype'
import { UploadFilled } from '@element-plus/icons-vue'
import { reactive } from 'vue'
const ipt = reactive({
    url: '',
    name: ''
})
const change = () => {
    settypeAPI(ipt).then((response) => {
        console.log(ipt);
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
    window.location.reload()
}
const hand = (response) => {
   ipt.url=response
}
</script>
<style lang="scss" scoped>
.center {
    width: 1139px;
    height: 760px;
    background-color: hsla(0, 0%, 0%, 0.8);
    position: absolute;
    left: 261px;
    top: 81px;
}

.ipt {
    width: 300px;
    height: 30px;
    border-radius: 5px;
    position: absolute;
    top: 200px;
    left: 360px;
}

.talel {
    font-size: 20px;
    font-weight: bold;
    position: relative;
    color: white;
    top: 119px;
    left: 324px;
    display: inline-block;
}

p {
    position: absolute;
    top: 190px;
    left: 317px;
    color: white;
}

.box {
    position: relative;
    left: 40px;
}
</style>