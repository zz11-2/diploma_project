import Algae from "./food/algae";
import Cereal from "./food/cereal";
import Eggs from "./food/eggs";
import Fruit from "./food/fruit";
import Legume from "./food/legume";
import Meat from "./food/meat";
import Milk from "./food/milk";
import Nut from "./food/nut";
import Potato from "./food/potato";
import Poultry from "./food/poultry";
import Shrimp from "./food/shrimp";
import Vegetable from "./food/vegetable";
import { getfoodAPI } from "@/apis/getfood";  

let List=[{name:'菌藻类',type:Algae,url:require('../assets/imgs/jl.jpg')},{name:'谷类及制品',type:Cereal,url:require('../assets/imgs/gl.jpg')},{name:'蛋类及制品',type:Eggs,url:require('../assets/imgs/dl11.jpg')},{name:'水果类及制品',type:Fruit,url:require('../assets/imgs/sg.jpg')},{name:'干豆类及制品',type:Legume,url:require('../assets/imgs/gd.jpg')},{name:'畜肉类及制品',type:Meat,url:require('../assets/imgs/cr.jpg')},{name:'乳类及制品',type:Milk,url:require('../assets/imgs/rl10.jpg')},{name:'坚果种子类',type:Nut,url:require('../assets/imgs/jg7.jpg')},{name:'薯类、淀粉及制品',type:Potato,url:require('../assets/imgs/td.jpg')},{name:'禽肉类及制品',type:Poultry,url:require('../assets/imgs/qr.jpg')},{name:'鱼虾蟹贝类',type:Shrimp,url:require('../assets/imgs/yl.jpg')},{name:'蔬菜类及制品',type:Vegetable,url:require('../assets/imgs/sc.jpg')}]
getfoodAPI().then((res)=>{
    List = List.map(listItem => {
        res.forEach(resItem => {
            if (resItem.classify === listItem.name) {
                if (Array.isArray(listItem.type)) {
                    listItem.type.push(resItem);
     
                } else {
                    listItem.type = [resItem];
                    console.log(Array.isArray(listItem.type));
                }
            }
        });
        return listItem;
    });
    console.log(List);
});
export default List