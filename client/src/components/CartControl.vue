<template>
  <div class="cart__control">
    <ButtonBase
      type="submit"
      class="cart__btn-submit"
      :disabled="!isSubmit"
    >
      {{$t('order')}}
    </ButtonBase>
  </div>
</template>

<script>
import ButtonBase from '@/components/ui/ButtonBase';

export default {
  name: 'CartControl',
  components: {
    ButtonBase
  },
  props: [
    'isSubmit'
  ]
}
</script>

<style lang="scss" scoped>
.cart {
  &__control {
    text-align: center;
  }

  &__btn-submit {
    @include media('min', $viewport-post-md) {
      min-width: 300px;
    }
    
    @include media('max', $viewport-md) {
      min-width: 200px;
    }
  }
}
</style>