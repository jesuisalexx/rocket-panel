<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import DefaultLayout from '../../layouts/DefaultLayout.vue';
import AuthLayout from '../../layouts/AuthLayout.vue';

export default {
  name: 'LayoutProvide.vue',
  components: {
    DefaultLayout,
    AuthLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'DefaultLayout';
    },
  },
};
</script>

<style scoped>

</style>
