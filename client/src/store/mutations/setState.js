export default () => ({
  setState(state, [key, val]) {
    state[key] = val;
  }
});