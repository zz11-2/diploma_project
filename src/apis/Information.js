import httpInstance from "@/utlis/http";
export function InformationAPI(userId,data){
    return httpInstance({
        method: 'POST',
        url: `/api/users/${userId}`,
        data:data
    })

}