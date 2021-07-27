<template>
  <div class="wrap">
    <div class="slot-place">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
};
</script>

<style scoped lang="scss">
.wrap {
  background: var(--black);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slot-place {
  width: 30%;
  height: 80vh;
  background: var(--card-bg);
  border-radius: 3%;
}
</style>
