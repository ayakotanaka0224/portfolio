<template>
  <div>
    <section id="top">
      <img class="sub-title" src="./assets/img/ayako-tanaka.svg" alt="Ayako Tanaka" />
    </section>
    <section id="about">
      <div class="container">
        <h1 class="section-title">About</h1>
        <div class="row profile">
          <div class="col"></div>
          <div class="col-3" style="background-image: url('./assets/img/ayako.jpg');">
            <img class="w-100" src="./assets/img/ayako.jpg" alt="Ayako Tanaka" />
          </div>
          <div class="col-4">
            <h2>Ayako Tanaka</h2>
            <ul>
              <li>2001年 千葉県生まれ</li>
              <li>2019年 東京理科大学入学</li>
              <li>2020年現在 株式会社ShinonomeのPlay Groundというコミュニティでプログラミングを学んでいます。</li>
            </ul>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#top {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  background: 0% / cover no-repeat url(./assets/img/top.svg);
  .sub-title {
    display: block;
    margin: 0 auto;
    width: 54%;
    max-width: 100%;
  }
}
#about {
  margin: 80px 0;
  background: 0% / cover no-repeat url(./assets/img/about.svg);
  .container {
    padding: 100px;
    .section-title {
      text-align: left;
    }
    .profile {
      margin: 40px;
    }
  }
}
</style>
