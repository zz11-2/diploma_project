import httpInstance from "@/utlis/http";
export function getpayAPI(){
    return httpInstance({
        url:'/navigation/motionIndex/myHome/userColumn',
        method:'GET'
    })

}