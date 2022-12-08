<template>
  <div
    :class="[
      'products__list',
      `products__columns-${columns}`
    ]"
  >
    <ProductsItem
      v-for="item in items"
      :item="item"
      @likeChange="$emit('likeChange', $event)"
      @cartChange="$emit('cartChange', $event)"
    />
  </div>
</template>

<script>
import ProductsItem from '@/components/ProductsItem';

export default {
  name: 'ProductsList',
  components: {
    ProductsItem
  },
  props: [
    'items',
    'columns'
  ]
}
</script>

<style lang="scss" scoped>
.products {
  &__list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;

    @include media('min', $viewport-post-md) {
      width: calc(100% + 25px);
      margin-left: -25px;
    }
    
    @include media('max', $viewport-md) {
      width: calc(100% + 15px);
      margin-left: -15px;
    }
  }

  @include media('min', $viewport-post-md) {
    @for $i from 1 through 5 {
      &__columns-#{$i} &__item {
        width: 100% / $i;
        padding-left: 25px;
        margin-bottom: 25px;
      }
    }
  }

  @include media(null, $viewport-post-sm, $viewport-md) {
    &__item {
      width: 33.333333%;
      padding-left: 15px;
      margin-bottom: 15px;
    }
  }

  @include media(null, $viewport-post-xs, $viewport-sm) {
    &__item {
      width: 50%;
      padding-left: 15px;
      margin-bottom: 15px;
    }
  }

  @include media('max', $viewport-xs) {
    &__item {
      width: 100%;
      padding-left: 15px;
      margin-bottom: 15px;
    }
  }
}
</style>