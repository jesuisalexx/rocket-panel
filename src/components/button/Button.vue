<template>
  <div :class="[
  'button' ,
    ...(Array.isArray(state)
      ? state.map((currState) => `button--${currState}`)
      : [`button--${state}`]),
  ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    state: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="scss">
.button--primary {
  width: 100%;
  height: 40px;
  font-weight: 500;
  font-size: 15px;
  border-radius: 12px;
  background: var(--accent);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--heading);
  cursor: pointer;
}
.button--link-primary  {
  font-size: 14px;
  font-weight: 400;
  color: var(--accent);
  background: none;
  cursor: pointer;
}
.button--icon-secondary {
  width: 100%;
  height: 40px;
  font-weight: 500;
  font-size: 15px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--body-light);
  cursor: pointer;
  position: relative;
}
.button--sidebar-primary {
  width: 90%;
  height: 56px;
  padding-left: 10%;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
