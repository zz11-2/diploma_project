import httpInstance from "@/utlis/http";
export function loginAPI(phone, password) {
    return httpInstance({
        method: 'GET',
        url: '/api/login',
        data: {
            account: phone,
            password: password
        }
    })
    .then(() => {
        alert('登录成功')
        // console.log('User registered successfully.');
        window.location.href="http://localhost:8080/index"
    })
    .catch((error) => {
        console.error(error);
        if (error.response && error.response.data.error) {
            // 服务器返回错误消息
            alert('登录失败，原因：' + error.response.data.error);
        } else {
            alert('登录失败');
        }
    });
}