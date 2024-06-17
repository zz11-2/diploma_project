import httpInstance from "@/utlis/http";
export  function  deleteAPI(userId) {
     return httpInstance({
        method:'DELETE',
        url:`/api/users/${userId}`
     })
}