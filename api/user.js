import { post } from '~/plugins/axios';

//用户注册
export function registerUser(data) { return post('/api/v1/user/register', data); }

//发送用户注册短信验证码
export function smsSend(data) { return post('/api/v1/user/sms-send', data); }