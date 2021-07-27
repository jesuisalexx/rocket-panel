<template>
  <div id="app">
    <LayoutProvide>
       <router-view/>
    </LayoutProvide>
  </div>
</template>

<script>
import LayoutProvide from './components/layoutProvide/LayoutProvide.vue';

export default {
  name: 'App',
  components: {
    LayoutProvide,
  },
};

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
@import "~@/assets/index.scss";
</style>
