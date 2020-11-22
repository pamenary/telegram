<template>
  <nuxt-link :to="link" class="chat-item d-flex align-center py-10">
    <Avatar :src="avatar" class="ml-15" />
    <div class="info ml-12">
      <div class="full-name">{{ fullName }}</div>
      <div v-if="lastMessage" class="desc mt-7">{{ lastMessage }}</div>
    </div>
    <i v-if="isIcon" class="fas fa-envelope ml-10"></i>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    fullName: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    lastMessage: {
      type: String,
      default: '',
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-item {
  cursor: pointer;
  .full-name {
    color: #32343f;
    font-weight: 500;
  }
  .desc {
    color: #9da0a6;
    font-size: 12px;
  }
  &.nuxt-link-exact-active {
    background-color: rgba($primary-color, 0.1);
  }
}
</style>
