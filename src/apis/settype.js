import httpInstance from "@/utlis/http";
export function settypeAPI(data){
    return httpInstance({
        method:'POST',
        url:'root/type/name',
        data:{data}
    })
}