import {fetchState, fetchMutations, fetchGetters, fetchActions} from '@/store/common/fetch';
import axios from '@/axios';

export default {
  namespaced: true,
  state: {
    ...fetchState(),
    items: [],
    totalCount: 0,
    url: '/favorites',
    limit: 8
  },
  mutations: {
    ...fetchMutations()
  },
  getters: {
    ...fetchGetters(),
    items: state => state.items,
    totalCount: state => Math.ceil(state.totalCount / state.limit)
  },
  actions: {
    ...fetchActions(),
    async itemsFetch({state, commit, rootState, dispatch}, page = 1) {
      try {
        if(state.isLoading || rootState.global.likeSelected.length === 0) return;
        
        commit('setState', ['isLoading', true]);
        commit('setState', ['error', '']);

        const {data: {body, meta}, headers} = await axios.get(state.url, {
          params: {
            _page: page,
            _limit: state.limit,
            id: rootState.global.likeSelected
          }
        });

        commit('setState', ['totalCount', Number(headers['x-total-count'])]);
        commit('setState', ['items', body]);
        commit('setHeadMeta', meta);
      } catch ({message}) {
        dispatch('errorChange', message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    },
    likeChange({state, rootState, commit}, id) {
      commit('global/setLike', id, {root: true});
      commit('setState', ['items', state.items.filter(item => rootState.global.likeSelected.includes(item.id))]);
    },
    cartChange({commit}, id) {
      commit('global/setCart', id, {root: true});
    }
  }
}