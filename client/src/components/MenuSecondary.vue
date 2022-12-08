<template>
  <nav class="menu-secondary">
    <div
      v-if="heading"
      class="menu-secondary__heading"
    >
      {{heading}}
    </div>

    <ul class="menu-secondary__list">
      <li
        class="menu-secondary__item"
        v-for="item in items"
        :key="item.id"
      >
        <router-link
          :to="item.link"
          class="menu-secondary__link"
        >
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MenuSecondary',
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
.menu-secondary {
  background: rgba(83, 141, 255, 0.05);

  @include media('min', $viewport-post-md) {
    border-radius: 26px;
    padding: 30px 20px;
  }
  
  @include media('max', $viewport-md) {
    border-radius: 15px;
    padding: 15px 10px;
  }

  &__heading {
    font-weight: 700;
    line-height: 1.2;
    color: $color-global;
    padding: 0 0 0 15px;
    margin: 0 0 15px 0;

    @include media('min', $viewport-post-md) {
      font-size: 21px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    margin: 0 0 1px 0;
    padding: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__link {
    display: inline-flex;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 1px;
    color: $color-global;
    text-decoration: none;
    background-color: transparent;
    transition: color .5s ease 0s, background-color .5s ease 0s;

    @include media('min', $viewport-post-md) {
      padding: 12px 15px 11px 15px;
      font-size: 18px;
      border-radius: 15px;
    }

    @include media(null, $viewport-post-sm, $viewport-md) {
      padding: 9px 10px 8px 10px;
      font-size: 14px;
      border-radius: 5px;
    }

    @include media('max', $viewport-sm) {
      width: 100%;
      padding: 9px 10px 8px 10px;
      font-size: 14px;
      border-radius: 5px;
    }

    &:hover,
    &.active {
      text-decoration: none;
      color: #ffffff;
      background-color: $color-primary;
    }
  }
}
</style>