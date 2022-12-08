<template>
  <LayoutMain>
    <div class="center">
      <h1 class="heading-base">{{$t('checkout')}}</h1>

      <Cart
        :items="items"
        :priceTotal="priceTotal"
        :messageSuccess="messageSuccess"
        :invalid="v$.$invalid"
        @submit="orderFetch(form)"
        @cartChange="cartChange"
      >
        <template #panel>
          <InputboxBase
            :label="$t('your.name')"
            :validation="v$.name"
            v-model="form.name"
            class="inputbox-base_cart"
          />

          <InputboxBase
            :label="$t('your.phone')"
            :validation="v$.phone"
            mask="+# (###) ###-##-##"
            v-model="form.phone"
            class="inputbox-base_cart"
          />

          <InputboxBase
            :label="$t('your.email')"
            :validation="v$.email"
            v-model="form.email"
            class="inputbox-base_cart"
          />
        </template>
      </Cart>
    </div>
  </LayoutMain>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import {useValidation} from '@/hooks/useValidation';
import LayoutMain from '@/components/LayoutMain';
import Cart from '@/components/Cart';
import InputboxBase from '@/components/ui/InputboxBase';

export default {
  name: 'CartView',
  components: {
    LayoutMain,
    Cart,
    InputboxBase
  },
  methods: {
    ...mapActions('cart', {
      itemsFetch: 'itemsFetch',
      cartChange: 'cartChange',
      orderFetch: 'orderFetch',
      stateClear: 'stateClear'
    })
  },
  computed: {
    ...mapGetters('cart', {
      items: 'items',
      priceTotal: 'priceTotal',
      messageSuccess: 'messageSuccess'
    })
  },
  mounted() {
    this.itemsFetch();
  },
  unmounted() {
    this.stateClear();
  },
  setup: () => {
    const {form, v$} = useValidation({
      name: {
        required: true
      },
      phone: {
        required: true,
        phone: true
      },
      email: {
        required: true,
        email: true
      }
    });

    return {
      form,
      v$
    }
  }
}
</script>