<template>
  <section id="menu-list" class="positon-fixed">
    <button class="navbar-toggler position-absolute humberger-bar">
      <img src="@/assets/img/header-panel.svg" alt="menu" />
    </button>
    <div class="container h-100 menu-cards">
      <div class="row align-items-center justify-content-between h-100">
        <div v-for="card in cards" :key="card.title" class="col-8 col-lg-5">
          <div class="card m-auto">
            <div class="card-body">
              <h5 class="card-title">{{card.title}}</h5>
              <p class="card-text">{{card.text}}</p>
              <p class="card-subtext">{{card.subText}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "About Me",
        text:
          "私がどのようにプログラミングに触れてきたか など、私の人生を紹介します。",
        subText: "Do you know me?"
      },
      {
        title: "Skills",
        text:
          "大学から始めたプログラミングで 習得した言語やスキルを載せています。",
        subText: "My focus is on ..."
      },
      {
        title: "Works",
        text: "今まで私が関わったプロジェクトの成果物を 載せています。",
        subText: "What I did ..."
      },
      {
        title: "Blog",
        text: "三日坊主なので更新頻度は低いですが、 日常を呟きます。",
        subText: "My daily life ..."
      }
    ]
  })
};
</script>

<style scoped>
#menu-list {
  height: 100vh;
  width: 100%;
  background: #fff;
}

#menu-list .humberger-bar {
  right: 50px;
  top: 50px;
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

#menu-list .card {
  border: none;
  box-shadow: 0 0 36px #ffe2c6;
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
  color: #ffb874;
  transform: rotate(-10deg);
  text-align: right;
  margin: 28px 0 0;
}
</style>
