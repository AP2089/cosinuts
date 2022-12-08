import {fetchState, fetchMutations, fetchGetters, fetchActions} from '@/store/common/fetch';
import axios from '@/axios';

export default {
  namespaced: true,
  state: {
    ...fetchState(),
    url: '/meta',
    MenuMain: [],
    MenuBase: [],
    MenuPrimary: [],
    contactsAll: [],
    phone: ''
  },
  mutations: {
    ...fetchMutations()
  },
  getters: {
    ...fetchGetters(),
    MenuMain: state => state.MenuMain,
    MenuBase: state => state.MenuBase,
    phone: state => state.phone,
    contactsAll: state => state.contactsAll,
    MenuPrimary: state => state.MenuPrimary,
  },
  actions: {
    ...fetchActions(),
    async itemsFetch({state, commit, dispatch}) {
      try {
        commit('setState', ['isLoading', true]);
        commit('setState', ['error', '']);

        const {data: {body, meta}} = await axios.get(state.url);

        commit('setState', ['MenuMain', body.MenuMain]);
        commit('setState', ['MenuBase', body.MenuBase]);
        commit('setState', ['MenuPrimary', body.MenuPrimary]);
        commit('setState', ['phone', body.contacts.phone]);
        commit('setState', ['contactsAll', body.contacts.all]);
      } catch ({message}) {
        dispatch('errorChange', message);
      } finally {
        commit('setState', ['isLoading', false]);
      }
    }
  }
}