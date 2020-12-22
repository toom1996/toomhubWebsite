import { post, get } from '~/plugins/axios';

//发布主题
export function publishPost(data) { return post('/api/v1/post/publish-post', data); }