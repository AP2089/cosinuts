<template>
  <div class="logo">
    <router-link to="/" class="logo__link">
      <img src="@/images/logo.svg" alt="Cosinuts" class="logo__img" width="155" height="57" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
.logo {
  @include media('min', $viewport-post-md) {
    width: 155px;
  }
  
  @include media('max', $viewport-md) {
    width: 100px;
  }

  &__link {
    display: inline-flex;
    text-decoration: none;
    opacity: 1;
    transition: opacity .5s ease 0s;

    &:hover {
      text-decoration: none;
      opacity: .7;
    }
  }

  &__img {
    @include media('min', $viewport-post-md) {
      width: 155px;
      height: 57px;
    }
    
    @include media('max', $viewport-md) {
      width: 100px;
      height: 37px;
    }
  }
}
</style>