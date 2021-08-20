<template>
  <div class="checkbox__wrap"
    @click="onInput()"
  >
    <div
      :class="{
        'checkbox': true,
        'checkbox--active': modelValue
      }"
    >
      <img
        class="checkbox__mark"
        :src="require('@/components/checkbox/assets/check-mark-black-outline.svg')"
        alt=""
      >
    </div>
    <label class="checkbox__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    label: String,
    modelValue: Boolean,
  },
  methods: {
    onInput() {
      this.$emit('update:modelValue', !this.modelValue);
    },
  },
};

</script>

<style scoped lang="scss">
.checkbox {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid var(--border);
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrap {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    color: var(--body-dark);
  }

  &__mark {
    opacity: 0;
    width: 12px;
  }

  &--active {
    .checkbox__mark {
      opacity: 1;
    }
    background: var(--accent);
    border: none;
    width: 18px;
    height: 18px;
  }
  &__label {
    cursor: pointer;
    margin-left: 10px;
  }
}

</style>
