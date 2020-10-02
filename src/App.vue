<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Quicksand", "M PLUS Rounded 1c", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #515151;
  #menu-list {
    top: 0;
    z-index: 2;
  }
  h1 {
    font-size: 44px;
  }
  a {
    font-size: 16px;
    text-decoration: none;
  }
}
</style>
