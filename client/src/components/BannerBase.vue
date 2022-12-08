<template>
  <div class="banner-base">
    <div class="banner-base__left">
      <h1 class="banner-base__heading">
        <span class="banner-base__heading-name">
          <span class="banner-base__heading-note">Dri</span>ed
        </span> 
        Fruits
      </h1>
      <div class="banner-base__description">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
        Lorem Ipsum является стандартной
      </div>
    </div>
    <div class="banner-base__right">
      <Picture
        class="banner-base__image"
        src="01.png"
        alt="Dried Fruits"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerBase'
}
</script>

<style lang="scss" scoped>
.banner-base {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include media('min', $viewport-post-md) {
    margin-bottom: 30px;
  }
  
  @include media('max', $viewport-md) {
    margin-bottom: 20px;
  }

  &__left {
    max-width: 715px;
    padding-right: 15px;
  }

  &__heading {
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.03em;
    color: $color-service;
    margin: 0 0 10px 0;
    padding: 0;
  }

  &__heading-name {
    font-weight: 300;

    @include media('min', $viewport-post-lg) {
      font-size: 161px;
    }
    
    @include media(null, $viewport-post-md, $viewport-lg) {
      font-size: 100px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 50px;
    }
  }

  &__heading-note {
    color: $color-base;
  }

  &__description {
    font-weight: 300;
    letter-spacing: 1px;
    color: $color-general;

    @include media('min', $viewport-post-md) {
      font-size: 24px;
      line-height: 2;
    }
    
    @include media('max', $viewport-md) {
      font-size: 16px;
      line-height: 1.8;
    }
  }
}
</style>