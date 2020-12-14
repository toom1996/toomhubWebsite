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
      <div class="col-4 d-flex justify-content-end align-items-center">
        <Nuxt-link to="/register" class="btn btn-sm btn-outline-secondary mr-2" href="#"
          >注册</Nuxt-link
        >
        <Nuxt-link to="/login" class="btn btn-sm btn-outline-secondary" href="#"
          >登陆</Nuxt-link
        >
      </div>
    </div>
  </header>
</template>
<script>
export default {
  mounted() {
    // $nuxt.setLayout('layout_name')
  },
  // layout: 'test'
};
</script>
