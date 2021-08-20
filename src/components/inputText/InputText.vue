<template>
  <div onload="onType()" class="field__wrap">
    <Icon
      v-if="type === 'password'"
      ref="icon"
      class="field__icon"
      :icon="'hide'/*isPasswordShown ? 'hide' : 'show'*/"
      @click="togglePasswordVisibility"
    />
    <label class="field__label">
      {{ label }}
    </label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="field__input"
      :type="computedType"
    >
  </div>
</template>

<script>
import Icon from '@/components/icon/Icon.vue';

export default {
  name: 'InputText',
  components: {
    Icon,
  },
  props: {
    label: String,
    modelValue: String,
    type: {
      type: String,
      default: 'text',
    },
  },
  data: () => ({
    isPasswordShown: false,
  }),
  computed: {
    computedType() {
      return this.type === 'password' && !this.isPasswordShown ? 'password' : 'text';
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordShown = !this.isPasswordShown;
    },
  },
};
</script>

<style lang="scss">
.field {
  &__wrap {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  &__label {
    font-size: 14px;
    font-weight: 400;
    color: var(--body-dark);
  }

  &__input {
    width: 90%;
    padding: 0 5%;
    margin-top: 5px;
    height: 40px;
    border: 1px solid var(--border);
    border-radius: 13px;
    background: var(--surface);
    outline: none;
    font-size: 14px;
    font-weight: 400;
    color: var(--body-light);
  }

  &__icon {
    width: 25px;
    height: 15px;
    position: absolute;
    left: 365px;
    top: 45px;
    cursor: pointer;
    display: block;
  }
}
</style>
