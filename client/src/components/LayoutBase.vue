<template>
  <LayoutMain>
    <div class="center">
      <div class="layout-base">
        <h1 
          class="heading-base"
          v-if="heading"
        >
          {{heading}}
        </h1>

        <div class="layout-base__wrap">
          <div class="layout-base__sidebar">
            <ButtonHamburger
              :isActive="menuCatalogIsActive"
              class="layout-base__btn-menu"
              @change="menuCatalogChange"
            />

            <div
              :class="[
                'layout-base__sidebar-wrap',
                {active: menuCatalogIsActive}
              ]"
            >
              <MenuSecondary
                :heading="$t('categories')"
                :items="MenuBase"
                @change="menuCatalogChange"
              />
            </div>
          </div>

          <div class="layout-base__content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </LayoutMain>
</template>

<script>
import {mapGetters} from 'vuex';
import LayoutMain from '@/components/LayoutMain';
import MenuSecondary from '@/components/MenuSecondary';
import ButtonHamburger from '@/components/ui/ButtonHamburger';
import useMenuCatalog from '@/hooks/useMenuCatalog';

export default {
  name: 'LayoutBase',
  props: {
    heading: {
      type: String
    }
  },
  components: {
    LayoutMain,
    MenuSecondary,
    ButtonHamburger
  },
  computed: {
    ...mapGetters('meta', {
      MenuBase: 'MenuBase'
    })
  },
  setup() {
    return useMenuCatalog();
  }
}
</script>

<style lang="scss" scoped>
.layout-base {
  margin-bottom: 30px;
  
  &__wrap {
    @include media('min', $viewport-post-md) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  &__sidebar {
    @include media('min', $viewport-post-md) {
      flex: 0 0 350px;
      position: sticky;
      top: 100px;
      left: 0;
      z-index: 100;
    }

    @include media('max', $viewport-md) {
      margin-bottom: 20px;
    }
  }

  &__sidebar-wrap {    
    @include media('max', $viewport-md) {
      display: none;
      padding-top: 10px;

      &.active {
        display: block;
      }
    }
  }

  &__content {
    @include media('min', $viewport-post-md) {
      flex: 1;
      padding-left: 25px;
    }
  }

  &__btn-menu {
    @include media('min', $viewport-post-md) {
      display: none;
    }
  }
}
</style>
