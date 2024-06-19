import  httpInstance from '@/utlis/http'
 export function getpayInformationAPI(userId){
    return httpInstance({
        url:`/api/pay/${userId}`,
        method :'GET',
    })
 }