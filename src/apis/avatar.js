import httpInstance from "@/utlis/http";
export function avatarAPI(userId,avatar){
    return httpInstance({
        method: 'POST',
        url: `/api/users/${userId}/avatar`,
        data: avatar ,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    }