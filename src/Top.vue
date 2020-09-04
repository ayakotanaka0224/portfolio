<template>
  <main>
    <section id="top">
      <img class="sub-title" src="./assets/img/ayako-tanaka.svg" alt="AYako Tanaka" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  #top {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 100px;
    background: 0% / cover no-repeat url(./assets/img/top.svg);
    color: #515151;
    .sub-title {
      display: block;
      margin: 0 auto;
      width: 54%;
      max-width: 100%;
    }
  }
}
</style>
