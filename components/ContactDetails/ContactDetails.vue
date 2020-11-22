<template>
  <div class="contact-details d-flex flex-column justify-space-between">
    <Profile
      :avatar="contact.avatar"
      :full-name="contact.fullName"
      :link="link(contact.id)"
      is-icon
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('contact', ['contact']),
  },
  methods: {
    link(id) {
      return `/chats/${id}`
    },
  },
}
</script>

<style lang="scss" scoped>
.contact-details {
  height: calc(100% - 20px);
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background-color: #fff;
  width: calc(100% - 360px);
  position: relative;
}
</style>
