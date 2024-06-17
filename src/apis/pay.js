    import  httpInstance from '@/utlis/http'
    export function payAPI(orderId){
        return httpInstance({
            method:'POST',
            headers:{
                'content-type':'application/x-www-form-urlencoded'
            },
            url:'/api/payment',
            data:{
                orderId:orderId
            }
        })
    }

    