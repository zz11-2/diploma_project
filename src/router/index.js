import { createRouter,createWebHistory } from "vue-router";
import Login from '../components/Login/userLogin.vue'
import phoneLogin from '../components/Login/phoneLogin.vue'
import userEnroll from '../components/Login/userEnroll.vue'
const router=createRouter({  
    history:createWebHistory(),
    routes:[{
        path:'/',
        name:'Login',
        component:Login
    },{
        path:'/phone',
        name:'phoneLogin',
        component:phoneLogin
    },
    {
        path:'/enroll',
        name:'Enroll',
        component:userEnroll
    }
]
})
export default router