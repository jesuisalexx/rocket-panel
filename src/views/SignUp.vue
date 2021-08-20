<template>
  <div class="sign-up__wrap">
    <div class="sign-up__top-info">
      <h1 class="sign-up__heading">Create Account</h1>
      <Button class="sign-up__icon-google" :state="['icon-secondary']">
        <Icon class="sign-up__icon" icon="google-icon"/>
        Sign Up with Google
      </Button>
      <div class="sign-up__text-wrap">
        <div class="sign-up__line-through"></div>
        <div class="sign-up__text">Or Sign Up with email</div>
      </div>
    </div>
    <div class="sign-up__mid-bottom-wrap">
      <div class="sign-up__inputs-wrap">
        <InputText
          v-model="model.name"
          label="Full Name"
        />
        <InputText
          v-model="model.email"
          label="Email"
        />
        <InputText
          v-model="model.password"
          label="Password"
          type="password"
        />
        <InputText
          v-model="model.confirmPassword"
          label="Confirm Password"
          type="password"
        />
      </div>
      <div class="sign-up__checkbox">
        <Checkbox
          label="I accept"
          v-model="model.remember"
        />
        <Button
          class="sign-up__terms-btn"
          :state="['link-primary']">
          Terms and Conditions
        </Button>
      </div>
      <Button :state="['primary']">
        Create Account
      </Button>
      <div class="sign-up__bottom-text-wrap">
        <div class="sign-up__bottom-text">Already have an account?</div>
        <router-link class="sign-up__router-link" to="sign-in">
          <Button to="/sign-in" :state="['link-primary']">
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
import Checkbox from '@/components/checkbox/Checkbox.vue';
import Icon from '@/components/icon/Icon.vue';

export default {
  name: 'SignUp',
  components: {
    Checkbox,
    InputText,
    Button,
    Icon,
  },
  data: () => ({
    model: {
      name: 'Regina Cooper',
      email: 'cooper@example.com',
      password: '12345678',
      confirmPassword: '12345678',
      remember: false,
    },
  }),
};
</script>

<style lang="scss" scoped>
.sign-up {
  &__wrap {
    width: 70%;
    height: 92%;
    padding: 0 16.8%;
    background: var(--surface);
    border-radius: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__router-link  {
    text-decoration: none;
  }
  &__mid-bottom-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__inputs-wrap {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  &__terms-btn {
    margin-left: 8px;
  }

  &__hide-icon-pass {
    position: absolute;
    top: 225px;
    left: 365px;
    cursor: pointer;
  }

  &__hide-icon-conf-pass {
    position: absolute;
    top: 320px;
    left: 365px;
    cursor: pointer;
  }

  &__checkbox {
    width: 100%;
    height: 30px;
    padding: 24px 0;
    display: flex;
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
