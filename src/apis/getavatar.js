import httpInstance from "@/utlis/http";
export function getavatarAPI(userId){
    return httpInstance({
        method: 'GET',
        url: `/api/users/${userId}/avatar`
    })

}