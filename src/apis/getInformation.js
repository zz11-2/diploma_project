import httpInstance from "@/utlis/http";
export function getInformationAPI(userId){
    return httpInstance({
        method: 'GET',
        url: `/api/users/${userId}`,
    
    })

}