<template>
  <div
    v-if="!isLoading"
    :class="[
      'message',
      {[`message-${type}`]: type}
    ]"
  >
    {{text}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Message',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    text: {
      type: String
    }
  },
  computed: {
    ...mapGetters('global', {
      isLoading: 'isLoading'
    })
  }
}
</script>

<style lang="scss" scoped>
.message {
  line-height: 1.2;

  &-info {
    margin-bottom: 20px;

    @include media('min', $viewport-post-md) {
      font-size: 18px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }

  &-error {
    padding-top: 10px;
    color: $color-danger;

    @include media('min', $viewport-post-md) {
      font-size: 16px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }
}
</style>