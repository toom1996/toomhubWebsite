export const state = () => ({
    zToken: "",
    refreshToken: "",
    id: "",
    avatar: "",
    isLogin: false,
})

export const mutations = {
    increment(state) {
        state.counter++
    }
}