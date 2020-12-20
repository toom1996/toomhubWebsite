
export default function (ctx) {
    let zToken = localStorage.getItem("zToken")
    let nickname = localStorage.getItem("nickname")
    let avatar = localStorage.getItem("avatar")
    ctx.store.replaceState({
        zToken: zToken,
        nickname: nickname,
        avatar: avatar
    });
    //离开页面 刷新前 将store中的数据存到localStorage
    //   window.addEventListener('beforeunload', () => {
    //     delete ctx.store.state.i18n
    //     localStorage.setItem("storeCache", JSON.stringify(ctx.store.state))
    //   });
    //   // 获取localStorage中的store数据
    //   let storeCache = localStorage.getItem("storeCache")
    //   if (storeCache) {
    //     // 将localStorage中的store数据替换到store中
    //     ctx.store.replaceState(Object.assign({}, ctx.store.state,JSON.parse(sessionStorage.getItem("storeCache"))));
    //   }
}