import httpInstance from "@/utlis/http";
 export function getuserAPI (){
    return httpInstance({
        url:'/api/users',
        method:'GET'
    })
 }