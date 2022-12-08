import {fetchState, fetchMutations, fetchGetters, fetchActions} from '@/store/common/fetch';
import axios from '@/axios';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    ...fetchState(),
    item: {},
    addiction: [],
    limit: 4,
    url: '/product'
  },
  mutations: {
    ...fetchMutations()
  },
  getters: {
    ...fetchGetters(),
    item: state => state.item,
    addiction: state => state.addiction
  },
  actions: {
    ...fetchActions(),
    async itemFetch({state, commit, dispatch}) {
      try {
        if(state.isLoading) return;

        commit('setState', ['isLoading', true]);
        commit('setState', ['error', '']);

        const {data: {body, meta}} = await axios.get(`${state.url}/${router.currentRoute.value.params.id}`);
        
        commit('setState', ['item', body]);
        commit('setState', ['addiction', body.related]);
        commit('setHeadMeta', meta);
      } catch ({message}) {
        dispatch('errorChange', message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    },
    likeChange({commit}, id) {
      commit('global/setLike', id, {root: true});
    },
    cartChange({commit}, id) {
      commit('global/setCart', id, {root: true});
    }
  }
}