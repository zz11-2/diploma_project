import httpInstance from "@/utlis/http";

export function getaddAPI(phone, password) {
    return httpInstance({
        method: 'POST',
        url: '/api/users',
        data: {
            account: phone,
            password: password
        }
    })
    .then(() => {
       alert('注册成功')
       window.location.href='http://localhost:8080'
    })
    .catch((error) => {
        console.error(error);
        if (error.response && error.response.data.error) {
            // 服务器返回错误消息
            alert('注册失败，原因：' + error.response.data.error);
        } else {
            alert('注册失败');
        }
    });
}