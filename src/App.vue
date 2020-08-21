<template>
  <div id="app">
    <HeaderList />
    <HeaderMenu />
    <router-view />
  </div>
</template>

<script>
import HeaderList from "./components/HeaderList";
import HeaderMenu from "./components/HeaderMenu";

export default {
  name: "app",
  components: {
    HeaderList,
    HeaderMenu
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#menu-list {
  position: absolute;
  top: 0;
}
</style>
