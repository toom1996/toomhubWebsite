<template>
  <div>
    <Nuxt />
    <Loader />
    <div class="wrapper">
      <!-- Sidebar  -->
      <SideBarStyle1 :items="verticalMenu" :logo="logo" @toggle="sidebarMini" />
    </div>
  </div>
</template>

<script>
import Loader from '~/components/loader/Loader'
import SideBarStyle1 from '~/components/sidebars/SideBarStyle1'
import loader from '~/assets/images/logo.png'
import SideBarItems from '~/fack_api/json/SideBar'
import { socialvue } from '~/config/pluginInit'
export default {
  components:{
    Loader,
    SideBarStyle1
  },
  mounted () {
    this.logo = loader
  },
  data () {
    return {
      verticalMenu: SideBarItems,
      logo: loader
    }
  },
  methods: {
    sidebarMini () {
      socialvue.triggerSet()
    }
  }
}
</script>
<style>
@import url("~/assets/css/custom.css");
@import url("~/assets/css/PriceSlider.css");
</style>
