<template>
  <div class="chats-page d-flex flex-column">
    <TitlePage title="Chats" />
    <div class="main-chats d-flex mt-20">
      <Chats class="ml-20" />
      <Messages v-if="conversation" class="ml-20" />
    </div>
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

<style></style>

<style lang="scss" scoped>
.chats-page,
.main-chats {
  height: 100%;
}
</style>
