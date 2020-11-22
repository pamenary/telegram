<template>
  <div class="contacts-page d-flex flex-column">
    <TitlePage title="Contacts" />
    <div class="main-contacts d-flex mt-20">
      <Contacts class="ml-20" />
      <ContactDetails v-if="contact" class="ml-20" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('contact', ['contact']),
  },
  mounted() {
    const contactId = this.$route.params.contactId
    this.$store.commit('contact/SET_CONTACT', contactId)
  },
}
</script>

<style lang="scss" scoped>
.contacts-page,
.main-contacts {
  height: 100%;
}
</style>
