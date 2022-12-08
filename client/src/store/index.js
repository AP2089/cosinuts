import {createStore} from 'vuex';
import global from '@/store/global';
import meta from '@/store/meta';
import home from '@/store/home';
import about from '@/store/about';
import delivery from '@/store/delivery';
import shops from '@/store/shops';
import contacts from '@/store/contacts';
import favorites from '@/store/favorites';
import cart from '@/store/cart';
import catalog from '@/store/catalog';
import product from '@/store/product';

export default createStore({
  modules: {
    global,
    meta,
    home,
    about,
    delivery,
    shops,
    contacts,
    favorites,
    cart,
    catalog,
    product
  }
});
