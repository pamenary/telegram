<template>
  <div class="messages-list d-flex flex-column justify-end pa-10">
    <Message
      v-for="msg of conversation.messages"
      :key="msg.id"
      :message="msg"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('conversation', ['conversation']),
  },
}
</script>

<style lang="scss" scoped>
.messages-list {
  height: 100%;
  overflow-y: auto;
}
</style>
