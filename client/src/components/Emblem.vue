<template>
  <div class="emblem">
    <Picture
      :src="src"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  name: 'Emblem',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.emblem {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 20px auto;

  @include media('min', $viewport-post-md) {
    max-width: 500px;
  }
  
  @include media('max', $viewport-md) {
    max-width: 300px;
  }
}
</style>