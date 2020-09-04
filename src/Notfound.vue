<template>
  <section id="not-found">
    <div>
      <p>お探しのページは見つかりません</p>
      <router-link to="/">Topページへ行く</router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#not-found {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  color: #515151;
}
</style>
