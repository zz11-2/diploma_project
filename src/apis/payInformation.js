import  httpInstance from '@/utlis/http'
 export function payInformationAPI(userId,data){
    return httpInstance({
        url:`/api/pay/${userId}`,
        method :'POST',
        data:{data},

    })
 }