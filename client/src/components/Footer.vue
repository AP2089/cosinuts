<template>
  <footer class="footer">
    <div class="center">
      <div class="footer__wrap">
        <div
          class="footer__col"
          v-for="(menu, index) in MenuBaseSplit"
          :key="menu"
        >
          <MenuBase
            :heading="`${$t('chapter')} ${index + 1}`"
            :items="menu"
          />
        </div>
        <div class="footer__col">
          <MenuContact
            :heading="$t('contacts')"
            :items="contactsAll"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {mapGetters} from 'vuex';
import MenuBase from '@/components/MenuBase';
import MenuContact from '@/components/MenuContact';

export default {
  name: 'Footer',
  components: {
    MenuBase,
    MenuContact
  },
  computed: {
    ...mapGetters('meta', {
      MenuBase: 'MenuBase',
      contactsAll: 'contactsAll'
    }),
    MenuBaseSplit() {
      const limit = Math.ceil(this.MenuBase.length / 2);

      return this.MenuBase.reduce((acc, item, index) => {
        const currentIndex = limit > index ? 0 : 1;

        acc[currentIndex].push(item);

        return acc;
      }, [[], []]);
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid rgba(0, 0, 0, 0.15);

  @include media('min', $viewport-post-md) {
    padding: 45px 0;
  }
  
  @include media('max', $viewport-md) {
    padding: 20px 0;
  }

  &__wrap {
    @include media('min', $viewport-post-md) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-left: -15px;
    }
  }

  &__col {
    @include media('min', $viewport-post-md) {
      width: 25%;
      padding-left: 15px;

      &:last-child {
        margin-left: auto;
      }
    }
    
    @include media('max', $viewport-md) {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>