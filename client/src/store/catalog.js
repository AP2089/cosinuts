import {fetchState, fetchMutations, fetchGetters, fetchActions} from '@/store/common/fetch';
import axios from '@/axios';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    ...fetchState(),
    items: [],
    totalCount: 0,
    url: '/catalog',
    limit: 9
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
    async itemsFetch({state, commit, dispatch}, pageNumber = 1) {
      try {
        if(state.isLoading) return;

        commit('setState', ['isLoading', true]);
        commit('setState', ['error', '']);

        const {data: {body, meta}, headers} = await axios.get(state.url, {
          params: {
            _limit: state.limit,
            _page: pageNumber,
            category: router.currentRoute.value.params.id
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
    likeChange({commit}, id) {
      commit('global/setLike', id, {root: true});
    },
    cartChange({commit}, id) {
      commit('global/setCart', id, {root: true});
    }
  }
}