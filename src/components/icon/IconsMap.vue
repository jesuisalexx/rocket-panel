<template>
  <span :style="{display: 'none'}">
    <component
      :is="icon[1]"
      v-for="icon in icons"
      :id="`icon-${icon[0]}`"
      :key="icon[0]"
      :style="{height: '48px', width: '48px'}"
    />
  </span>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconsMap',
  setup() {
    const icons = [];

    ((r) => {
      r.keys().forEach((key) => {
        const name = key.replace(/\.\/(.*)\.inline\.svg/, '$1');
        icons.push([name, r(key).default]);
      });
    })(
      require.context('./assets'),
    );

    return {
      icons,
    };
  },
});
</script>
