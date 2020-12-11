<template>
  <header class="blog-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <a class="text-muted" href="#">Subscribe</a>
      </div>
      <div class="col-4 text-center">
        <a class="blog-header-logo text-dark" href="#">Large</a>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <nuxt-link to="login" class="btn btn-sm btn-outline-secondary m-1" href="#">登陆</nuxt-link>
        <a class="btn btn-sm btn-outline-secondary" href="#">注册</a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  mounted () {
    $nuxt.setLayout('layout_name')
  },
  layout: 'test'
}
</script>
