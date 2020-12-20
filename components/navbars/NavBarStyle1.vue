<template>
  <!-- TOP Nav Bar -->
  <div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-between">
      <a class="p-2 text-muted" href="#">首页</a>
      <!-- <a class="p-2 text-muted" href="#">U.S.</a>
      <a class="p-2 text-muted" href="#">Technology</a>
      <a class="p-2 text-muted" href="#">Design</a>
      <a class="p-2 text-muted" href="#">Culture</a>
      <a class="p-2 text-muted" href="#">Business</a>
      <a class="p-2 text-muted" href="#">Politics</a>
      <a class="p-2 text-muted" href="#">Opinion</a>
      <a class="p-2 text-muted" href="#">Science</a>
      <a class="p-2 text-muted" href="#">Health</a>
      <a class="p-2 text-muted" href="#">Style</a>
      <a class="p-2 text-muted" href="#">Travel</a> -->
    </nav>
  </div>
  <!-- TOP Nav Bar END -->
</template>
<script>
import SideBarItems from "~/fack_api/json/SideBar";
import { mapGetters } from "vuex";
import Lottie from "~/components/lottie/Lottie";
export default {
  name: "NavBarStyle1",
  props: {
    homeURL: { type: Object, default: () => ({ name: "layout1.dashboard" }) },
    title: { type: String, default: "Dashboard" },
    logo: { type: String, default: require("~/assets/images/logo.png") },
    horizontal: { type: Boolean, default: false },
    items: { type: Array },
  },
  mounted() {
    document.addEventListener("click", this.closeSearch, true);
  },
  components: {
    Lottie,
  },
  computed: {
    ...mapGetters({
      bookmark: "Setting/bookmarkState",
    }),
  },
  data() {
    return {
      sidebar: SideBarItems,
      globalSearch: "",
      showSearch: false,
      showMenu: false,
      userFriendRequest: [
        {
          img: require("~/assets/images/user/05.jpg"),
          name: "Jaques Amole",
          friend: "40  friends",
        },
        {
          img: require("~/assets/images/user/06.jpg"),
          name: "Lucy Tania",
          friend: "12  friends",
        },
        {
          img: require("~/assets/images/user/07.jpg"),
          name: "Val Adictorian",
          friend: "0  friends",
        },
        {
          img: require("~/assets/images/user/08.jpg"),
          name: "Manny Petty",
          friend: "3  friends",
        },
      ],
    };
  },
  methods: {
    miniSidebar() {
      this.$emit("toggle");
    },
    openSearch() {
      this.showSearch = true;
      this.showMenu = "iq-show";
      this.globalSearch = "";
    },
    closeSearch(event) {
      let classList = event.target.classList;
      if (!classList.contains("searchbox") && !classList.contains("search-input")) {
        this.removeClass();
      }
    },
    removeClass() {
      this.showSearch = false;
      this.showMenu = "";
      this.globalSearch = "";
    },
  },
};
</script>
