<template>
  <nav class="menu-extra">
    <ul class="menu-extra__list">
      <li
        class="menu-extra__item menu-extra__item_phone"
        v-if="phone"
      >
        <a
          :href="`tel:${phone}`"
          class="menu-extra__phone"
        >
          <Sprite
            class="menu-extra__phone-icon"
            name="phone"
          />

          {{phone}}
        </a>
      </li>

      <li 
        class="menu-extra__item"
        v-if="favorites"
      >
        <router-link 
          :to="favorites"
          class="menu-extra__link"
        >
          {{$t('favorites')}}
        </router-link>
      </li>

      <li 
        class="menu-extra__item"
        v-if="cart"
      >
        <router-link 
          :to="cart"
          class="menu-extra__cart"
        >
          {{$t('cart')}}
          <span class="menu-extra__cart-count">{{counter}}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MenuExtra',
  props: {
    phone: {
      type: String
    },
    favorites: {
      type: String
    },
    cart: {
      type: String
    },
    counter: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-extra {
  &__list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    padding: 0;

    @include media('min', $viewport-post-lg) {
      margin: 0 40px 0 0;
    }

    @include media(null, $viewport-post-sm, $viewport-lg) {
      margin: 0 20px 0 0;
    }

    @include media('max', $viewport-sm) {
      margin: 0 10px 0 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__item_phone {    
    @include media('max', $viewport-sm) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      position: absolute;
      top: 3px;
      right: 15px;
      z-index: 1;
    }
  }

  &__link,
  &__phone {
    display: inline-block;
    font-weight: 700;
    line-height: 1;
    color: $color-extra;
    text-decoration: none;
    opacity: 1;
    transition: opacity .5s ease 0s;

    @include media('min', $viewport-post-lg) {
      font-size: 18px;
    }

    @include media(null, $viewport-post-sm, $viewport-lg) {
      font-size: 14px;
    }

    @include media('max', $viewport-sm) {
      font-size: 12px;
    }

    &:hover,
    &.active {
      text-decoration: none;
      opacity: .7;
    }
  }

  &__phone {
    position: relative;
    min-width: 16px;
    min-height: 16px;

    @include media('min', $viewport-post-lg) {
      padding-left: 26px;
    }

    @include media(null, $viewport-post-sm, $viewport-lg) {
      padding-left: 20px;
    }

    @include media('max', $viewport-sm) {
      padding-left: 15px;
      font-size: 12px;
    }
  }

  &__phone-icon {
    display: block;
    fill: $color-secondary;
    position: absolute;
    left: 0;

    @include media('min', $viewport-post-lg) {
      width: 16px;
      height: 16px;
      top: 0;
    }

    @include media(null, $viewport-post-sm, $viewport-lg) {
      width: 12px;
      height: 12px;
      top: 0;
    }

    @include media('max', $viewport-sm) {
      width: 8px;
      height: 8px;
      top: 1px;
    }
  }

  &__cart {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    background-color: rgba(254, 179, 2, 0.45);
    color: #FFFFFF;
    font-weight: 700;
    line-height: 1;
    transition: background-color .5s ease 0s;

    @include media('min', $viewport-post-lg) {
      font-size: 18px;
      padding: 7px 7px 7px 15px;
      border-radius: 14px;
    }

    @include media(null, $viewport-post-sm, $viewport-lg) {
      font-size: 14px;
      padding: 5px 5px 5px 10px;
      border-radius: 6px;
    }

    @include media('max', $viewport-sm) {
      font-size: 12px;
      padding: 4px 4px 4px 6px;
      border-radius: 4px;
    }

    &:hover,
    &.active {
      text-decoration: none;
      background-color: $color-primary;
      color: #FFFFFF;
    }
  }

  &__cart-count {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    background-color: #FFFFFF;
    color: $color-info;

    @include media('min', $viewport-post-lg) {
      min-width: 40px;
      height: 40px;
      border-radius: 10px;
      margin-left: 15px;
    }

    @include media(null, $viewport-post-sm, $viewport-lg) {
      min-width: 30px;
      height: 30px;
      border-radius: 5px;
      margin-left: 10px;
    }

    @include media('max', $viewport-sm) {
      min-width: 20px;
      height: 20px;
      border-radius: 4px;
      margin-left: 5px;
    }
  }
}
</style>