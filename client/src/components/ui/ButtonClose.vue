<template>
  <button
    type="button"
    class="btn-close"
  >
    <Sprite
      class="btn-close__icon"
      name="close"
    />
  </button>
</template>

<script>
export default {
  name: 'ButtonClose'
}
</script>

<style lang="scss" scoped>
.btn-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background-color: $color-danger;
  cursor: pointer;
  border-radius: 50%;
  opacity: 1;
  transition: opacity .5s ease 0s;

  &:hover {
    opacity: .7;
  }

  &__icon {
    display: block;
    width: 10px;
    height: 10px;
    fill: #ffffff;
  }
}
</style>