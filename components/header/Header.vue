<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">ZAWAZAWA</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-show="identity.zToken != null">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-img
                v-bind:src="'http://himg.bdimg.com/sys/portrait/item/2332313032333135303639378a08.jpg'"
                rounded="circle"
                alt="Circle image"
                style="height:20px"
              ></b-img>
              <em>{{ identity.nickname }}</em>
            </template>
            <b-dropdown-item>个人中心</b-dropdown-item>
            <b-dropdown-item @click="logout">退出登陆</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-nav v-show="identity.zToken == null">
            <Nuxt-link
              to="/register"
              class="btn btn-sm btn-outline-secondary"
              href="#"
              >注册</Nuxt-link
            ><Nuxt-link
              to="/login"
              class="btn btn-sm btn-outline-secondary"
              href="#"
              >登陆</Nuxt-link
            >
          </b-navbar-nav>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import { getIdentity, routerRefresh, userInfoClear } from "~/utils/common.js";
export default {
  mounted() {
    console.log(this.$store.state);
    // $nuxt.setLayout('layout_name')
  },
  data() {
    return {
      identity: {
        zToken: this.$store.state.zToken,
        nickname: this.$store.state.nickname,
        avatar: this.$store.state.avatar,
      },
    };
  },
  methods: {
    //退出登录并刷新页面
    logout() {
      userInfoClear();
      routerRefresh();
    },
  },
  // layout: 'test'
};
</script>
