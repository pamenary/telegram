<template>
  <div class="messages d-flex flex-column justify-space-between">
    <MessagesHeader />
    <MessagesList />
    <SendMessage />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.messages {
  height: calc(100% - 20px);
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background-color: #fff;
  width: calc(100% - 360px);
}
</style>
