<template>
  <div :class="{ sidebar__hidden: isSidebarExpanded === false}" class="sidebar__wrap">
    <div class="sidebar__content">
      <div class="sidebar__logo-wrap">
        <Icon class="sidebar__logo" icon="Rocket" />
        <div v-show="isSidebarExpanded === true" class="sidebar__logo-text">Rocket</div>
      </div>
      <div class="sidebar__items-wrap">
        <Button :state="['sidebar-primary']">
          <div class="sidebar__icons-wrap">
            <Icon class="sidebar__grid-icon" icon="dashboardGrid"/>
          </div>
          <div v-show="isSidebarExpanded === true"  class="sidebar__item-text">Dashboard</div>
        </Button>
        <Button :state="['sidebar-primary']">
          <div class="sidebar__icons-wrap">
            <Icon class="sidebar__cart-icon" icon="Cart"/>
          </div>
          <div v-show="isSidebarExpanded === true" class="sidebar__item-text">E-Commerce</div>
        </Button>
        <Button :state="['sidebar-primary']">
          <div class="sidebar__icons-wrap">
            <Icon class="sidebar__calendar-icon" icon="Calendar"/>
          </div>
          <div v-show="isSidebarExpanded === true" class="sidebar__item-text">Calendar</div>
        </Button>
        <Button :state="['sidebar-primary']">
          <div class="sidebar__icons-wrap">
            <Icon class="sidebar__mail-icon" icon="mail"/>
          </div>
          <div v-show="isSidebarExpanded === true" class="sidebar__item-text">Mail</div>
        </Button>
        <Button :state="['sidebar-primary']">
          <div class="sidebar__icons-wrap">
            <Icon class="sidebar__chat-icon" icon="Chat"/>
          </div>
          <div v-show="isSidebarExpanded === true" class="sidebar__item-text">Chat</div>
        </Button>
        <Button :state="['sidebar-primary']">
          <div class="sidebar__icons-wrap">
            <Icon class="sidebar__tasks-icon" icon="Tasks"/>
          </div>
          <div v-show="isSidebarExpanded === true" class="sidebar__item-text">Tasks</div>
        </Button>
        <Button :state="['sidebar-primary']">
          <div class="sidebar__icons-wrap">
            <Icon class="sidebar__project-icon" icon="Project"/>
          </div>
          <div v-show="isSidebarExpanded === true" class="sidebar__item-text">Projects</div>
        </Button>
        <Button :state="['sidebar-primary']">
          <div class="sidebar__icons-wrap">
            <Icon class="sidebar__folder-icon" icon="Folder"/>
          </div>
          <div v-show="isSidebarExpanded === true" class="sidebar__item-text">File Manager</div>
        </Button>
        <Button :state="['sidebar-primary']">
          <div class="sidebar__icons-wrap">
            <Icon class="sidebar__text-icon" icon="Text"/>
          </div>
          <div v-show="isSidebarExpanded === true" class="sidebar__item-text">Notes</div>
        </Button>
        <Button :state="['sidebar-primary']">
          <div class="sidebar__icons-wrap">
            <Icon class="sidebar__contacts-icon" icon="Contacts"/>
          </div>
          <div v-show="isSidebarExpanded === true" class="sidebar__item-text">Contacts</div>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>

import Icon from '@/components/icon/Icon.vue';
import Button from '@/components/button/Button.vue';

export default {
  name: 'Sidebar.vue',
  components: {
    Icon,
    Button,
  },
  computed: {
    isSidebarExpanded() {
      return this.$store.getters.isSidebarExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  &__wrap {
    width: 14.1%;
    height: 100vh;
    background: var(--black);
    border-right: 1px solid var(--border);
  }
  &__hidden {
    width: 3%;
    display: flex;
    justify-content: center;
    padding-left: 0.35%;
  }
  &__logo-wrap {
    width: 90%;
    padding-left: 10%;
    height: 6.75vh;
    background: var(--black);
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 25px;
    height: 26px;
    margin-right: 10px;
  }
  &__logo-text {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: var(--heading);
  }
  &__items-wrap {
    width: 100%;
    height: 60vh;
  }
  &__item-text {
    color: var(--body-light);
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 400;
  }
  &__icons-wrap {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
  }
  &__grid-icon {
    width: 16px;
    height: 16px;
  }
  &__cart-icon {
    width: 16px;
    height: 16px;
  }
  &__calendar-icon {
    width: 16px;
    height: 17px;
  }
  &__mail-icon {
    width: 17px;
    height: 14px;
  }
  &__chat-icon {
    width: 20px;
    height: 20px;
  }
  &__tasks-icon {
    width: 20px;
    height: 20px;
  }
  &__project-icon {
    width: 20px;
    height: 20px;
  }
  &__folder-icon {
    width: 20px;
    height: 20px;
  }
  &__text-icon {
    width: 20px;
    height: 20px;
  }
  &__contacts-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
