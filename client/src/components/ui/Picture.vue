<template>
  <picture>
    <source 
      :srcset="webp"
      type="image/webp" 
    />

    <img
      :src="any"
      :alt="alt"
      loading="lazy"
    />
  </picture>
</template>

<script>
export default {
  name: 'Picture',
  props: {
    src: {
      type: String,
      required: true,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
    any() {
      return this.src ? require(`@/images/${this.src}`) : '';
    },
    webp() {
      return this.any ? this.any.replace(/\.[^/.]+$/, '.webp') : '';
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  display: block;
  max-width: 100%;
}
</style>