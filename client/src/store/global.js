import {getLocalStateKey, setLocalStateId} from '@/helpers/localStorage';
import {currency} from '@/config';

export default {
  namespaced: true,
  state: {
    likeSelected: getLocalStateKey('like'),
    cartSelected: getLocalStateKey('cart'),
    currency: currency
  },
  mutations: {
    setLike(state, id) {
      state.likeSelected = setLocalStateId('like', id);
    },
    setCart(state, id) {
      state.cartSelected = setLocalStateId('cart', id);
    }
  },
  getters: {
    likeSelected: state => state.likeSelected,
    cartSelected: state => state.cartSelected,
    currency: state => state.currency,
    isLoading: (state, getters, rootState, rootGetters) => {
      const data = [];

      for (const key in rootState) {
        const isLoading = rootState[key].isLoading;

        if (rootState.hasOwnProperty(key) && isLoading !== undefined) {
          data.push(isLoading);
        }
      }

      return data.includes(true);
    },
    errors: (state, getters, rootState, rootGetters) => {
      const data = [];

      for (const key in rootState) {
        const error = rootState[key].error;

        if (rootState.hasOwnProperty(key) && error) {
          data.push(error);
        }
      }

      return data;
    }
  }
}