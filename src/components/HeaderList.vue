<template>
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
</template>
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
</style>