<template>
    <div class="app">
        <div class="login">
            <h3>注册</h3>
            <form class="form"  >
                
                <br />
                
                <input class="ipt" type="text" placeholder="手机号码"  v-model="phone"/>
                <br />
               
                <input class="ipt" style="width:42%;"  placeholder="短信验证码" type="password" />
                <input class="btn" @click="countdowns()" type="button" :value="vl" :disabled="isdisabled">
                <br>
                <input class="ipt" type="password" placeholder="密码" v-model="password" />
                <input class="ipt" type="password" placeholder="确认密码" v-model="confirm" />
                <input class="submit"  @click="change" type="button" value="注册" />
                <RouterLink :to="{name:'Login'}"><input class="back" type="but ton" value="返回" /></RouterLink>
                
                
            </form>
        </div>
    </div>
</template>
<script setup>
import { getaddAPI } from '@/apis/add';
import { ref } from 'vue';
const phone=ref('')
const password=ref('')
const confirm=ref('')
//按钮可以点击
const isdisabled=ref(false)
//设置按钮文字
const vl=ref('获取验证码')
//获取验证码方法
const countdowns=()=>{
    const number=ref(60)
    //使用定时器
  const countdown= setInterval(() => {
        number.value--
        vl.value=`${number.value}后重新获取`
        console.log(number.value);
        //禁止按钮点击
        isdisabled.value=true
        if(number.value<=0){
        clearInterval(countdown)
        vl.value='获取验证码'
        isdisabled.value=false
    }
    }, 1000);
   
}
const change = ()=>{
    const pl=/^1[3-9]\d{9}$/;
    const pv=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{8,12}$/;
    if(pl.test(phone.value) && pv.test(password.value) && password.value===confirm.value) {
        getaddAPI(phone.value, password.value)
        // .then(() => {
        //     alert('注册成功');
        // })
        // .catch((error) => {
        //     console.error(error);
        //    return Promise.reject();
        // });
    } else {
        alert('注册失败');
    }
}
</script>
<style lang="scss" space="">
.app {
    width: 100%;
    height: 100vh;
    /* 设置高度为视口的全高*/
    background-color: black;
}

h3 {
    margin-top:5px;
   margin-left: 45%;
}

.login {
    width: 350px;
    height: 300px;
    background-color: white;
    position: absolute;
    left: 50%;
    /* 设置盒子在页面水平居中 */
    top: 50%;
    /* 设置盒子在页面垂直居中 */
    transform: translate(-50%, -50%);
    /* 使用 transform 属性进行位置微调 */
    padding: 20px;
    /* 添加内部填充使内容不紧贴边框 */
    border-radius: 20px;

    .ipt {
        width: 70%;
        height: 19px;
        border: 1px solid #B3B7C0;
        border-radius: 3px;
        margin-top: 13px;
        font-size: 10px;
        color:#B3B7C0 ;
    }

    .submit {
        width: 65%;
        /* 设置提交按钮宽度全满 */
        height: 25px;
        margin-top: 20px;
        margin-left: 4%;
        /* 添加上边距使按钮离其他内容有一定距离 */
        background-color: #0960BD;
        border-radius: 5px;
        border: 0px;
        color: white;
        text-align: center;

    }

    .submit:hover {
        opacity: 0.8;
    }
}

.form {
    width: 300px;
    margin-top: -39px;
    margin-left: 20%;

    .text {
        font-size: 14px;
    }

    .btn {
        width: 24%;
        height: 22px;
        font-size: 10px;
        color: #B3B7C0;
        border: 1px solid #B3B7C0;
        border-radius: 5px;
        margin-left: 3%;
        background-color: white;
    }

    .btn:hover {
        border-color: #0960BD;
        color: #0960BD;
    }

    .back {
        width: 65%;
        /* 设置提交按钮宽度全满 */
        height: 25px;
        margin-top: 20px;
        margin-left: 4%;
        /* 添加上边距使按钮离其他内容有一定距离 */

        border-radius: 5px;

        text-align: center;

        background-color: white;
        color: black;
        border: 1px solid #B3B7C0;

    }
    .back:hover{
        border-color: #0960BD;
        color: #0960BD;
    }
}
</style>