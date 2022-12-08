export const getLocalStateKey = (key) => {
  const localState = JSON.parse(localStorage.getItem('localState'));

  if (localState) {
    return localState[key];
  }
  
  return null;
}

export const setLocalStateId = (key, id) => {
  const localState = JSON.parse(localStorage.getItem('localState'));

  if (id === null) {
    localState[key] = [];
    localStorage.setItem('localState', JSON.stringify(localState));

    return [];
  } else if (localState) {
    const filtered = localState[key].filter(currentId => currentId !== id);
    const data = localState[key].includes(id) ? filtered : [...filtered, id];
  
    localState[key] = data;
    localStorage.setItem('localState', JSON.stringify(localState));
  
    return data;
  }

  return null;
}