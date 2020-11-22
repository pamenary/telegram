<template>
  <div class="send-message py-10 d-flex justify-center align-center">
    <div class="text ml-10">
      <textarea
        v-model="message"
        name="message"
        rows="10"
        placeholder="Type a message"
        @keyup.enter="onSendMessage"
      />
    </div>
    <button type="button m-5" @click="onSendMessage">
      <i class="fab fa-telegram-plane"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
    }
  },
  methods: {
    onSendMessage() {
      this.$store.commit('conversation/PUSH_MESSAGE', {
        id: +new Date(),
        message: this.message,
        isMe: true,
      })
      this.message = null
      setTimeout(() => {
        const emojies = ['🤙', '🙏', '❤️', '😘', '😱']
        const randomIndex = Math.floor(Math.random() * emojies.length)
        this.$store.commit('conversation/PUSH_MESSAGE', {
          id: +new Date(),
          message: emojies[randomIndex],
          isMe: false,
        })
      }, 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
.send-message {
  background: #ebf2ff;
  width: 100%;
  line-height: 50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  line-height: 35px;
  .text {
    width: calc(100% - 55px);
    height: 30px;
    textarea {
      background: transparent;
      width: 100%;
      height: 30px;
      border: none;
      color: $primary-color;
      resize: none;
    }
  }

  button {
    width: 50px;
    border: none;
    background: transparent;
    text-align: center;
    cursor: pointer;
    i {
      color: $primary-color;
      font-size: 22px;
    }
  }
}
</style>
