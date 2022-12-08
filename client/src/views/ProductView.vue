<template>
  <LayoutBase
    :heading="item.name"
  >
    <Product
      :item="item"
      @cartChange="cartChange"
      @likeChange="likeChange"
    />

    <Products
      :heading="$t('related.products')"
      :items="addiction"
      @likeChange="likeChange"
      @cartChange="cartChange"
    />
  </LayoutBase>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import LayoutBase from '@/components/LayoutBase';
import Product from '@/components/Product';
import Products from '@/components/Products';

export default {
  name: 'ProductView',
  components: {
    LayoutBase,
    Product,
    Products,
  },
  methods: {
    ...mapActions('product', {
      itemFetch: 'itemFetch',
      likeChange: 'likeChange',
      cartChange: 'cartChange',
    })
  },
  computed: {
    ...mapGetters('product', {
      item: 'item',
      addiction: 'addiction'
    })
  },
  mounted() {
    this.itemFetch();
  },
  watch: {
    '$route.params.id'() {
      this.itemFetch();
    }
  }
}
</script>