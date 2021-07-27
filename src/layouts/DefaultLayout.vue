<template>
  <div>
      <div class="sidebar">
      </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style scoped>
.sidebar  {
  width: 100%;
  height: 5vh;
  background: red;
}
</style>
