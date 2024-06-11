import httpInstance from "@/utlis/http";
export function ClockAPI (userId,activity){
    return httpInstance({
        method: 'POST',
        url: `/api/users/${userId}/userColumn`,
        data: {activity} ,
        
      });
    }