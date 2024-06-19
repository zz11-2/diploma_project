import httpInstance from "@/utlis/http";
export function setfoodAPI(data){
    return httpInstance({
        method:'POST',
        url:'/api/food',
        data:data

    })
}