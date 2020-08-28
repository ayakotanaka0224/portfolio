<template>
  <div>
    <header class="d-flex align-items-center">
      <router-link class="logo" to="/">
        <img src="@/assets/img/site-logo.svg" alt="ayako-site" />
      </router-link>
      <ul class="nav-list d-flex">
        <li class="nav-item">
          <router-link class="nav-link" to="/">About me</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Works</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Blog</router-link>
        </li>
      </ul>
    </header>
    <section id="menu-list" class="positon-fixed">
      <button class="navbar-toggler position-absolute humberger-bar">
        <img src="@/assets/img/header-panel.svg" alt="menu" />
      </button>
      <div class="container h-100 menu-cards">
        <div class="row align-items-center justify-content-between h-100">
          <div v-for="card in cards" :key="card.title" class="col-8 col-lg-5">
            <div class="card border-0 m-auto" :style="{ boxShadow: '0 0 36px ' + card.shadowColor}">
              <div class="card-body">
                <h5 class="card-title">{{card.title}}</h5>
                <p class="card-text">{{card.text}}</p>
                <p class="card-subtext" :style="{ color: card.subTextColor}">{{card.subText}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "About Me",
        text:
          "私がどのようにプログラミングに触れてきたか など、私の人生を紹介します。",
        subText: "Do you know me?",
        shadowColor: "#ffe2c6",
        subTextColor: "#ffb874"
      },
      {
        title: "Skills",
        text:
          "大学から始めたプログラミングで 習得した言語やスキルを載せています。",
        subText: "My focus is on ...",
        shadowColor: "#bee4ec",
        subTextColor: "#94dded"
      },
      {
        title: "Works",
        text: "今まで私が関わったプロジェクトの成果物を 載せています。",
        subText: "What I did ...",
        shadowColor: "#e9d7ff",
        subTextColor: "#c99eff"
      },
      {
        title: "Blog",
        text: "三日坊主なので更新頻度は低いですが、 日常を呟きます。",
        subText: "My daily life ...",
        shadowColor: "#ffd0d0",
        subTextColor: "#ec8d8d"
      }
    ]
  })
};
</script>

<style scoped>
header {
  height: 100px;
  padding: 20px;
}

header .logo {
  padding: 12px;
}

header .nav-list {
  list-style-type: none;
  margin-bottom: 0;
}

header .nav-link {
  color: #777;
}

header .nav-link:hover {
  color: #515151;
}

header .humberger-bar {
  right: 50px;
  top: 50px;
}

header .humberger-bar::before {
  content: "";
  background-image: url(../assets/img/header-bar.svg);
  width: 213px;
  height: 55px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: -40px;
  right: -68px;
}

#menu-list {
  height: 100vh;
  width: 100%;
  background: #fff;
}

#menu-list .humberger-bar {
  right: 50px;
  top: 50px;
}

#menu-list .humberger-bar:focus {
  box-shadow: none;
}

#menu-list .humberger-bar::before {
  content: "";
  background-image: url(../assets/img/header-bar.svg);
  width: 213px;
  height: 55px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: -40px;
  right: -68px;
}

#menu-list .header-menu {
  min-height: 100vh;
  height: auto;
  width: 100%;
}

#menu-list .menu-cards {
  width: 60%;
}

#menu-list .card-title {
  font-size: 24px;
  text-align: left;
  display: flex;
  align-items: center;
  color: #515151;
}

#menu-list .card-title:after {
  content: "";
  background: #a3a3a3;
  width: 30px;
  height: 1px;
  display: flex;
  margin-left: 24px;
}

#menu-list .card-text {
  font-size: 16px;
  color: #777;
  text-align: left;
}

#menu-list .card-subtext {
  font-family: "Sacramento", cursive;
  font-size: 24px;
  transform: rotate(-10deg);
  text-align: right;
  margin: 28px 0 0;
}
</style>