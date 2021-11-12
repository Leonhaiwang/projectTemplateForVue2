import { get , post } from './http'
//默认请求头
const baseUrl = "www.baidu.com";

export const apiTest = p => post('api/v1/users/my_address', p);