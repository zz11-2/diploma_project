import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login/userLogin.vue";
import phoneLogin from "../components/Login/phoneLogin.vue";
import userEnroll from "../components/Login/userEnroll.vue";
import myIndex from "../components/part/myIndex.vue";
import nutritionClassroom from "../components/part/nutritionClassroom.vue";
import headIndex from "../components/part/headIndex.vue";
import CerealsProducts from "../components/part/Foodclassification/CerealsProducts.vue";
import nutritionClasscenter from "../components/part/nutritionClasscenter.vue";
import foodType from "@/components/part/Foodclassification/foodType.vue";
import foodBreakdown from "@/components/part/Foodclassification/foodBreakdown.vue";
import foodSearch from "@/components/part/Foodclassification/foodSearch.vue";
import searchBreakdown from "@/components/part/Foodclassification/searchBreakdown.vue";
import motionIndex from "@/components/motion/motionIndex";
import InformationColumn from "@/components/motion/InformationColumn";
import gameIndex from "@/components/Game/gameIndex"
import myHome from '@/components/Home/myHome'
import userInformation from '@/components/Home/userInformation'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/phone",
      name: "phoneLogin",
      component: phoneLogin,
    },
    {
      path: "/enroll",
      name: "Enroll",
      component: userEnroll,
    },
    {
      path: "/navigation",
      name: "headIndex",
      component: headIndex,
      children: [
        {
          path: "/navigation/index",
          name: "myIndex",
          component: myIndex,
        },
        //运动时刻路由
        {
          path: "/navigation/motionIndex/InformationColumn",
          name:'motionIndex',
          component:motionIndex,
          children:[{
            path:"/navigation/motionIndex/InformationColumn",
            name:'InformationColumn',
            component:InformationColumn
          }]
        },
        //游戏页面
        {
          path:"/navigation/motionIndex/gameIndex",
          name:'gameIndex',
          component:gameIndex
        },
        //我的
        {
          path:'/navigation/motionIndex/myHome',
          name:'myHome',
          component:myHome,
          // children:[]
        },
      
        {
          path: "/navigation/nutritionClassroom",
          name: "nutritionClassroom",
          component: nutritionClassroom,
          children: [
            {
              path: "/navigation/nutritionClassroom/nutritionClasscenter",
              name: "nutritionClasscenter",
              component: nutritionClasscenter,
            },
            {
              path: "/navigation/nutritionClassroom/foodSearch",
              name: "foodSearch",
              component: foodSearch,
            },

            {
              path: "/navigation/nutritionClassroom/CerealsProducts",
              name: "CerealsProducts",
              component: CerealsProducts,
              children: [
                {
                  path: "/navigation/nutritionClassroom/CerealsProducts/foodType",
                  name: "foodType",
                  component: foodType,
                },
                {
                  path: "/navigation/nutritionClassroom/CerealsProducts/foodBreakdown",
                  name: "foodBreakdown",
                  component: foodBreakdown,
                },
                {
                  path: "/navigation/nutritionClassroom/foodSearch/searchBreakdown",
                  name: "searchBreakdown",
                  component: searchBreakdown,
                },
              ],
            },
          ],
        },
      ],
    },
      //个人信息页
      {
        path:'/navigation/motionIndex/myHome/userInformation',
        name:'userInformation',
        component:userInformation
      },
  ],
});
export default router;
