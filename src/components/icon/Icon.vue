<template>
  <div
    :class="[
      $style.icon,
      spin && $style.spin
    ]"
    @click="onClick"
  >
    <svg :class="$style.source">
      <use :xlink:href="customIcon || `#icon-${icon}`" />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  props: {
    icon: String,
    customIcon: String,
    spin: Boolean,
  },
  emits: ['click'],
  setup(props, { emit }) {
    const onClick = () => {
      emit('click');
    };

    return {
      onClick,
    };
  },
});
</script>

<style lang="scss" module>
@import "./icon";
</style>
