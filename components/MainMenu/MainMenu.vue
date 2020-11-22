<template>
  <aside class="main-menu d-flex flex-column justify-space-between pb-5">
    <div class="top-main-menu d-flex flex-column">
      <Logo class="mt-20" />

      <nav class="d-flex flex-column">
        <nuxt-link to="/chats">
          <i class="fas fa-comments"></i>
          <span class="label ml-10">Chat</span>
        </nuxt-link>
        <nuxt-link to="/contacts">
          <i class="fas fa-user-friends"></i>
          <span class="label ml-10">Contacts</span>
        </nuxt-link>
      </nav>
    </div>

    <button type="button">
      <i class="fas fa-sign-out-alt"></i>
      <span class="label ml-10">Log Out</span>
    </button>
  </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-menu {
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  background-color: #fffdfe;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 160px;
  min-width: 160px;
  height: 100%;

  nav {
    margin-top: 40px;
    a {
      line-height: 35px;
      border-left: 3px solid transparent;
      i {
        color: $primary-color;
        margin-left: 22px;
      }
      .label {
        color: $text-gray;
      }

      &.nuxt-link-active {
        .label {
          color: $primary-color;
        }
        background-color: rgba($primary-color, 0.1);
        border-left: 3px solid $primary-color;
      }
    }
  }

  button {
    border: none;
    background: transparent;
    line-height: 35px;
    text-align: left;
    cursor: pointer;
    i {
      color: #50555e;
      margin-left: 22px;
    }
    .label {
      color: $text-gray;
    }
  }
}
</style>
