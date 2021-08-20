<template>
  <div class="def-layout__wrap">
      <Sidebar />
    <div class="def-layout__header-wrap">
      <Header />
      <div class="def-layout__slot-wrap">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from '@/components/sidebar/Sidebar.vue';
import Header from '@/components/header/Header.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Sidebar,
    Header,
  },
};
</script>

<style lang="scss" scoped>
.def-layout {
  &__wrap {
    width: 100%;
    height: 100vh;
    display: flex;
  }
  &__header-wrap {
    width: 100%;
    height: 100vh;
    background: red;
  }
  &__slot-wrap {
    width: 100%;
    height: 93.1vh;
    background: black;
  }
}
</style>
