<template>
  <div>
    <div class="container">
      <Header />
      <NavBarStyle1
        title="Dashboard"
        :homeURL="{ name: 'dashboard1.home' }"
        @toggle="sidebarMini"
        :logo="logo"
      >
      </NavBarStyle1>
      <Banner />
      <News />
    </div>
    <!-- <Loader /> -->
    <div class="wrapper">
      <!-- Sidebar  -->
      <!-- <SideBarStyle1 :items="verticalMenu" :logo="logo" @toggle="sidebarMini" /> -->
      <!-- TOP Nav Bar -->
      <!-- <NavBarStyle1 title="Dashboard" :homeURL="{ name: 'dashboard1.home' }" @toggle="sidebarMini" :logo="logo">
      </NavBarStyle1> -->
      <!-- Page Content -->
      <div id="content-page" class="content-page">
        <div class="container">
          <div class="row">
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "~/components/loader/Loader";
import Header from "~/components/header/Header";
import Banner from "~/components/banner/Banner";
import News from "~/components/news/News";
import SideBarStyle1 from "~/components/sidebars/SideBarStyle1";
import NavBarStyle1 from "~/components/navbars/NavBarStyle1";
import loader from "~/assets/images/logo.png";
import SideBarItems from "~/fack_api/json/SideBar";
import { socialvue } from "~/config/pluginInit";
export default {
  components: {
    Loader,
    SideBarStyle1,
  },
  mounted() {
    // const ip = this.$axios.get('http://icanhazip.com')
    // this.$axios.$get("https://toomhub.23cm.cn/v1/mini/sq/index?page=1").then((res) => {
    //   console.log(res);
    // });
    console.log(11111111111);

    this.logo = loader;
    // socialvue.mainIndex()
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  data() {
    return {
      verticalMenu: SideBarItems,
      logo: loader,
    }
  },
  methods: {
    sidebarMini() {
      socialvue.triggerSet();
    }
  },
};
</script>
<style>
@import url("~/assets/css/custom.css");
@import url("~/assets/css/PriceSlider.css");
</style>
<style lang="scss">
@import "~/assets/scss/style.scss";
</style>
