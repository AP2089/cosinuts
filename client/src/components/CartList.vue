<template>
  <div class="cart__list">
    <div
      class="cart__item"
      v-for="item in items"
      :key="item.id"
    >
      <div class="cart__product">
        <router-link 
          class="cart__product-img"
          :to="`/product/${item.id}`"
        >
          <Picture
            class="cart__product-img-figure"
            :src="item.image"
            :alt="item.name"
          />
        </router-link>

        <router-link 
          class="cart__product-name"
          :to="`/product/${item.id}`"
        >
          {{item.name}}
        </router-link>

        <div class="cart__product-price">
          {{item.price}} {{currency}}
        </div>

        <ButtonClose
          class="cart__product-btn"
          @click="$emit('cartChange', item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ButtonClose from '@/components/ui/ButtonClose';

export default {
  name: 'CartList',
  components: {
    ButtonClose
  },
  props: [
    'items'
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
  &__list {
    @include media('min', $viewport-post-md) {
      max-height: 285px;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }

  &__item {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid $color-dark;
  }

  &__product {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__product-img {
    margin-right: 15px;
    flex: 0 0 40px;
    text-decoration: none;
    opacity: 1;
    transition: opacity .5s ease 0s;

    &:hover {
      opacity: .7;
    }
  }

  &__product-img-figure {
    display: block;
  }

  &__product-name {
    line-height: 1.2;
    flex: 1;
    text-decoration: none;
    opacity: 1;
    color: $color-global;
    transition: opacity .5s ease 0s;
    margin-right: 15px;

    @include media('min', $viewport-post-md) {
      font-size: 18px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 16px;
    }

    &:hover {
      text-decoration: none;
      opacity: .7;
      color: $color-global;
    }
  }

  &__product-price {
    font-weight: bold;
    margin: 2px 15px 0 auto;
    color: $color-danger;

    @include media('min', $viewport-post-md) {
      font-size: 18px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 16px;
    }
  }

  &__product-btn {
    flex: 0 0 24px;
  }
}
</style>