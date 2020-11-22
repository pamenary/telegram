<template>
  <div class="header py-5 pb-0">
    <Profile
      :full-name="conversation.user.fullName"
      :avatar="conversation.user.avatar"
      :link="link(conversation.user.id)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('conversation', ['conversation']),
  },
  methods: {
    link(id) {
      return `/contacts/${id}`
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #ebf2ff;
}
</style>
