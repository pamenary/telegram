<template>
  <div class="logo d-flex align-center justify-center">
    <i class="fab fa-telegram"></i>
    <span class="label ml-15">Telegram</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.logo {
  user-select: none;
  i {
    color: $primary-color;
    font-size: 30px;
  }
  .label {
    color: #6e7479;
    font-weight: 500;
  }
}
</style>
