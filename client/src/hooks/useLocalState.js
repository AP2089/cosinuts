import {onBeforeMount} from 'vue';

export default function() {
  onBeforeMount(() => {
    const localState = JSON.parse(localStorage.getItem('localState'));

    if (!localState) {
      localStorage.setItem('localState', JSON.stringify({
        like: [],
        cart: []
      }));
    }
  });
}