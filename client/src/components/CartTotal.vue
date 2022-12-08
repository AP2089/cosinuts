<template>
  <div class="cart__total">
    <div class="cart__total-title">{{$t('total')}}:</div>
    <div class="cart__total-count">{{priceTotal}} {{currency}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'CartTotal',
  props: [
    'priceTotal'
  ],
  computed: {
    ...mapGetters('global', {
      currency: 'currency'
    })
  }
}
</script>

<style lang="scss" scoped>
.cart {
  &__total {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 30px;
    padding-top: 10px;
  }

  &__total-title {
    font-weight: 700;
    line-height: 1;
    color: $color-global;
    padding-right: 10px;

    @include media('min', $viewport-post-md) {
      font-size: 36px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 18px;
    }
  }

  &__total-count {
    font-weight: 700;
    line-height: 1;
    color: $color-primary;
    padding-left: 10px;

    @include media('min', $viewport-post-md) {
      font-size: 36px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 18px;
    }
  }
}
</style>