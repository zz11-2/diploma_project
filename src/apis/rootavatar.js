import httpInstance from "@/utlis/http";
export function rootAvatarAPI(userId){
    return httpInstance({
        method: 'GET',
        url: `/api/root/${userId}/avatar`
    })

}