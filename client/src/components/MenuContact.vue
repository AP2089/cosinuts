<template>
  <div class="menu-contact">
    <div 
      class="menu-contact__heading"
      v-if="heading"
    >
      {{heading}}
    </div>
    <ul class="menu-contact__list">
      <li
        class="menu-contact__item"
        v-for="item in items"
        :key="item.id"
      >
        <a
          class="menu-contact__phone"
          :href="`tel:${item.content}`"
          v-if="item.type === 'phone'"
        >
          <Sprite
            class="menu-contact__phone-icon"
            name="phone"
          />

          {{item.content}}
        </a>

        <a
          class="menu-contact__email"
          :href="`mailto:${item.content}`"
          v-else-if="item.type === 'email'"
        >
          <Sprite
            class="menu-contact__email-icon"
            name="email"
          />

          {{item.content}}
        </a>

        <span
          class="menu-contact__local"
          v-else-if="item.type === 'local'"
        >
          <Sprite
            class="menu-contact__local-icon"
            name="local"
          />

          {{item.content}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuContact',
  props: {
    heading: {
      type: String
    },
    items: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-contact {
  &__heading {
    font-weight: 700;
    line-height: 1;
    color: $color-global;
    position: relative;

    @include media('min', $viewport-post-md) {
      font-size: 27px;
      margin: 0 0 15px 0;
      padding: 0 0 19px 0;
    }
    
    @include media('max', $viewport-md) {
      font-size: 16px;
      margin: 0 0 10px 0;
      padding: 0 0 8px 0;
    }

    &:after {
      display: block;
      content: '';
      width: 60px;
      height: 1px;
      background-color: $color-global;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    margin: 0 0 10px 0;
    padding: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__phone,
  &__email,
  &__local {
    display: inline-block;
    font-weight: 500;
    line-height: 1.4;
    color: $color-secondary;
    text-decoration: none;
    position: relative;

    @include media('min', $viewport-post-md) {
      font-size: 20px;
      padding-left: 30px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
      padding-left: 22px;
    }
  }

  &__phone,
  &__email {
    opacity: 1;
    transition: opacity .5s ease 0s;

    &:hover {
      text-decoration: none;
      color: $color-secondary;
      opacity: .7;
    }
  }

  &__phone-icon,
  &__email-icon,
  &__local-icon {
    display: block;
    fill: $color-secondary;
    position: absolute;
    left: 0;
  }

  &__phone-icon {
    @include media('min', $viewport-post-md) {
      width: 19px;
      height: 19px;
      top: 5px;
    }
    
    @include media('max', $viewport-md) {
      width: 12px;
      height: 12px;
      top: 2px;
    }
  }

  &__email-icon {
    @include media('min', $viewport-post-md) {
      width: 17px;
      height: 12px;
      top: 9px;
    }
    
    @include media('max', $viewport-md) {
      width: 12px;
      height: 8px;
      top: 5px;
    }
  }

  &__local-icon {
    @include media('min', $viewport-post-md) {
      width: 14px;
      height: 19px;
      top: 4px;
    }
    
    @include media('max', $viewport-md) {
      width: 10px;
      height: 14px;
      top: 2px;
    }
  }
}
</style>