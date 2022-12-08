<template>
  <div class="products__item">
    <div class="products__wrap">
      <div class="products__img">
        <router-link
          :to="`/product/${item.id}`"
          class="products__img-link"
        >
          <Picture
            class="products__img-figure"
            :src="item.image"
            :alt="item.name"
          />
        </router-link>
      </div>

      <div class="products__name">
        <router-link
          class="products__name-link"
          :to="`/product/${item.id}`"
        >
          {{item.name}}
        </router-link>
      </div>

      <div class="products__description">
        {{item.description}}
      </div>

      <div class="products__prices">
        <div class="products__price">
          {{$t('from')}} {{item.price}} {{currency}}
        </div>

        <div 
          class="products__old-price"
          v-if="item.oldPrice"
        >
          {{$t('from')}} {{item.oldPrice}} {{currency}}
        </div>
      </div>

      <div class="products__panel">
        <ButtonLike
          :class="{'active': isLike}"
          @click="$emit('likeChange', item.id)"
        />

        <ButtonBase
          :class="[{'active': isCart}, 'products__btn-cart']"
          @click="$emit('cartChange', item.id)"
        >
          {{$t(`add.${isCart ? 'in' : 'to'}.cart`)}}
        </ButtonBase>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ButtonLike from '@/components/ui/ButtonLike';
import ButtonBase from '@/components/ui/ButtonBase';

export default {
  name: 'ProductsItem',
  components: {
    ButtonLike,
    ButtonBase
  },
  props: [
    'item'
  ],
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
.products {
  &__wrap {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    background-color: $color-factory;

    @include media('min', $viewport-post-md) {
      padding: 15px 15px 25px 15px;
      border-radius: 26px;
    }
    
    @include media('max', $viewport-md) {
      padding: 10px 10px 20px 10px;
      border-radius: 15px;
    }
  }

  &__img {
    text-align: center;
    margin-bottom: 10px;
  }

  &__img-link {
    display: inline-block;
    text-decoration: none;
    opacity: 1;
    transition: opacity .5s ease 0s;

    &:hover {
      text-decoration: none;
      opacity: .7;
    }
  }

  &__img-figure {
    display: block;
  }

  &__name {
    font-weight: 700;
    line-height: 1.2;
    color: $color-global;
    margin-bottom: 10px;

    @include media('min', $viewport-post-md) {
      font-size: 21px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 16px;
    }
  }

  &__name-link {
    color: $color-global;
    text-decoration: none;
    transition: color .5s ease 0s;

    &:hover {
      color: $color-primary;
      text-decoration: none;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    color: $color-info;
    margin-bottom: 10px;
  }

  &__prices {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
  }

  &__price {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.4;
    color: $color-danger;
    margin-right: 10px;
  }

  &__old-price {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.4;
    color: rgba(54, 54, 54, 0.25);
    margin-right: 10px;
    text-decoration: line-through;
  }

  &__panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__btn-cart {
    min-width: 152px;
  }
}
</style>