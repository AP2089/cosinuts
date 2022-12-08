<template>
  <div class="list-base">
    <div
      class="list-base__item"
      v-for="item in items"
      :key="item.id"
    >
      <Picture
        :src="item.image"
        :alt="item.name"
        class="list-base__img"
      />

      <div
        class="list-base__content"
        v-html="item.content"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBase',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.list-base {
  &__item {
    @include media('min', $viewport-post-md) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 30px;
    }

    @include media(null, $viewport-post-xs, $viewport-md) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 20px;
    }

    @include media('max', $viewport-xs) {
      margin-bottom: 20px;
    }
  }

  &__img {
    display: block;
    border-radius: 10px;
    overflow: hidden;

    @include media('min', $viewport-post-md) {
      width: 25%;
    }

    @include media(null, $viewport-post-xs, $viewport-md) {
      width: 25%;
    }

    @include media('max', $viewport-xs) {
      display: block;
      max-width: 200px;
      margin: 0 auto 15px auto;
    }
  }

  &__content {
    @include media('min', $viewport-post-md) {
      padding-left: 30px;
    }

    @include media(null, $viewport-post-xs, $viewport-md) {
      padding-left: 15px;
    }

    @include media('min', $viewport-post-xs) {
      width: 75%;
    }
  }
}
</style>