<template>
  <LayoutMain>
    <div class="center">
      <BannerBase />

      <Products
        :heading="$t('range')"
        :items="items"
        @likeChange="likeChange"
        @cartChange="cartChange"
      >
        <template #before>
          <MenuPrimary
            :items="MenuPrimary"
          />
        </template>
      </Products>
    </div>
  </LayoutMain>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import LayoutMain from '@/components/LayoutMain';
import BannerBase from '@/components/BannerBase';
import Products from '@/components/Products';
import MenuPrimary from '@/components/MenuPrimary';

export default {
  name: 'HomeView',
  components: {
    LayoutMain,
    BannerBase,
    Products,
    MenuPrimary
  },
  methods: {
    ...mapActions('home', {
      itemsFetch: 'itemsFetch',
      likeChange: 'likeChange',
      cartChange: 'cartChange',
    })
  },
  computed: {
    ...mapGetters('meta', {
      MenuPrimary: 'MenuPrimary'
    }),
    ...mapGetters('home', {
      items: 'items'
    })
  },
  mounted() {
    this.itemsFetch();
  }
}
</script>
