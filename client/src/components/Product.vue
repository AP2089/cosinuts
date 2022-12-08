<template>
  <div class="product">
    <div class="product__content">
      <div class="product__img">
        <Picture
          class="product__img-figure"
          :src="item.image"
          :alt="item.name"
        />
      </div>
      <div class="product__wrap">
        <div class="product__description">{{item.description}}</div>

        <div class="product__price">{{item.price}} {{currency}}</div>

        <div class="product__panel">
          <ButtonBase
            :class="[{'active': isCart}, 'product__btn-cart']"
            @click="$emit('cartChange', item.id)"
          >
            {{$t(`add.${isCart ? 'in' : 'to'}.cart`)}}
          </ButtonBase>

          <ButtonLike
            :class="{'active': isLike}"
            @click="$emit('likeChange', item.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ButtonLike from '@/components/ui/ButtonLike';
import ButtonBase from '@/components/ui/ButtonBase';

export default {
  name: 'Product',
  components: {
    ButtonLike,
    ButtonBase
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('global', {
      likeSelected: 'likeSelected',
      cartSelected: 'cartSelected',
      currency: 'currency'
    }),
    isLike() {
      return this.likeSelected.includes(this.item.id)
    },
    isCart() {
      return this.cartSelected.includes(this.item.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  margin-bottom: 50px;

  @include media('min', $viewport-post-md) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  &__content {
    @include media('min', $viewport-post-md) {
      flex: 1;
      padding-left: 25px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }

    @include media('max', $viewport-md) {
      margin-bottom: 40px;
    }
  }

  &__img {
    @include media('min', $viewport-post-md) {
      flex: 0 0 380px;
    }
    
    @include media('max', $viewport-md) {
      max-width: 300px;
      margin: 0 auto 20px;
    }
  }

  &__img-figure {
    display: block;
  }

  &__wrap {
    @include media('min', $viewport-post-md) {
      flex: 1;
      padding-left: 50px;
    }
  }

  &__description {
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 1px;
    color: $color-secondary;
    max-width: 600px;

    @include media('min', $viewport-post-md) {
      font-size: 22px;
      margin-bottom: 30px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 16px;
      margin: 0 auto 20px;
      text-align: center;
    }
  }

  &__price {
    font-weight: 700;
    line-height: 1.2;
    color: $color-danger;

    @include media('min', $viewport-post-md) {
      font-size: 48px;
      margin-bottom: 30px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 18px;
      margin-bottom: 10px;
      text-align: center;
    }
  }

  &__panel {
    display: flex;
    align-items: center;

    @include media('min', $viewport-post-md) {
      justify-content: flex-start;
    }
    
    @include media('max', $viewport-md) {
      justify-content: center;
    }
  }

  &__btn-cart {
    @include media('min', $viewport-post-md) {
      min-width: 152px;
      margin-right: 30px;
    }
    
    @include media('max', $viewport-md) {
      min-width: 120px;
      margin-right: 10px;
    }
  }
}
</style>