<template lang="pug">
  div
    .sidebar
    .container
      Nuxt
</template>

<style lang="scss">
html {
  font-family:'Roboto', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #263238;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  background: #F9FAFB;
  width: 19.3%;
  height: 100vh;
  @media(max-width: 768px) {
    width: 100%;
    height: 70px;
  }
}
.container {
  padding: 69px 4.3% 50px 23.6%;
  @media(max-width: 768px) {
    padding: 86px 0;
    width: 92%;
    margin: 0 auto;
  }
}
</style>
