<template>
  <div class="message d-flex py-10 align-center" :class="{ me: message.isMe }">
    <div class="text px-15">{{ message.message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.message {
  .text {
    line-height: 32px;
    background-color: #eeefff;
    border-radius: 10px;
    border-top-left-radius: 0;
  }
  &.me {
    flex-direction: row-reverse;
    .text {
      margin-right: 10;
      color: $text-color;
    }
  }
}
</style>
