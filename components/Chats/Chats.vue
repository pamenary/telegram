<template>
  <div class="chats d-flex flex-column py-20">
    <div class="chat">
      <Profile
        v-for="conversation of conversations"
        :key="conversation.id"
        :avatar="conversation.user.avatar"
        :full-name="conversation.user.fullName"
        :link="link(conversation.id)"
        :last-message="conversation.lastMassage"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('conversation', ['conversations']),
  },
  methods: {
    link(id) {
      return `/chats/${id}`
    },
  },
}
</script>

<style lang="scss" scoped>
.chats {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background-color: #fff;
  width: 300px;
  min-width: 300px;
  height: calc(100% - 20px);
}
</style>
