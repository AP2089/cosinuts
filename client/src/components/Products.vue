<template>
  <div class="products">
    <h3
      class="products__heading"
      v-if="heading"
    >
      {{heading}}
    </h3>

    <slot name="before"></slot>

    <ProductsList
      v-if="items.length > 0"
      :items="items"
      :columns="columns"
      @likeChange="$emit('likeChange', $event)"
      @cartChange="$emit('cartChange', $event)"
    />

    <Message
      v-else
      :text="$t('message.not.found')"
    />
    
    <slot name="after"></slot>

    <Pagination
      :count="paginationCount"
      @change="$emit('paginationChange', $event)"
    />
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList';
import Pagination from '@/components/Pagination';
import Message from '@/components/ui/Message';

export default {
  name: 'Products',
  components: {
    ProductsList,
    Pagination,
    Message
  },
  props: {
    heading: {
      type: String
    },
    items: {
      type: Array,
      required: true
    },
    columns: {
      type: Number,
      default: 4
    },
    paginationCount: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  margin-bottom: 30px;
  
  &__heading {
    font-weight: 700;
    line-height: 1;
    letter-spacing: 1px;
    color: $color-dark;
    padding: 0;
    margin: 0 0 20px 0;
    text-align: center;

    @include media('min', $viewport-post-md) {
      font-size: 50px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 20px;
    }
  }
}
</style>