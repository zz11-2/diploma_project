import httpInstance from "@/utlis/http";
export function getClockAPI (userId){
    return httpInstance({
        method: 'GET',
        url: `/api/users/${userId}/punchcards`,
      
      });
    }