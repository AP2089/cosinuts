<template>
  <div class="inputbox-base">    
    <div
      class="inputbox-base__label"
      v-if="label"
    >
      {{label}}
    </div>

    <input
      v-if="mask"
      v-mask="[mask]"
      type="text"
      :placeholder="maskPlaceholder"
      :class="inputClasses"
      :value="modelValue"
      @input="onInput"
    />

    <input
      v-else
      type="text"
      :class="inputClasses"
      :value="modelValue"
      @input="onInput"
    />

    <Message
      v-if="(validation.$dirty && validation.$errors.length > 0)"
      :text="validation.$errors[0].$message"
      type="error"
    />
  </div>
</template>

<script>
import {mask} from 'vue-the-mask';
import Message from '@/components/ui/Message';

export default {
  name: 'InputboxBase',
  components: {
    Message
  },
  directives: {
    mask
  },
  props: {
    label: {
      type: String
    },
    modelValue: {
      type: String
    },
    validation: {
      type: Object
    },
    mask: {
      type: String
    }
  },
  emits: ['update:modelValue'],
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
  computed: {
    inputClasses() {
      return [
        'inputbox-base__field',
        {error: this.validation.$dirty && this.validation.$invalid}
      ];
    },
    maskPlaceholder() {
      return this.mask.replace(/#/g, '_');
    }
  }
}
</script>

<style lang="scss" scoped>
.inputbox-base {
  &__label {
    font-weight: 700;
    line-height: 1.2;
    color: $color-global;
    margin-bottom: 5px;

    @include media('min', $viewport-post-md) {
      font-size: 18px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }

  &__field {
    display: block;
    width: 100%;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 0 10px;
    font-weight: 400;
    color: $color-global;
    outline: none;

    @include media('min', $viewport-post-md) {
      font-size: 21px;
      height: 44px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 16px;
      height: 36px;
    }

    &:hover,
    &:focus {
      border-color: rgba(0, 0, 0, 0.15);
    }

    &.error {
      border-color: $color-danger;
    }
  }

  &_cart {
    margin-bottom: 25px;
  }
}
</style>