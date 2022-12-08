import {fetchState, fetchMutations, fetchGetters, fetchActions} from '@/store/common/fetch';
import axios from '@/axios';

export default {
  namespaced: true,
  state: {
    ...fetchState(),
    items: [],
    url: '/cart',
    order: '/order',
    messageSuccess: ''
  },
  mutations: {
    ...fetchMutations()
  },
  getters: {
    ...fetchGetters(),
    items: state => state.items,
    messageSuccess: state => state.messageSuccess,
    priceTotal: state => state.items.reduce((acc, val) => acc + Number(val.price), 0)
  },
  actions: {
    ...fetchActions(),
    async itemsFetch({state, rootState, commit, dispatch}) {
      try {
        if(state.isLoading || rootState.global.cartSelected.length === 0) return;

        commit('setState', ['isLoading', true]);
        commit('setState', ['error', '']);

        const {data: {body, meta}} = await axios.get(state.url, {
          params: {
            id: rootState.global.cartSelected
          }
        });

        commit('setState', ['items', body]);
        commit('setHeadMeta', meta);
      } catch ({message}) {
        dispatch('errorChange', message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    },
    cartChange({state, rootState, commit}, id) {
      commit('global/setCart', id, {root: true});
      commit('setState', ['items', state.items.filter(item => rootState.global.cartSelected.includes(item.id))]);
    },
    async orderFetch({state, commit, dispatch, rootState}, payload) {
      try {
        if(state.isLoading) return;

        commit('setState', ['isLoading', true]);
        commit('setState', ['error', '']);

        const {data: {body, meta}} = await axios.patch(state.order, {
          data: {
            form: payload,
            order: rootState.global.cartSelected
          }
        });

        commit('global/setCart', null, {root: true});
        commit('setState', ['messageSuccess', body.message]);
        commit('setState', ['items', []]);
        window.scrollTo(0, 0);
      } catch ({message}) {
        dispatch('errorChange', message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    },
    stateClear({commit}) {
      commit('setState', ['messageSuccess', '']);
    }
  }
}