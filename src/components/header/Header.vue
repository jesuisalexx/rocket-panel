<template>
  <div class="header__wrap">
    <Icon @click="toggleSidebar" class="header__menu-btn" icon="Menu" />
    <div class="header__menu-wrap">
      <Icon class="header__search-icon" icon="search" />
      <Icon class="header__bell-icon" icon="Bell" />
      <div class="header__menu-stripe"></div>
      <div class="header__user-wrap">
        <Icon class="header__avatar-icon" icon="avatar" />
        <div class="header__menu-text">ArtTemplate</div>
        <Icon class="header__arrow-icon" icon="Arrow-Down" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/icon/Icon.vue';

export default {
  name: 'Header.vue',
  components: {
    Icon,
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__wrap {
    width: 96%;
    padding: 0 2%;
    height: 6.75vh;
    background: var(--black);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__menu-btn {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  &__menu-wrap {
    width: 278px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  &__menu-stripe {
    width: 1px;
    height: 31px;
    background: var(--border);
    margin-right: 24px;
  }
  &__search-icon {
    width: 16px;
    height: 16px;
    margin-right: 25px;
    cursor: pointer;
  }
  &__bell-icon {
    width: 16px;
    height: 18px;
    margin-right: 23px;
    cursor: pointer;
  }
  &__menu-text {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: var(--heading);
  }
  &__avatar-icon {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
  &__arrow-icon {
    width: 16px;
    height: 16px;
    margin-left: 6px;
  }
  &__user-wrap {
    width: 170px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
