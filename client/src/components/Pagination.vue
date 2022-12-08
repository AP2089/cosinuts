<template>
  <paginate
    :page-count="count"
    :click-handler="change"
    prev-text="<"
    next-text=">"
    v-if="count > 1"
  />
</template>

<script>
import Paginate from 'vuejs-paginate-next';

export default {
  name: 'Pagination',
  components: {
    Paginate
  },
  props: {
    count: {
      type: Number,
      default: 0,
      required: true
    }
  },
  methods: {
    change(pageNumber) {
      this.$emit('change', pageNumber);
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination::v-deep {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;

  .page-item {
    margin: 0 2px;
    padding: 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 1;
    color: rgba(54, 54, 54, 0.35);
    user-select: none;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .page-link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    min-height: 30px;
    padding: 2px;
    margin: 0;
    color: $color-primary;
    cursor: pointer;
    border: 1px solid $color-primary;
    background-color: transparent;
    transition: color .5s ease 0s, background-color .5s ease 0s, border-color .5s ease 0s;
  }

  .page-item .page-link:hover,
  .page-item.active .page-link {
    color: #ffffff;
    background-color: $color-primary;
  }

  .page-item.disabled .page-link {
    cursor: default;
    color: rgba(54, 54, 54, 0.35) !important;
    background-color: transparent !important;
    opacity: .5;
  }
}
</style>