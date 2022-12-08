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

        <ListBase
          :items="items"
        />

        <Emblem
          src="03.png"
          alt="Cosinuts"
        />
      </div>
    </div>
  </LayoutMain>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import LayoutMain from '@/components/LayoutMain';
import ListBase from '@/components/ListBase';
import Emblem from '@/components/Emblem';

export default {
  name: 'ShopsView',
  components: {
    LayoutMain,
    ListBase,
    Emblem
  },
  methods: {
    ...mapActions('shops', {
      itemsFetch: 'itemsFetch'
    })
  },
  computed: {
    ...mapGetters('shops', {
      heading: 'heading',
      items: 'items'
    })
  },
  mounted() {
    this.itemsFetch();
  }
}
</script>
