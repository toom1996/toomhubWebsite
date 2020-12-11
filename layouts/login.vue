<template>
    <Nuxt />
</template>
<script>
export default {
  mounted() {
    // socialvue.mainIndex()
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  data() {
    return {
    };
  },
  methods: {
    sidebarMini() {
      socialvue.triggerSet();
    },
  },
};
</script>