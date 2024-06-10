import httpInstance from "@/utlis/http";


export function loginAPI(phone, password) {
    return httpInstance({
        method: 'POST',
        url: '/api/login',
        data: {
            account: phone,
            password: password
        }
    })
  
}