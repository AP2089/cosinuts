<template>
  <LayoutMain>
    <div class="center">
      <Products
        :heading="$t('favorites')"
        :items="items"
        :paginationCount="totalCount"
        @likeChange="likeChange"
        @cartChange="cartChange"
        @paginationChange="itemsFetch"
      />
    </div>
  </LayoutMain>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import LayoutMain from '@/components/LayoutMain';
import Products from '@/components/Products';

export default {
  name: 'FavoritesView',
  components: {
    LayoutMain,
    Products
  },
  methods: {
    ...mapActions('favorites', {
      itemsFetch: 'itemsFetch',
      likeChange: 'likeChange',
      cartChange: 'cartChange',
    })
  },
  computed: {
    ...mapGetters('favorites', {
      items: 'items',
      totalCount: 'totalCount'
    })
  },
  mounted() {
    this.itemsFetch();
  }
}
</script>
