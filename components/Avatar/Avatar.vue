<template>
  <div class="avatar">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  img {
    border-radius: 100%;
    width: 36px;
    height: 36px;
  }
}
</style>
