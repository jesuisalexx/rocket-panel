<template>
  <div class="reset-pass__wrap">
    <div class="reset-pass__icon-wrap">
      <Icon class="icon" icon="Lock"/>
    </div>
    <div class="reset-pass__top-info">
      <h1 class="reset-pass__heading">Reset Your Password</h1>
    </div>
    <div class="reset-pass__mid-bottom-wrap">
      <div class="reset-pass__input-wrap">
        <InputText
          v-model="model.email"
          label="Email"
        />
        <InputText
          v-model="model.password"
          type="password"
          label="Password"
        />
        <InputText
          v-model="model.confirmPassword"
          type="password"
          label="Confirm Password"
        />
      </div>
      <Button class="reset-pass__log-btn" :state="['primary']">
        Reset Password
      </Button>
      <div class="reset-pass__bottom-text-wrap">
        <div class="reset-pass__bottom-text">Go back to</div>
        <router-link class="reset-pass__router-link" to="sign-in">
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
  name: 'ResetPassword',
  components: {
    InputText,
    Button,
    Icon,
  },
  data: () => ({
    model: {
      email: 'cooper@example.com',
      password: '12345678',
      confirmPassword: '12345678',
      remember: false,
    },
  }),
};
</script>

<style lang="scss" scoped>
.reset-pass {
  &__wrap {
    width: 70%;
    height: 88.6%;
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
    height: 250px;
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
