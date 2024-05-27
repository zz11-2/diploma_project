import { createRouter,createWebHistory } from "vue-router";
import Login from '../components/Login/userLogin.vue'
import phoneLogin from '../components/Login/phoneLogin.vue'
import userEnroll from '../components/Login/userEnroll.vue'
import myIndex from '../components/part/myIndex.vue'
import nutritionClassroom from '../components/part/nutritionClassroom.vue'
import headIndex from "@/components/part/headIndex.vue";
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
    },
    {
        path:'/navigation',
        name:'headIndex',
        component:headIndex,
        children:[{
            path:'/navigation/index',
            name:'myIndex',
            component:myIndex
        },
        {
            path:'/navigation/nutritionClassroom',
            name:'nutritionClassroom',
            component:nutritionClassroom
        }]
    },
]
})
export default router