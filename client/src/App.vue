<template>
  <router-view/>
  
  <Loader
    :isLoading="isLoading"
  />

  <Notification
    v-for="error in errors"
    :title="$t('error')"
    :text="error"
    type="error"
  />
</template>

<script>
import {mapGetters} from 'vuex';
import useSpriteSvg from '@/hooks/useSpriteSvg';
import useLocalState from '@/hooks/useLocalState';

export default {
  name: 'App',
  setup() {
    useLocalState();
    useSpriteSvg('img/sprite.svg');
  },
  computed: {
    ...mapGetters('global', {
      isLoading: 'isLoading',
      errors: 'errors'
    })
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
