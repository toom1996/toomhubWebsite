//返回上一页
export function routerBack(context) {
    context.$router.go(-1);
}

//跳转到首页
export function routerToIndex(context) {
    context.$router.push("/")
}

//将用户信息存入localStroge
export function userInfoSave (data) {
    for(let key in data){
        localStorage.setItem(key,data[key])
  }
}
