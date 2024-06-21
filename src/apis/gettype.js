import httpInstance from "@/utlis/http";
export function gettypeAPI(){
    return httpInstance({
        method:'GET',
        url:'/root/type/name'
    })
}