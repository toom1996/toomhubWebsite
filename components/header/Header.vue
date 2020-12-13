<template>
  <!-- Just an image -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="https://getbootstrap.net/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
  </a>
</nav>
</template>
<script>
export default {
  mounted () {
    $nuxt.setLayout('layout_name')
  },
  layout: 'test'
}
</script>
