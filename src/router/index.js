import { createRouter,createWebHistory } from "vue-router";
import Login from '../components/Login/userLogin.vue'
import phoneLogin from '../components/Login/phoneLogin.vue'
import userEnroll from '../components/Login/userEnroll.vue'
import myIndex from '../components/part/myIndex.vue'
import nutritionClassroom from '../components/part/nutritionClassroom.vue'
import headIndex from "../components/part/headIndex.vue";
import CerealsProducts from "../components/part/Foodclassification/CerealsProducts.vue";
import nutritionClasscenter from '../components/part/nutritionClasscenter.vue'
import foodType from "@/components/part/Foodclassification/foodType.vue";
import foodBreakdown from "@/components/part/Foodclassification/foodBreakdown.vue";
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
            component:nutritionClassroom,
            children:[{
                path:'/navigation/nutritionClassroom/nutritionClasscenter',
                name:'nutritionClasscenter',
                component:nutritionClasscenter
            },
                {
                    path:'/navigation/nutritionClassroom/CerealsProducts',
                    name:'CerealsProducts',
                    component:CerealsProducts,
                    children:[{
                        path:'/navigation/nutritionClassroom/CerealsProducts/foodType',
                        name:'foodType',
                        component:foodType
                    },{
                        path:'/navigation/nutritionClassroom/CerealsProducts/foodBreakdown',
                        name:'foodBreakdown',
                        component:foodBreakdown
                    }]
            }]
        },]
    },
]
})
export default router