<template>
  <nav class="menu-main">
    <div
      class="menu-main__bg"
      @click="change"
    ></div>

    <div class="menu-main__wrap">
      <ul class="menu-main__list">
        <li
          class="menu-main__item"
          v-for="item in items"
          :key="item.id"
        >
          <router-link
            :to="item.link"
            match="subroute"
            class="menu-main__link"
            @click="change"
          >
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MenuMain',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    change() {
      this.$emit('change', false);
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-main {
  @include media('max', $viewport-md) {
    width: 0;
    height: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    opacity: 0;
    backdrop-filter: blur(3px);
    background-color: rgba(0,0,0,.2);
    transition: opacity .5s ease 0s, width 0s ease .5s, height 0s ease .5s;

    &.active {
      width: 100%;
      height: 100%;
      overflow: auto;
      opacity: 1;
      transition: opacity .5s ease 0s, width 0s ease 0s, height 0s ease 0s;
    }
  }

  &__bg {
    @include media('min', $viewport-post-md) {
      display: none;
    }
    
    @include media('max', $viewport-md) {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
  }

  &__wrap {
    @include media('max', $viewport-md) {
      width: 200px;
      height: 100%;
      padding-top: 60px;
      background-color: #ffffff;
      box-shadow: 0px 5px 10px 10px rgba(34, 60, 80, 0.2);
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;

    @include media('min', $viewport-post-md) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }

    @include media('max', $viewport-md) {
      overflow-x: hidden;
      overflow-y: auto;
      height: 100%;
    }
  }

  &__item {
    padding: 0;

    @include media('min', $viewport-post-xlg) {
      margin: 0 45px 0 0;

      &:last-child {
        margin-right: 0;
      }
    }

    @include media(null, $viewport-post-md, $viewport-xlg) {
      margin: 0 20px 0 0;

      &:last-child {
        margin-right: 0;
      }
    }

    @include media('max', $viewport-md) {
      margin: 0 0 1px 0;
    }
  }

  &__link {
    font-weight: 400;
    line-height: 1;
    text-decoration: none;

    @include media('min', $viewport-post-lg) {
      font-size: 18px;
      color: rgba(0, 0, 0, 0.35);
      transition: color .5s ease 0s;
    }
    
    @include media('max', $viewport-lg) {
      font-size: 15px;
      color: rgba(0, 0, 0, 0.35);
      transition: color .5s ease 0s;
    }
    
    @include media('max', $viewport-md) {
      display: block;
      padding: 10px 15px;
      color: $color-global;
      background-color: transparent;
      transition: color .5s ease 0s, background-color .5s ease 0s;
    }

    &:hover,
    &.active {
      text-decoration: none;

      @include media('min', $viewport-post-md) {
        color: $color-global;
      }
      
      @include media('max', $viewport-md) {
        color: #ffffff;
        background-color: $color-base;
      }
    }
  }
}
</style>