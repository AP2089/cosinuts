<template>
  <div class="cart__success">
    {{messageSuccess}}
  </div>
</template>

<script>
export default {
  name: 'CartSuccess',
  props: [
    'messageSuccess'
  ]
}
</script>

<style lang="scss" scoped>
.cart {
  &__success {
    font-weight: 700;
    line-height: 1;
    text-align: center;
    color: $color-global;
    margin-bottom: 50px;

    @include media('min', $viewport-post-md) {
      font-size: 36px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 16px;
    }
  }
}
</style>