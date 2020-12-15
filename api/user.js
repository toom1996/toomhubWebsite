import { post } from '~/plugins/axios';

//用户注册
export function registerUser(data) { return post('/api/v1/user/register', data); }