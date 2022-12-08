import {fetchState, fetchMutations, fetchGetters, fetchActions} from '@/store/common/fetch';
import axios from '@/axios';

export default {
  namespaced: true,
  state: {
    ...fetchState(),
    url: '/contacts',
    heading: '',
    content: ''
  },
  mutations: {
    ...fetchMutations()
  },
  getters: {
    ...fetchGetters(),
    heading: state => state.heading,
    content: state => state.content
  },
  actions: {
    ...fetchActions(),
    async itemsFetch({state, commit, dispatch}) {
      try {
        commit('setState', ['isLoading', true]);
        commit('setState', ['error', '']);

        const {data: {body, meta}} = await axios.get(state.url);

        commit('setState', ['heading', body.heading]);
        commit('setState', ['content', body.content]);
        commit('setHeadMeta', meta);
      } catch ({message}) {
        dispatch('errorChange', message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    }
  }
}