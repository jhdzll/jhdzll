import request from "@/utils/request";
export function login(query:Object) {
    return request({
        url: 'login',
        method: 'post',
        data: query
    })
}