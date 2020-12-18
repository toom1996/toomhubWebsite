<template>
  <!-- Just an image -->
  <header class="blog-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <a class="navbar-brand" href="#">
          <img
            src="https://getbootstrap.net/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            alt=""
          />
        </a>
      </div>
      <div class="col-4 text-center">
        <a class="blog-header-logo text-dark" href="#">Large</a>
      </div>
      <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <li class="nav-item dropdown">
          <a
            class="nav-item nav-link dropdown-toggle mr-md-2"
            href="#"
            id="bd-versions"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            v4.1
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="bd-versions">
            <a class="dropdown-item active" href="/">Latest (4.x)</a>
            <a class="dropdown-item" href="/v3">v3.3.7</a>
            <a class="dropdown-item" href="/v2">v2.3.2</a>
          </div>
        </li>
        <li class="nav-item" v-if="isLogin == false">
          <Nuxt-link to="/register" class="btn btn-sm btn-outline-secondary mr-2" href="#"
            >注册</Nuxt-link
          >
        </li>
        <li class="nav-item">
          <Nuxt-link to="/login" class="btn btn-sm btn-outline-secondary" href="#"
            >登陆</Nuxt-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
import { getIdentity } from "~/utils/common.js";
export default {
  mounted() {
    console.log(this.$store.state.isLogin)
    // $nuxt.setLayout('layout_name')
  },
  data() {
    return {
      isLogin: this.$store.state.isLogin,
    }
  },
  // layout: 'test'
};
</script>
