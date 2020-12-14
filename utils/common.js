//返回上一页
export function routerBack(context) {
    context.$router.go(-1);
}

//跳转到首页
export function routerToIndex(context) {
    context.$router.push("/")
}