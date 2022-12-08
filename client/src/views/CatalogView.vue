<template>
  <LayoutBase
    :heading="$t('range')"
  >
    <Products
      :items="items"
      :paginationCount="totalCount"
      :columns="3"
      @likeChange="likeChange"
      @cartChange="cartChange"
      @paginationChange="itemsFetch"
    />
  </LayoutBase>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import LayoutBase from '@/components/LayoutBase';
import Products from '@/components/Products';

export default {
  name: 'CatalogView',
  components: {
    LayoutBase,
    Products
  },
  methods: {
    ...mapActions('catalog', {
      itemsFetch: 'itemsFetch',
      likeChange: 'likeChange',
      cartChange: 'cartChange',
    })
  },
  computed: {
    ...mapGetters('catalog', {
      items: 'items',
      totalCount: 'totalCount'
    })
  },
  mounted() {
    this.itemsFetch();
  },
  watch: {
    '$route.params.id'() {
      this.itemsFetch();
    }
  }
}
</script>