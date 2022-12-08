<template>
  <Notifications />
</template>

<script>
export default {
  name: 'Notification',
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    type: {
      type: String,
      default: 'warn'
    }
  },
  methods: {
    show() {
      if (this.text) {
        this.$notify({
          title: this.title,
          text: this.text,
          type: this.type,
          duration: 3000,
        });
      }
    }
  },
  mounted() {
    this.show();
  },
  watch: {
    text() {
      this.show();
    }
  }
}
</script>