<template>
  <div class="forgot-pass__wrap">
    <div class="forgot-pass__icon-wrap">
      <Icon class="icon" icon="Lock"/>
    </div>
    <div class="forgot-pass__top-info">
      <h1 class="forgot-pass__heading">Recover Your Password</h1>
    </div>
    <div class="forgot-pass__mid-bottom-wrap">
      <div class="forgot-pass__input-wrap">
        <InputText
          v-model="model.email"
          label="Email"
        />
      </div>
      <Button class="forgot-pass__log-btn" :state="['primary']">
        Recover Password
      </Button>
      <div class="forgot-pass__bottom-text-wrap">
        <div class="forgot-pass__bottom-text">Go back to</div>
        <router-link class="forgot-pass__router-link" to="sign-in">
          <Button to="/sign-up" :state="['link-primary']">
            Login
          </Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/button/Button.vue';
import InputText from '@/components/inputText/InputText.vue';
import Icon from '@/components/icon/Icon.vue';

export default {
  name: 'ForgotPassword',
  components: {
    InputText,
    Button,
    Icon,
  },
  data: () => ({
    model: {
      email: 'cooper@example.com',
      password: '12345678',
      remember: false,
    },
  }),
};
</script>

<style lang="scss" scoped>
.forgot-pass {
  &__wrap {
    width: 70%;
    height: 672px;
    padding: 0 16.8%;
    background: var(--surface);
    border-radius: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__router-link {
    text-decoration: none;
  }
  &__icon-wrap {
    width: 220px;
    height: 220px;
    margin-top: 80px;
    margin-bottom: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__log-btn {
    margin-top: 24px;
  }
  &__mid-bottom-wrap  {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__input-wrap {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  &__top-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 41px;
  }
  &__bottom-text-wrap {
    margin-top: 78px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  &__bottom-text {
    font-size: 14px;
    font-weight: 400;
    color: var(--body-dark);
    margin-right: 5px;
  }
  &__heading {
    color: var(--heading);
    font-weight: 500;
    font-size: 28px;
  }
  &__text-wrap {
    width: 100%;
    height: 20px;
    margin-top: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  &__text {
    font-size: 12px;
    font-weight: 400;
    color: var(--body-dark);
    text-transform: uppercase;
    background: var(--surface);
    z-index: 2;
    padding: 0 16px;
  }
}
</style>
