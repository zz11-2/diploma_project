import httpInstance from "@/utlis/http";
export function getfoodAPI(){
    return httpInstance({
        method:'GET',
        url:'/food',
        

    })
}   