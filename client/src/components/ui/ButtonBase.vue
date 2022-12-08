<template>
  <button
    class="btn-base"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonBase'
}
</script>

<style lang="scss" scoped>
.btn-base {
  background-color: $color-primary;
  border: 1px solid $color-primary;
  border-radius: 14px;
  font-weight: 700;
  line-height: 1.2;
  color: #FFFFFF;
  margin: 0;
  cursor: pointer;
  transition: color .5s ease 0s, background-color .5s ease 0s;

  @include media('min', $viewport-post-md) {
    font-size: 21px;
    padding: 14px 25px;
  }
  
  @include media('max', $viewport-md) {
    font-size: 15px;
    padding: 10px 15px;
  }

  &:hover,
  &.active {
    background-color: transparent;
    color: $color-primary;
  }

  &:disabled {
    opacity: .5;
    color: #FFFFFF !important;
    background-color: $color-primary !important;
    border: 1px solid $color-primary !important;
    cursor: default;
  }
}
</style>