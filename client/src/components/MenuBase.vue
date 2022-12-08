<template>
  <nav class="menu-base">
    <h3 class="menu-base__heading">{{heading}}</h3>
    <ul class="menu-base__list">
      <li
        class="menu-base__item"
        v-for="item in items"
        :key="item.id"
      >
        <router-link
          :to="item.link"
          class="menu-base__link"
        >
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MenuBase',
  props: {
    heading: {
      type: String
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-base {
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

  &__link {
    font-weight: 400;
    line-height: 1;
    color: $color-secondary;
    text-decoration: none;
    opacity: 1;
    transition: opacity .5s ease 0s;

    @include media('min', $viewport-post-md) {
      font-size: 20px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }

    &:hover,
    &.active {
      text-decoration: none;
      opacity: .7;
    }
  }
}
</style>