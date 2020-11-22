<template>
  <div class="container">
    <div class="app d-flex">
      <MainMenu />
      <div class="right-side">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100vh;
  padding: 20px 0;
  .right-side {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #f8f8f8;
    width: calc(100% - 160px);
  }
}
</style>
