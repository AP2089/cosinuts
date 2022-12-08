export const debounceState = () => ({
  debounceTimer: null
});

export const debounceMutations = () => ({
  setDebounceTimer(state, payload) {
    state.debounceTimer = payload;
  }
});

export const debounceActions = () => ({
  debounce({state, commit}, payload = 1000) {
    clearTimeout(state.debounceTimer);

    return new Promise(resolve => {
      const debounceTimer = setTimeout(() => {
        commit('setDebounceTimer', null);
        resolve();
      }, payload);

      commit('setDebounceTimer', debounceTimer);
    });
  }
});