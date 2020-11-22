<template>
  <div class="chats d-flex flex-column py-20">
    <div class="chat">
      <Profile
        v-for="contact of contacts"
        :key="contact.id"
        :avatar="contact.avatar"
        :full-name="contact.fullName"
        :link="link(contact.id)"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('contact', ['contacts']),
  },
  methods: {
    link(id) {
      return `/contacts/${id}`
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
