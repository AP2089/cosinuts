import {fetchState, fetchMutations, fetchGetters, fetchActions} from '@/store/common/fetch';
import axios from '@/axios';

export default {
  namespaced: true,
  state: {
    ...fetchState(),
    url: '/home',
    items: [],
    limit: 8
  },
  mutations: {
    ...fetchMutations()
  },
  getters: {
    ...fetchGetters(),
    items: state => state.items
  },
  actions: {
    ...fetchActions(),
    async itemsFetch({state, commit, dispatch}) {
      try {
        if(state.isLoading) return;
        
        commit('setState', ['isLoading', true]);
        commit('setState', ['error', '']);

        const {data: {body, meta}} = await axios.get(state.url, {
          params: {
            _limit: state.limit
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
    likeChange({commit}, id) {
      commit('global/setLike', id, {root: true});
    },
    cartChange({commit}, id) {
      commit('global/setCart', id, {root: true});
    }
  }
}