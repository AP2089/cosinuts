<template>
  <form
    v-if="!messageSuccess"
    class="cart"
    @submit.prevent="$emit('submit')"
  >
    <div class="cart__panel">
      <div class="cart__wrap">
        <slot name="panel"></slot>
      </div>
    </div>

    <div class="cart__order">
      <div class="cart__wrap">
        <div class="cart__heading">{{$t('your.order')}}</div>

        <CartList
          :items="items"
          @cartChange="$emit('cartChange', $event)"
        />

        <CartTotal
          :priceTotal="priceTotal"
        />

        <CartControl
          :isSubmit="isSubmit"
        />
      </div>
    </div>
  </form>

  <CartSuccess
    v-else
    :messageSuccess="messageSuccess"
  />
</template>

<script>
import CartList from '@/components/CartList';
import CartTotal from '@/components/CartTotal';
import CartControl from '@/components/CartControl';
import CartSuccess from '@/components/CartSuccess';

export default {
  name: 'Cart',
  components: {
    CartList,
    CartTotal,
    CartControl,
    CartSuccess
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    priceTotal: {
      type: Number,
      required: true
    },
    invalid: {
      type: Boolean,
      required: true
    },
    messageSuccess: {
      type: String,
      required: true
    }
  },
  computed: {
    isSubmit() {
      return this.items.length > 0 && !this.invalid;
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  @include media('min', $viewport-post-md) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto 50px auto;
  }
  
  @include media('max', $viewport-md) {
    margin-bottom: 40px;
  }

  &__panel {
    @include media('min', $viewport-post-md) {
      width: 50%;
      padding-right: 15px;
    }
    
    @include media('max', $viewport-md) {
      margin-bottom: 20px;
    }
  }

  &__order {
    @include media('min', $viewport-post-md) {
      width: 50%;
      padding-left: 15px;
    }
  }

  &__wrap {
    max-width: 500px;

    @include media('max', $viewport-md) {
      margin: 0 auto;
    }
  }

  &__heading {
    font-weight: 700;
    line-height: 1.2;
    color: $color-global;
    margin-bottom: 20px;
    text-align: center;

    @include media('min', $viewport-post-md) {
      font-size: 18px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 16px;
    }
  }
}
</style>