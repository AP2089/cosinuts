import {fetchState, fetchMutations, fetchGetters, fetchActions} from '@/store/common/fetch';
import axios from '@/axios';

export default {
  namespaced: true,
  state: {
    ...fetchState(),
    url: '/shops',
    heading: '',
    items: []
  },
  mutations: {
    ...fetchMutations()
  },
  getters: {
    ...fetchGetters(),
    heading: state => state.heading,
    items: state => state.items
  },
  actions: {
    ...fetchActions(),
    async itemsFetch({state, commit, dispatch}) {
      try {
        commit('setState', ['isLoading', true]);
        commit('setState', ['error', '']);

        const {data: {body, meta}} = await axios.get(state.url);

        commit('setState', ['heading', body.heading]);
        commit('setState', ['items', body.items]);
        commit('setHeadMeta', meta);
      } catch ({message}) {
        dispatch('errorChange', message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    }
  }
}