<template>
  <div class="wrap">
    <Header />

    <div class="middle">
      <slot></slot>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'LayoutMain',
  components: {
    Header,
    Footer
  },
  methods: {
    ...mapActions('meta', {
      itemsFetch: 'itemsFetch'
    })
  },
  mounted() {
    this.itemsFetch();
  }
}
</script>