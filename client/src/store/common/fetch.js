import {debounceState, debounceMutations, debounceActions} from '@/store/common/debounce';
import setStateMutation from '@/store/mutations/setState';

export const fetchState = () => ({
  ...debounceState(),
  isLoading: false,
  error: '',
  headMeta: {}
});

export const fetchMutations = () => ({
  ...debounceMutations(),
  ...setStateMutation(),
  setHeadMeta(state, data) {
    state.headMeta = data;
    
    if (data.title) {
      document.title = data.title;
    }
  }
});

export const fetchGetters = () => ({
  isLoading: state => state.isLoading,
  error: state => state.error
});

export const fetchActions = () => ({
  ...debounceActions(),
  async errorChange({commit, dispatch}, error) {
    commit('setState', ['error', error]);
    await dispatch('debounce', 3100);
    commit('setState', ['error', '']);
  }
});