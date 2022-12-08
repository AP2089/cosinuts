<template>
  <button
    :type="type"
    class="btn-like"
  >
    <Sprite
      class="btn-like__icon"
      name="like"
    />
  </button>
</template>

<script>
export default {
  name: 'ButtonLike',
  props: {
    type: {
      type: String,
      default: 'button'
    }
  },
}
</script>

<style lang="scss" scoped>
.btn-like {
  $rs: &;
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  &__icon {
    display: block;
    width: 26px;
    height: 23px;
    fill: $color-primary;
    transition: fill .5s ease 0s;
  }

  &:hover,
  &.active {
    #{$rs}__icon {
      fill: $color-danger;
    }
  }
}
</style>