import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView';
import CatalogView from '../views/CatalogView';
import ProductView from '../views/ProductView';
import AboutView from '../views/AboutView';
import DeliveryView from '../views/DeliveryView';
import ShopsView from '../views/ShopsView';
import ContactsView from '../views/ContactsView';
import FavoritesView from '../views/FavoritesView';
import CartView from '../views/CartView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalog/:id',
    name: 'catalog',
    component: CatalogView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: DeliveryView
  },
  {
    path: '/shops',
    name: 'shops',
    component: ShopsView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  scrollBehavior() {
    return {
      top: 0,
      left: 0
    }
  },
  routes
})

export default router;
