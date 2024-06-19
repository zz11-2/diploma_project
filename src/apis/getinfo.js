import httpInstance from "@/utlis/http";
 export function getinfoAPI (info){
    return httpInstance({
        url:`/api/pay/${info}`,
        method:'GET'
    })
 }