//返回上一页
export function routerBack(context) {
    context.$router.go(-1);
}

//刷新页面
export function routerRefresh(){
    window.location.reload()
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

//清理所有localstroage信息
export function userInfoClear() {
    localStorage.clear()
}
