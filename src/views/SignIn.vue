<template>
  <div class="sign-in__wrap">
    <div class="sign-in__top-info">
      <h1 class="sign-in__heading">Login To Your Account</h1>
      <Button class="sign-in__icon-google" :state="['icon-secondary']">
          <Icon class="sign-in__icon" icon="google-icon" />
          Login with Google
      </Button>
      <div class="sign-in__text-wrap">
        <div class="sign-in__line-through"></div>
        <div class="sign-in__text">Or Login with email</div>
      </div>
    </div>
    <div class="sign-in__mid-bottom-wrap">
      <div class="sign-in__inputs-wrap">
        <InputText
          v-model="model.email"
          label="Email"
        />
        <InputText
          v-model="model.password"
          label="Password"
          type="password"
        />
      </div>
      <div class="sign-in__checkbox">
         <Checkbox
           v-model="model.remember"
           label="Remember"
         />
        <router-link class="sign-in__router-link" to="/forgot-password">
          <Button :state="['link-primary']">
            Forgot password?
          </Button>
        </router-link>
      </div>
      <Button :state="['primary']">
        Log In
      </Button>
      <div class="sign-in__bottom-text-wrap">
        <div class="sign-in__bottom-text">Don't have an account?</div>
        <router-link class="sign-in__router-link" to="sign-up">
          <Button to="/sign-up" :state="['link-primary']">
           Sign Up
          </Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/button/Button.vue';
import InputText from '@/components/inputText/InputText.vue';
import Checkbox from '@/components/checkbox/Checkbox.vue';
import Icon from '@/components/icon/Icon.vue';

export default {
  name: 'SignIn',
  components: {
    Checkbox,
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
.sign-in {
  &__wrap {
  width: 70%;
  height: 73.6%;
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
  &__mid-bottom-wrap  {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__inputs-wrap {
    width: 100%;
    height: 165px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  &__hide-icon {
    position: absolute;
    top: 135px;
    left: 365px;
    cursor: pointer;
  }
  &__checkbox {
    width: 100%;
    height: 30px;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__top-info {
    width: 100%;
    height: 186px;
    margin-top: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
  }
  &__bottom-text-wrap {
    margin-top: 79px;
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
  &__icon {
    position: absolute;
    width: 15px;
    height: 16px;
    left: 14px;
  }
  &__icon-google {
    margin-top: 45px;
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
  &__line-through {
    width: 100%;
    height: 1px;
    background: var(--border);
    position: absolute;
    z-index: 1;
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
