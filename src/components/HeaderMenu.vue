<template>
  <section id="menu-list" class="positon-fixed">
    <button class="navbar-toggler position-absolute humberger-bar">
      <img src="@/assets/img/header-panel.svg" alt="menu" />
    </button>
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="card col-6">a</div>
        <div class="card col-6">b</div>
        <div class="card col-6">c</div>
        <div class="card col-6">d</div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#menu-list {
  height: 100vh;
  width: 100%;
  background: #fff;
}

.humberger-bar {
  right: 50px;
  top: 50px;
}

.humberger-bar::before {
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

.header-menu {
  height: 100vh;
  width: 100%;
}
</style>