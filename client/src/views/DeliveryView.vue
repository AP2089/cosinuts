<template>
  <LayoutMain>
    <div class="center">
      <div class="content">
        <h1
          v-if="heading"
          class="heading-base"
        >
          {{heading}}
        </h1>

        <div v-html="content"></div>
        
        <Emblem
          src="/uploads/03.png"
          alt="Cosinuts"
        />
      </div>
    </div>
  </LayoutMain>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import LayoutMain from '@/components/LayoutMain';
import Emblem from '@/components/Emblem';

export default {
  name: 'DeliveryView',
  components: {
    LayoutMain,
    Emblem
  },
  methods: {
    ...mapActions('delivery', {
      itemsFetch: 'itemsFetch'
    })
  },
  computed: {
    ...mapGetters('delivery', {
      heading: 'heading',
      content: 'content'
    })
  },
  mounted() {
    this.itemsFetch();
  }
}
</script>
