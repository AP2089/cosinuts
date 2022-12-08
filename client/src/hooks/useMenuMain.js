import {ref, onMounted, onUnmounted} from 'vue';

export default () => {
  const menuMenuMainIsActive = ref(false);

  const menuMenuMainChange = value => {
    menuMenuMainIsActive.value = value;
    document.body.style.overflowY = menuMenuMainIsActive.value ? 'hidden' : '';
  }

  const viewportHandler = () => {
    if (window.innerWidth >= 1070) {
      document.body.style.overflowY = '';
    } else if(menuMenuMainIsActive.value) {
      document.body.style.overflowY = 'hidden';
    }
  }

  onMounted(() => {
    window.addEventListener('resize', viewportHandler);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', viewportHandler);
  });

  return {
    menuMenuMainIsActive,
    menuMenuMainChange
  }
}