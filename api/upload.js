import { post, get } from '~/plugins/axios';

//获取七牛云上传accessToken
export function getQiniuAccessToken(data) { return get('/api/v1/upload/get-qiniu-access-token', data); }