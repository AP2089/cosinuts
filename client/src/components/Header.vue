<template>
  <header class="header">
    <div class="center">
      <div class="header__wrap">
        <div class="header__left">
          <Logo
            class="header__logo"
          />

          <MenuMain
            :items="MenuMain"
            :class="{active: menuMenuMainIsActive}"
            @change="menuMenuMainChange"
          />
        </div>
        <div class="header__right">
          <MenuExtra
            :phone="phone"
            :counter="cartSelected.length"
            favorites="/favorites"
            cart="/cart"
          />

          <ButtonHamburger
            :isActive="menuMenuMainIsActive"
            class="header__btn-menu"
            @change="menuMenuMainChange"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex';
import Logo from '@/components/Logo';
import MenuMain from '@/components/MenuMain';
import MenuExtra from '@/components/MenuExtra';
import ButtonHamburger from '@/components/ui/ButtonHamburger';
import useMenuMain from '@/hooks/useMenuMain';

export default {
  name: 'Header',
  components: {
    Logo,
    MenuMain,
    MenuExtra,
    ButtonHamburger
  },
  computed: {
    ...mapGetters('meta', {
      MenuMain: 'MenuMain',
      phone: 'phone'
    }),
    ...mapGetters('global', {
      cartSelected: 'cartSelected'
    })
  },
  setup() {
    return useMenuMain();
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #ffffff;
  padding: 15px 0 5px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__right {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__logo {
    @include media('min', $viewport-post-md) {
      margin-right: 25px;
    }
  }

  &__btn-menu {
    @include media('min', $viewport-post-md) {
      display: none;
    }
    
    @include media('max', $viewport-md) {
      margin-left: 10px;
      z-index: 1001;
    }
  }
}
</style>