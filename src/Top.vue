<template>
  <div>
    <section id="top">
      <img class="sub-title" src="./assets/img/ayako-tanaka.svg" alt="Ayako Tanaka" />
    </section>
    <section id="about">
      <div class="container">
        <h1 class="section-title">About</h1>
        <div class="profile">
          <div class="picture"></div>
          <div class="content">
            <div class="d-flex">
              <h2>Ayako Tanaka</h2>
            </div>
            <ul>
              <li>2001年 千葉県生まれ</li>
              <li>2019年 東京理科大学入学</li>
              <li>
                2020年現在 株式会社ShinonomeのPlay Groundという
                <br />コミュニティでプログラミングを学んでいます。
              </li>
            </ul>
            <a class="read-more ml-auto" href="about-me">Read More</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.read-more {
  position: relative;
  color: #515151;
  transition: 0.2s;
  &:before,
  &:after {
    content: "";
    position: absolute;
  }
  &:before {
    width: calc(100% + 16px);
    height: 1px;
    bottom: -2px;
    left: -4px;
    background: #575757;
  }
  &:after {
    right: -10px;
    bottom: -5px;
    width: 8px;
    height: 8px;
    border-top: 1px solid #575757;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &:hover {
    color: #ffb874;
    &:before {
      background: #ffb874;
    }
    &:after {
      border-top: 1px solid#FFB874;
    }
  }
}
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
  padding: 100px 0;
  background: 0% / cover no-repeat url(./assets/img/about.svg);
  .container {
    padding: 100px;
    .section-title {
      text-align: left;
    }
    .profile {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 40px;
      .picture {
        height: 200px;
        width: 200px;
        background: 0% / cover no-repeat url(./assets/img/ayako.jpg);
        border-radius: 20px;
        margin-right: 60px;
      }
      .content {
        display: grid;
        gap: 24px;
        flex-direction: column;
        align-items: flex-start;
        h2 {
          position: relative;
          z-index: 0;
          &:before {
            content: "";
            height: 10px;
            width: calc(100% + 12px);
            background: #ffe2c6;
            position: absolute;
            z-index: -1;
            left: -6px;
            bottom: 0px;
          }
        }
        ul {
          list-style: none;
          text-align: left;
          display: grid;
          gap: 12px;
        }
      }
    }
  }
}
</style>
