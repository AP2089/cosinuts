<template>
  <nav class="menu-primary">
    <ul class="menu-primary__list">
      <li
        class="menu-primary__item"
        v-for="item in items"
        :key="item.id"
      >
        <router-link
          :to="item.link"
          class="menu-primary__link"
        >
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MenuPrimary',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-primary {
  margin-bottom: 30px;
  
  &__list {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    margin: 0 10px 1px 10px;
    padding: 0;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    display: inline-block;
    color: $color-global;
    cursor: pointer;
    background-color: transparent;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 1px;
    border: none;
    margin: 0;
    text-decoration: none;
    transition: color .5s ease 0s, background-color .5s ease 0s;

    @include media('min', $viewport-post-md) {
      font-size: 18px;
      border-radius: 15px;
      padding: 13px 20px;
    }
    
    @include media('max', $viewport-md) {
      font-size: 14px;
      border-radius: 10px;
      padding: 10px 15px;
    }

    &:hover,
    &.active {
      background-color: $color-primary;
      color: #FFFFFF;
      text-decoration: none;
    }
  }
}
</style>