<template>
  <div class="title">{{ title }}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  color: #000;
  font-weight: 500;
  font-size: 16px;
  margin-top: 25px;
  margin-left: 20px;
}
</style>
